# Vital Vending Sales — Product Catalog Scraper Brief for Claude Code

## Objective

Scrape all products from the current Vital Vending Sales website, download all product images, and output a structured JSON file ready to import into the new website. This eliminates all manual data entry and image downloading.

---

## Instructions for Claude Code

Run the following steps in order. Do not skip any step.

### Step 1 — Install Dependencies

pip install requests beautifulsoup4 playwright

playwright install chromium

Use Playwright (not requests alone) because the Vital Vending Sales site is built on Squarespace and is client-rendered with JavaScript. A standard requests fetch will return an empty page.

---

### Step 2 — Run This Scraper Script

Save this as `scrape_vvs_products.py` and run it:

import asyncio

import json

import os

import re

import urllib.request

from pathlib import Path

from playwright.async\_api import async\_playwright

BASE\_URL \= "https://www.vitalvendingsales.com"

EQUIPMENT\_URL \= f"{BASE\_URL}/equipment"

OUTPUT\_DIR \= Path("vvs\_product\_catalog")

IMAGES\_DIR \= OUTPUT\_DIR / "images"

OUTPUT\_DIR.mkdir(exist\_ok=True)

IMAGES\_DIR.mkdir(exist\_ok=True)

def slugify(text):

    text \= text.lower().strip()

    text \= re.sub(r'\[^\\w\\s-\]', '', text)

    text \= re.sub(r'\[\\s\_-\]+', '-', text)

    return text

def download\_image(url, filepath):

    try:

        headers \= {'User-Agent': 'Mozilla/5.0'}

        req \= urllib.request.Request(url, headers=headers)

        with urllib.request.urlopen(req) as response:

            with open(filepath, 'wb') as f:

                f.write(response.read())

        print(f"  ✓ Image saved: {filepath.name}")

        return str(filepath)

    except Exception as e:

        print(f"  ✗ Image failed: {url} — {e}")

        return None

async def get\_all\_product\_links(page):

    print("Fetching equipment page...")

    await page.goto(EQUIPMENT\_URL, wait\_until="networkidle")

    await page.wait\_for\_timeout(3000)

    

    \# Get all links that look like product pages

    links \= await page.eval\_on\_selector\_all(

        'a\[href\*="/equipment/p/"\]',

        'els \=\> els.map(e \=\> e.href)'

    )

    unique\_links \= list(set(links))

    print(f"Found {len(unique\_links)} product links")

    return unique\_links

async def scrape\_product(page, url):

    print(f"\\nScraping: {url}")

    await page.goto(url, wait\_until="networkidle")

    await page.wait\_for\_timeout(2000)

    product \= {

        "url": url,

        "name": "",

        "price": "",

        "description": "",

        "images": \[\],

        "image\_files": \[\],

        "variants": \[\],

        "category": "",

        "slug": ""

    }

    \# Product name

    try:

        name \= await page.eval\_on\_selector('h1', 'el \=\> el.innerText')

        product\["name"\] \= name.strip()

        product\["slug"\] \= slugify(name.strip())

        print(f"  Name: {product\['name'\]}")

    except:

        print("  Could not find product name")

    \# Price

    try:

        price \= await page.eval\_on\_selector(

            '.product-price, \[class\*="price"\], .ProductItem-price',

            'el \=\> el.innerText'

        )

        product\["price"\] \= price.strip()

        print(f"  Price: {product\['price'\]}")

    except:

        \# Try alternate selectors

        try:

            price \= await page.eval\_on\_selector(

                '\[data-automation="product-price"\]',

                'el \=\> el.innerText'

            )

            product\["price"\] \= price.strip()

        except:

            print("  Price not found")

    \# Description

    try:

        desc \= await page.eval\_on\_selector(

            '.ProductItem-description, .product-description, \[class\*="product-desc"\]',

            'el \=\> el.innerText'

        )

        product\["description"\] \= desc.strip()

    except:

        try:

            desc \= await page.eval\_on\_selector\_all(

                '.sqs-block-content p',

                'els \=\> els.map(e \=\> e.innerText).join("\\\\n")'

            )

            product\["description"\] \= desc.strip()

        except:

            print("  Description not found")

    \# Images

    try:

        img\_urls \= await page.eval\_on\_selector\_all(

            'img\[data-src\], img\[src\]',

            '''els \=\> els

                .map(e \=\> e.getAttribute("data-src") || e.getAttribute("src"))

                .filter(src \=\> src && src.includes("squarespace") && \!src.includes("icon"))

            '''

        )

        \# Deduplicate and get highest quality versions

        seen \= set()

        clean\_urls \= \[\]

        for url\_raw in img\_urls:

            base \= url\_raw.split('?')\[0\]

            if base not in seen:

                seen.add(base)

                clean\_urls.append(base \+ "?format=1500w")

        product\["images"\] \= clean\_urls

        print(f"  Images found: {len(clean\_urls)}")

    except Exception as e:

        print(f"  Image extraction failed: {e}")

    \# Download images

    for i, img\_url in enumerate(product\["images"\]):

        ext \= ".jpg" if "jpg" in img\_url.lower() else ".png"

        filename \= f"{product\['slug'\]}-{i+1}{ext}"

        filepath \= IMAGES\_DIR / filename

        saved \= download\_image(img\_url, filepath)

        if saved:

            product\["image\_files"\].append(filename)

    \# Variants / options (e.g. configuration dropdowns)

    try:

        variants \= await page.eval\_on\_selector\_all(

            'select option',

            'els \=\> els.map(e \=\> e.innerText.trim()).filter(t \=\> t && t \!== "Select Configuration")'

        )

        product\["variants"\] \= variants

        if variants:

            print(f"  Variants: {variants}")

    except:

        pass

    \# Category from URL

    if "/equipment/p/" in url:

        product\["category"\] \= "equipment"

    return product

async def main():

    products \= \[\]

    async with async\_playwright() as p:

        browser \= await p.chromium.launch(headless=True)

        context \= await browser.new\_context(

            user\_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"

        )

        page \= await context.new\_page()

        \# Get all product links

        product\_links \= await get\_all\_product\_links(page)

        \# Also check parts page

        try:

            print("\\nChecking parts page...")

            await page.goto(f"{BASE\_URL}/parts", wait\_until="networkidle")

            await page.wait\_for\_timeout(2000)

            parts\_links \= await page.eval\_on\_selector\_all(

                'a\[href\*="/parts/p/"\]',

                'els \=\> els.map(e \=\> e.href)'

            )

            parts\_links \= list(set(parts\_links))

            print(f"Found {len(parts\_links)} parts links")

        except:

            parts\_links \= \[\]

        \# Scrape all equipment products

        for link in product\_links:

            try:

                product \= await scrape\_product(page, link)

                product\["category"\] \= "equipment"

                products.append(product)

            except Exception as e:

                print(f"Failed to scrape {link}: {e}")

        \# Scrape all parts

        for link in parts\_links:

            try:

                product \= await scrape\_product(page, link)

                product\["category"\] \= "parts"

                products.append(product)

            except Exception as e:

                print(f"Failed to scrape {link}: {e}")

        await browser.close()

    \# Save to JSON

    output\_file \= OUTPUT\_DIR / "vvs\_products.json"

    with open(output\_file, "w") as f:

        json.dump(products, f, indent=2)

    print(f"\\n{'='\*50}")

    print(f"DONE. {len(products)} products scraped.")

    print(f"JSON saved to: {output\_file}")

    print(f"Images saved to: {IMAGES\_DIR}")

    print(f"{'='\*50}")

    \# Print summary

    print("\\nProduct Summary:")

    for p in products:

        print(f"  \[{p\['category'\].upper()}\] {p\['name'\]} — {p\['price'\]} — {len(p\['image\_files'\])} images")

asyncio.run(main())

---

### Step 3 — What You'll Get

After the script runs, you'll have:

vvs\_product\_catalog/

├── vvs\_products.json          ← All product data structured and ready to import

└── images/

    ├── usi-evoke-6-snack-vending-machine-1.jpg

    ├── usi-evoke-6-snack-vending-machine-2.jpg

    ├── coolblu-coolers-1.jpg

    ├── ams-39-snack-machine-1.jpg

    └── ... (all product images)

The JSON file will contain for each product:

- `name` — product name  
- `price` — price as listed on the site  
- `description` — full product description  
- `images` — original image URLs  
- `image_files` — local filenames of downloaded images  
- `variants` — any configuration options (e.g. "5 Snack Trays / 1 Candy Tray")  
- `slug` — URL-friendly version of the name  
- `category` — equipment or parts

---

### Step 4 — Import to New Website

Once the JSON is generated, use it to:

1. Build all product detail pages programmatically from the JSON data  
2. Reference the downloaded images from the `/images` folder  
3. Apply SEO title tags, meta descriptions, and alt text using the product name and description fields  
4. Set up lead capture forms on all equipment pages (no checkout — per the website brief)  
5. Set up checkout on parts pages (per the website brief)

Refer to `VVS_SEO_Brief.md` for the correct product page SEO structure and `VVS_Website_Brief.md` for the full site requirements.

---

## Notes for Claude Code

- The site is Squarespace-based and client-rendered — **do not use requests or basic HTTP fetching**. Use Playwright only.  
- Some images may be served from Squarespace CDN with query parameters — strip parameters and re-add `?format=1500w` for highest quality  
- If a product page fails, log the URL and continue — do not stop the entire scrape  
- After scraping, validate the JSON file and flag any products missing names, prices, or images

