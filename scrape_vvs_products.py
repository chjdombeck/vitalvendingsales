import asyncio
import json
import os
import re
import urllib.request
from pathlib import Path
from playwright.async_api import async_playwright

BASE_URL = "https://www.vitalvendingsales.com"
EQUIPMENT_URL = f"{BASE_URL}/equipment"
OUTPUT_DIR = Path("vvs_product_catalog")
IMAGES_DIR = OUTPUT_DIR / "images"
OUTPUT_DIR.mkdir(exist_ok=True)
IMAGES_DIR.mkdir(exist_ok=True)

def slugify(text):
    text = text.lower().strip()
    text = re.sub(r'[^\w\s-]', '', text)
    text = re.sub(r'[\s_-]+', '-', text)
    return text

def download_image(url, filepath):
    try:
        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=15) as response:
            with open(filepath, 'wb') as f:
                f.write(response.read())
        print(f"  + Image saved: {filepath.name}")
        return str(filepath)
    except Exception as e:
        print(f"  x Image failed: {url} -- {e}")
        return None

async def get_all_product_links(page):
    print("Fetching equipment page...")
    await page.goto(EQUIPMENT_URL, wait_until="networkidle")
    await page.wait_for_timeout(4000)

    # Get all anchor hrefs, filter in Python
    all_links = await page.eval_on_selector_all(
        'a[href]',
        'els => [...new Set(els.map(e => e.href))]'
    )
    product_links = [
        l for l in all_links
        if '/equipment/' in l
        and l.rstrip('/') != EQUIPMENT_URL.rstrip('/')
        and not l.rstrip('/').endswith('/equipment')
    ]
    unique_links = list(set(product_links))
    print(f"Found {len(unique_links)} product links on equipment page")
    for l in unique_links:
        print(f"  {l}")
    return unique_links

async def get_all_parts_links(page):
    print("\nChecking parts page...")
    try:
        await page.goto(f"{BASE_URL}/parts", wait_until="networkidle")
        await page.wait_for_timeout(3000)
        all_links = await page.eval_on_selector_all('a[href]', 'els => [...new Set(els.map(e => e.href))]')
        parts_links = [l for l in all_links if '/parts/' in l and '/parts/p/' in l]
        unique = list(set(parts_links))
        print(f"Found {len(unique)} parts product links")
        return unique
    except Exception as e:
        print(f"Parts page failed: {e}")
        return []

async def scrape_product(page, url):
    print(f"\nScraping: {url}")
    await page.goto(url, wait_until="networkidle")
    await page.wait_for_timeout(3000)

    product = {
        "url": url,
        "name": "",
        "price": "",
        "description": "",
        "images": [],
        "image_files": [],
        "variants": [],
        "category": "",
        "slug": ""
    }

    # Product name — try multiple selectors
    for sel in ['h1.ProductItem-details-title', 'h1[class*="title"]', 'h1[class*="product"]', 'h1']:
        try:
            name = await page.eval_on_selector(sel, 'el => el.innerText')
            if name and name.strip():
                product["name"] = name.strip()
                product["slug"] = slugify(name.strip())
                print(f"  Name: {product['name']}")
                break
        except:
            continue

    # Price — try multiple selectors
    price_selectors = [
        '.product-price',
        '[class*="price"]',
        '.ProductItem-price',
        '[data-automation="product-price"]',
        '.sqs-money-native',
    ]
    for sel in price_selectors:
        try:
            price = await page.eval_on_selector(sel, 'el => el.innerText')
            if price and price.strip():
                product["price"] = price.strip()
                print(f"  Price: {product['price']}")
                break
        except:
            continue

    # Description — try multiple approaches
    desc_selectors = [
        '.ProductItem-description',
        '.product-description',
        '[class*="product-desc"]',
        '[class*="ProductItem-details-excerpt"]',
    ]
    for sel in desc_selectors:
        try:
            desc = await page.eval_on_selector(sel, 'el => el.innerText')
            if desc and desc.strip():
                product["description"] = desc.strip()
                break
        except:
            continue
    if not product["description"]:
        try:
            desc = await page.eval_on_selector_all('.sqs-block-content p', 'els => els.map(e => e.innerText).join("\n")')
            if desc and desc.strip():
                product["description"] = desc.strip()
        except:
            pass

    # Images — get all Squarespace CDN images
    try:
        img_srcs = await page.eval_on_selector_all(
            'img',
            '''els => [...new Set(
                els.map(e => e.getAttribute("data-src") || e.getAttribute("src") || "")
                   .filter(src => src && (src.includes("squarespace-cdn") || src.includes("static1.squarespace") || src.includes("images.squarespace")))
            )]'''
        )
        seen = set()
        clean_urls = []
        for u in img_srcs:
            base = u.split('?')[0]
            if base not in seen:
                seen.add(base)
                clean_urls.append(base + "?format=1500w")
        product["images"] = clean_urls
        print(f"  Images found: {len(clean_urls)}")
    except Exception as e:
        print(f"  Image extraction failed: {e}")

    # Download images
    slug = product["slug"] or "product"
    for i, img_url in enumerate(product["images"]):
        ext = ".jpg"
        filename = f"{slug}-{i+1}{ext}"
        filepath = IMAGES_DIR / filename
        saved = download_image(img_url, filepath)
        if saved:
            product["image_files"].append(filename)

    # Variants
    try:
        variants = await page.eval_on_selector_all(
            'select option',
            'els => els.map(e => e.innerText.trim()).filter(t => t && t !== "Select Configuration" && t !== "")'
        )
        product["variants"] = variants
        if variants:
            print(f"  Variants: {variants}")
    except:
        pass

    return product

async def main():
    products = []

    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(
            user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        )
        page = await context.new_page()

        # Get all product links
        product_links = await get_all_product_links(page)

        # Scrape all equipment products
        for link in product_links:
            try:
                product = await scrape_product(page, link)
                product["category"] = "equipment"
                products.append(product)
            except Exception as e:
                print(f"Failed to scrape {link}: {e}")

        # Parts
        parts_links = await get_all_parts_links(page)
        for link in parts_links:
            try:
                product = await scrape_product(page, link)
                product["category"] = "parts"
                products.append(product)
            except Exception as e:
                print(f"Failed to scrape {link}: {e}")

        await browser.close()

    # Save JSON
    output_file = OUTPUT_DIR / "vvs_products.json"
    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(products, f, indent=2, ensure_ascii=False)

    print(f"\n{'='*50}")
    print(f"DONE. {len(products)} products scraped.")
    print(f"JSON saved to: {output_file}")
    print(f"Images saved to: {IMAGES_DIR}")
    print(f"{'='*50}")
    print("\nProduct Summary:")
    for prod in products:
        print(f"  [{prod['category'].upper()}] {prod['name']} -- {prod['price']} -- {len(prod['image_files'])} images")

asyncio.run(main())
