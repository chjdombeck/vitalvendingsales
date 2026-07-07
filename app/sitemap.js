const BASE = 'https://www.vitalvendingsales.com';

const BLOG_SLUGS = [
  'new-vs-refurbished-vending-machines',
  'vending-machine-leasing-and-financing',
  'marketing-your-vending-business',
  'new-or-used-vending-machines',
  'economy-vending-opportunities',
  'evolution-of-vending-machines',
  'top-healthy-vending-options',
  'how-to-find-vending-locations',
  'history-of-vending-machines',
  'start-a-vending-business',
];

export default function sitemap() {
  const lastModified = new Date();

  return [
    { url: `${BASE}/`, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/smart-cooler-summit`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/smart-coolers`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/vending-machines`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/vending-parts`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/about`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/reviews`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/blog`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    ...BLOG_SLUGS.map((slug) => ({
      url: `${BASE}/blog/${slug}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    })),
    { url: `${BASE}/privacy-policy`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/terms-of-service`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ];
}
