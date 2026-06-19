# Vital Vending Sales — SEO & Performance Brief for Claude Code

## Context

This document is a directive for Claude Code to implement SEO and performance optimizations across the new Vital Vending Sales website. Every item listed below should be implemented. Do not skip or defer any item without flagging it. Where specific content is needed (e.g. title tags, meta descriptions), generate it based on the business context below, then implement it.

**Business context:**

- Company: Vital Vending Sales (VVS)  
- Location: 15 Dana Way, Ludlow, Massachusetts  
- Service area: Northeast United States  
- Phone: (413) 200-9068  
- Email: [info@vitalvendingsales.com](mailto:info@vitalvendingsales.com)  
- Website: vitalvendingsales.com  
- Primary products: AI smart coolers, vending machines, micro-market equipment  
- Primary differentiator: AI smart coolers / unattended retail solutions  
- Target customers: Vending entrepreneurs, growing operators, facilities managers  
- Business model: Equipment sales via lead generation (no online checkout for equipment). Parts store has full checkout.

---

## 1\. Technical SEO

### 1.1 Page Speed & Core Web Vitals

- Optimize all images: compress and serve in modern formats (WebP preferred)  
- Implement lazy loading for all images below the fold  
- Minify CSS, JavaScript, and HTML  
- Eliminate render-blocking resources  
- Target a Google PageSpeed Insights score of 90+ on both mobile and desktop  
- Meet passing thresholds for all three Core Web Vitals:  
  - **LCP (Largest Contentful Paint):** under 2.5 seconds  
  - **INP (Interaction to Next Paint):** under 200ms  
  - **CLS (Cumulative Layout Shift):** under 0.1

### 1.2 Mobile

- All pages must be fully responsive and functional on mobile  
- Touch targets (buttons, links) must meet minimum size requirements  
- No horizontal scrolling on any mobile viewport  
- Font sizes must be readable without zooming

### 1.3 HTTPS & Security

- Confirm SSL certificate is active and all pages load over HTTPS  
- Redirect all HTTP traffic to HTTPS  
- Redirect www to non-www (or vice versa) — pick one and be consistent

### 1.4 URL Structure

- All URLs must be lowercase, hyphenated, and human-readable  
- No dynamic query strings (e.g. `?id=123`) on public-facing pages  
- Examples of correct URL format:  
  - `/smart-coolers/coolblu-ai-smart-cooler`  
  - `/vending-machines/usi-evoke-6`  
  - `/services/location-services`  
  - `/blog/how-to-start-a-vending-business`

### 1.5 Crawlability

- Generate and submit an XML sitemap at `/sitemap.xml`  
- Configure `robots.txt` correctly — allow all public pages, disallow admin/checkout internals  
- Ensure no important pages are accidentally set to `noindex`  
- Fix any broken internal links (404s)  
- Implement canonical tags on all pages to prevent duplicate content

### 1.6 Redirects

- Set up 301 redirects from any old URLs to new URLs if the site structure is changing  
- Ensure no redirect chains (A → B → C); all redirects should go directly to the final destination

---

## 2\. On-Page SEO

### 2.1 Title Tags

- Every page must have a unique title tag  
- Format: `[Primary Keyword] | Vital Vending Sales`  
- Max 60 characters  
- Must include the primary keyword for that page  
- Implement these title tags at minimum:

| Page | Title Tag |
| :---- | :---- |
| Homepage | \`AI Smart Coolers & Vending Machines |
| Smart Coolers | \`AI Smart Coolers for Sale |
| Vending Machines | \`Vending Machines for Sale \- Northeast |
| Location Services | \`Vending Machine Location Services |
| Parts Store | \`Vending Machine Parts & Supplies |
| Contact | \`Contact Vital Vending Sales |
| Blog | \`Vending Business Tips & Industry News |

For all product detail pages, use: `[Product Name] - [Price or Key Feature] | Vital Vending Sales`

### 2.2 Meta Descriptions

- Every page must have a unique meta description  
- Length: 140–160 characters  
- Must include the primary keyword and a clear value proposition or call to action  
- Implement these at minimum:

| Page | Meta Description |
| :---- | :---- |
| Homepage | `AI-powered smart coolers, vending machines, and micro-market solutions for the Northeast. 10+ years experience. Free consultation. Shop now.` |
| Smart Coolers | `Shop AI smart coolers for micro-markets and unattended retail. CoolBlu series and more. Northeast's leader in smart vending. Get a quote today.` |
| Vending Machines | `Buy new vending machines for sale in Massachusetts and the Northeast. Snack, combo, and beverage machines from top brands. Free consultation.` |
| Location Services | `We find high-traffic vending locations for operators across the Northeast. 10+ years of placement experience. Free no-cost consultation.` |
| Contact | `Contact Vital Vending Sales for a free consultation. Call (413) 200-9068 or email info@vitalvendingsales.com. Based in Ludlow, MA.` |

### 2.3 Heading Structure (H1 / H2 / H3)

- Every page must have exactly **one H1 tag**  
- The H1 must contain the primary keyword for that page  
- H2s should cover major subtopics and include secondary keywords naturally  
- H3s for supporting details  
- Do not skip heading levels  
- Example structure for the Smart Coolers page:  
  - H1: `AI Smart Coolers for Sale`  
  - H2: `Why Smart Coolers Are the Future of Unattended Retail`  
  - H2: `Featured Smart Cooler Products`  
  - H2: `How It Works`  
  - H2: `Frequently Asked Questions`

### 2.4 Image Alt Text

- Every image on the site must have a descriptive alt text attribute  
- Alt text should describe what is in the image and include a relevant keyword where natural  
- Do not keyword-stuff alt text  
- Examples:  
  - `alt="CoolBlu AI Smart Cooler for micro-market operators"`  
  - `alt="USI Evoke 6 snack vending machine"`  
  - `alt="Vital Vending Sales logo"`  
- Decorative images that carry no content meaning should use `alt=""`

### 2.5 Internal Linking

- Every page should link to at least 2–3 other relevant pages on the site  
- Homepage must link to: Smart Coolers, Vending Machines, Location Services, Contact  
- Product pages must link to: related products, Location Services, Contact/Quote form  
- Blog posts must link to: relevant product or service pages  
- Use descriptive anchor text (not "click here" or "learn more" — use "explore our smart coolers" or "request a free consultation")

### 2.6 Page Content Depth

- All key service and product category pages must have a minimum of 400 words of copy  
- Individual product detail pages must have a minimum of 300 words  
- Content must be original, readable, and genuinely useful — not keyword-stuffed filler  
- Each page should answer the question: "Why should someone buy this from VVS specifically?"

---

## 3\. Local SEO

### 3.1 Local Business Schema Markup

Implement `LocalBusiness` schema markup in JSON-LD on the homepage and contact page. Use the following data:

{

  "@context": "https://schema.org",

  "@type": "LocalBusiness",

  "name": "Vital Vending Sales",

  "url": "https://www.vitalvendingsales.com",

  "logo": "https://www.vitalvendingsales.com/logo.png",

  "image": "https://www.vitalvendingsales.com/og-image.jpg",

  "description": "Northeast's leader in AI smart coolers, vending machines, and micro-market equipment. Serving entrepreneurs and businesses across the Northeast.",

  "address": {

    "@type": "PostalAddress",

    "streetAddress": "15 Dana Way",

    "addressLocality": "Ludlow",

    "addressRegion": "MA",

    "postalCode": "01056",

    "addressCountry": "US"

  },

  "telephone": "+1-413-200-9068",

  "email": "info@vitalvendingsales.com",

  "areaServed": \["Massachusetts", "Connecticut", "Rhode Island", "New Hampshire", "Vermont", "Maine", "New York"\],

  "priceRange": "$$",

  "sameAs": \[

    "https://www.instagram.com/vitalvendingsales/",

    "https://www.tiktok.com/@vitalvending",

    "https://www.facebook.com/vitalvendingsales/"

  \]

}

### 3.2 NAP Consistency

Ensure the following Name, Address, and Phone appear identically in the footer of every page:

- **Name:** Vital Vending Sales  
- **Address:** 15 Dana Way, Ludlow, MA 01056  
- **Phone:** (413) 200-9068  
- **Email:** [info@vitalvendingsales.com](mailto:info@vitalvendingsales.com)

### 3.3 Local Landing Pages

Build individual SEO-targeted location pages for the following markets. Each page should be at least 400 words, target that city/state \+ vending keywords, and include the local schema with that region noted:

- `/vending-machines-massachusetts`  
- `/vending-machines-connecticut`  
- `/vending-machines-rhode-island`  
- `/smart-coolers-northeast`

Each page should follow this structure:

- H1: `[Product/Service] in [Location]`  
- Intro paragraph with local context  
- Product/service overview  
- Why choose VVS in this region  
- Lead capture CTA

### 3.4 Open Graph & Social Meta Tags

Every page must include Open Graph meta tags for clean sharing on social media:

\<meta property="og:title" content="\[Page Title\]" /\>

\<meta property="og:description" content="\[Page Meta Description\]" /\>

\<meta property="og:image" content="\[Relevant page image URL\]" /\>

\<meta property="og:url" content="\[Canonical page URL\]" /\>

\<meta property="og:type" content="website" /\>

\<meta name="twitter:card" content="summary\_large\_image" /\>

---

## 4\. Schema Markup

Implement the following schema types across the site:

### 4.1 Product Schema

On every product detail page, implement `Product` schema in JSON-LD:

{

  "@context": "https://schema.org",

  "@type": "Product",

  "name": "\[Product Name\]",

  "image": "\[Product Image URL\]",

  "description": "\[Product Description\]",

  "brand": {

    "@type": "Brand",

    "name": "\[Manufacturer Brand\]"

  },

  "offers": {

    "@type": "Offer",

    "priceCurrency": "USD",

    "price": "\[Price\]",

    "availability": "https://schema.org/InStock",

    "seller": {

      "@type": "Organization",

      "name": "Vital Vending Sales"

    }

  }

}

### 4.2 FAQ Schema

On any page that includes a FAQ section, implement `FAQPage` schema:

{

  "@context": "https://schema.org",

  "@type": "FAQPage",

  "mainEntity": \[

    {

      "@type": "Question",

      "name": "\[Question text\]",

      "acceptedAnswer": {

        "@type": "Answer",

        "text": "\[Answer text\]"

      }

    }

  \]

}

Add FAQ sections (and this schema) to at minimum: Homepage, Smart Coolers page, Vending Machines page, Location Services page.

### 4.3 BreadcrumbList Schema

Implement breadcrumb schema on all pages beyond the homepage:

{

  "@context": "https://schema.org",

  "@type": "BreadcrumbList",

  "itemListElement": \[

    {

      "@type": "ListItem",

      "position": 1,

      "name": "Home",

      "item": "https://www.vitalvendingsales.com"

    },

    {

      "@type": "ListItem",

      "position": 2,

      "name": "\[Section Name\]",

      "item": "\[Section URL\]"

    }

  \]

}

---

## 5\. Blog / Content SEO

- The blog at `/blog` must be crawlable and indexed  
- Every blog post must have: unique title tag, meta description, H1, and at least one internal link to a product or service page  
- Implement `Article` schema on all blog posts  
- Add a related posts section at the bottom of each blog post to improve internal linking  
- Priority blog topics to create or optimize (these target high-value search terms):  
  - "How to Start a Vending Machine Business in 2026"  
  - "AI Smart Coolers vs Traditional Vending Machines: What's the Difference?"  
  - "Best Vending Machines for Sale in Massachusetts"  
  - "How to Find High-Traffic Vending Locations"  
  - "Vending Machine Financing and Leasing Options"  
  - "How Much Does a Vending Machine Make?"

---

## 6\. Performance Checklist

Before launch, confirm all of the following:

- [ ] Google PageSpeed Insights: 90+ mobile, 90+ desktop  
- [ ] Core Web Vitals: all passing in Google Search Console  
- [ ] All images compressed and in WebP format  
- [ ] No unused CSS or JavaScript loading on any page  
- [ ] Fonts loaded efficiently (preload key fonts, use `font-display: swap`)  
- [ ] No 404 errors on any internal link  
- [ ] XML sitemap submitted to Google Search Console  
- [ ] Google Analytics (GA4) installed and tracking pageviews and form submissions  
- [ ] Form submission conversions tracked as goals in GA4  
- [ ] All pages return correct HTTP status codes  
- [ ] No duplicate title tags or meta descriptions across any pages  
- [ ] All canonical tags correctly implemented  
- [ ] robots.txt live and correctly configured  
- [ ] SSL active, all pages load over HTTPS  
- [ ] Open Graph images sized correctly (1200x630px recommended)

---

## 7\. Priority Order for Implementation

Implement in this order:

1. Technical foundation — SSL, redirects, sitemap, robots.txt, canonical tags  
2. Page speed & Core Web Vitals — image compression, lazy load, minification  
3. Title tags and meta descriptions on all pages  
4. H1/heading structure on all pages  
5. Image alt text across all pages and products  
6. LocalBusiness schema on homepage and contact page  
7. Product schema on all equipment pages  
8. FAQ sections \+ FAQ schema on key pages  
9. Internal linking audit and implementation  
10. Open Graph tags on all pages  
11. Local landing pages  
12. Blog post structure and Article schema  
13. GA4 setup and conversion tracking  
14. Final performance audit and PageSpeed sign-off

