import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Vending Industry Blog | Vital Vending Sales',
  description: 'Expert insights on vending machines, AI smart coolers, micro-markets, and building a successful vending business. Tips from 15+ years in the industry.',
};

const FEATURED = {
  href: '/blog/new-vs-refurbished-vending-machines',
  img: '/static-assets/vvs_product_catalog/images/ai-vending-pro-2.jpg',
  cat: 'Equipment', catStyle: 'catGreen',
  title: 'New vs. Refurbished Vending Machines: Which is Right for Your Business?',
  excerpt: 'One of the biggest decisions when starting or expanding a vending business is whether to invest in a new machine or save with a refurbished one.',
  author: 'Nick Williamson', date: 'Feb 2025',
};

const SECONDARY = [
  { href: '/blog/vending-machine-leasing-and-financing', img: '/static-assets/vvs_product_catalog/images/equipment-3.jpg', cat: 'Finance', catStyle: 'catAmber', title: 'The Ultimate Guide to Vending Machine Leasing and Financing Options', excerpt: 'Explore leasing vs. buying, SBA loans, equipment financing, and vendor programs to fund your vending business.', date: 'Feb 2024' },
  { href: '/blog/marketing-your-vending-business', img: '/static-assets/vvs_product_catalog/images/usi-evoke-5-snack-vending-machine-2.jpg', cat: 'Marketing', catStyle: 'catNavy', title: 'Marketing Your Vending Machine Business: 14 Strategies for Success', excerpt: 'From digital ads and loyalty programs to community involvement and analytics — the full playbook.', date: 'Nov 2023' },
];

const GRID_ARTICLES = [
  { href: '/blog/new-or-used-vending-machines', img: '/static-assets/vvs_product_catalog/images/coolblu-coolers-3.jpg', cat: 'Equipment', catStyle: 'catGreen', title: 'New or Used Vending Machines: Making the Right Choice', excerpt: 'Reliability, modern features, energy efficiency, and budget — breaking down the four critical factors.', date: 'Oct 2023' },
  { href: '/blog/economy-vending-opportunities', img: '/static-assets/vvs_product_catalog/images/equipment-2.jpg', cat: 'Industry', catStyle: 'catAmber', title: 'Riding the Rebound: Economy Sparks Vending Opportunities', excerpt: 'How a resilient economy and the return to in-person work is creating prime conditions for vending entrepreneurs.', date: 'Aug 2023' },
  { href: '/blog/evolution-of-vending-machines', img: '/static-assets/vvs_product_catalog/images/summit-5000-cold-drink-vending-machine-2.jpg', cat: 'Industry', catStyle: 'catNavy', title: 'The Evolution of Vending Machines and the Industry', excerpt: 'From coin-only machines in the 1880s to touchscreens and mobile payments — a century of transformation.', date: 'Jun 2023' },
];

const WIDE_ARTICLES = [
  { href: '/blog/top-healthy-vending-options', img: '/static-assets/MoreVendingMachinesandContent/HAHA Smart Cooler In Gym .jpg', cat: 'Health', catStyle: 'catGreen', title: 'Top 5 Popular, Healthy Options for Your Vending Machine', excerpt: "Granola bars, trail mix, baked chips, popcorn, and fruit cups — the best-selling healthy items stocking operators' machines right now.", author: 'Nick Williamson', date: 'Apr 2023' },
  { href: '/blog/how-to-find-vending-locations', img: '/static-assets/vvs_product_catalog/images/equipment-10.jpg', cat: 'Operations', catStyle: 'catNavy', title: 'How to Find Vending Locations That Actually Generate Revenue', excerpt: 'Foot traffic, demographics, competition, and negotiation — the framework for securing your first (or next) high-performing location.', author: 'Nick Williamson', date: 'Apr 2023' },
  { href: '/blog/history-of-vending-machines', img: '/static-assets/vvs_product_catalog/images/ams-39-combo-vending-machine-2.jpg', cat: 'Industry', catStyle: 'catNavy', title: 'The History and Types of Vending Machines', excerpt: 'Snack machines, beverage machines, food machines, electronics, clothing, and smart vending — every category explained.', author: 'Nick Williamson', date: 'Apr 2023' },
  { href: '/blog/start-a-vending-business', img: '/static-assets/vvs_product_catalog/images/equipment-8.jpg', cat: 'Getting Started', catStyle: 'catGreen', title: 'Start Your Vending Empire: How to Start a Vending Business', excerpt: 'Research, equipment, suppliers, financing, marketing, and legal requirements — the complete roadmap to launching your first vending machine business.', author: 'Nick Williamson', date: 'Apr 2023' },
];

const CAT_STYLES = {
  catGreen: { background: '#D6F0DA', color: '#1e7a28' },
  catNavy:  { background: 'rgba(27,42,74,0.1)', color: '#1B2A4A' },
  catAmber: { background: '#FEF3C7', color: '#92400E' },
};

const ArrowIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
);

const TICKER_ITEMS = ['New vs. Refurbished Machines', 'Leasing and Financing Options', '14 Marketing Strategies', 'How to Find Vending Locations', 'Start Your Vending Empire', 'Healthy Vending Options', 'The Evolution of Vending Machines', 'Economy and Vending Opportunities'];

export default function Blog() {
  return (
    <>
      {/* Masthead */}
      <section className="bg-white pt-10 pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <hr style={{ border: 'none', borderTop: '3px solid #1B2A4A', margin: 0 }} className="mb-3" />
          <div className="flex items-end justify-between gap-4 pb-3">
            <div>
              <p className="text-xs font-bold mb-1 uppercase" style={{ color: '#1a6b2a', letterSpacing: '0.12em' }}>Vital Vending Sales</p>
              <h1 style={{ fontFamily: 'Georgia, serif', fontWeight: 900, color: '#1B2A4A', letterSpacing: '-0.02em', fontSize: 'clamp(2.8rem,7vw,5.5rem)', lineHeight: 0.95 }}>The Vending<br />Insider</h1>
            </div>
            <div className="hidden md:block text-right">
              <p className="text-xs font-medium mb-1" style={{ color: '#6B7280', letterSpacing: '0.06em' }}>INDUSTRY KNOWLEDGE</p>
              <p className="text-xs" style={{ color: '#6B7280' }}>10 Articles&nbsp;|&nbsp;Free to Read</p>
              <p className="text-xs mt-1" style={{ color: '#6B7280' }}>Northeast Edition</p>
            </div>
          </div>
          <hr style={{ border: 'none', borderTop: '1px solid rgba(27,42,74,0.15)', margin: 0 }} className="mb-1" />
          <div className="flex items-center gap-3 py-2">
            <span className="text-xs font-bold" style={{ color: '#1B2A4A', letterSpacing: '0.08em', whiteSpace: 'nowrap' }}>TODAY&apos;S TOPICS</span>
            <div className="flex-1 h-px" style={{ background: 'rgba(27,42,74,0.12)' }} />
            <span className="text-xs hidden sm:block" style={{ color: '#6B7280', whiteSpace: 'nowrap' }}>Equipment &bull; Marketing &bull; Operations &bull; Industry</span>
          </div>
          <hr style={{ border: 'none', borderTop: '1px solid rgba(27,42,74,0.15)', margin: 0 }} />
        </div>
      </section>

      {/* Ticker */}
      <div style={{ background: '#1B2A4A', overflow: 'hidden', padding: '10px 0' }}>
        <div style={{ display: 'flex', animation: 'ticker-scroll 60s linear infinite', width: 'max-content' }} aria-hidden="true">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} style={{ whiteSpace: 'nowrap', padding: '0 32px', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', display: 'inline-flex', alignItems: 'center', gap: 24 }}>
              {item} <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#3DB54A', display: 'inline-block', flexShrink: 0 }} />
            </span>
          ))}
        </div>
      </div>
      <style>{`@keyframes ticker-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>

      {/* Featured + Secondary */}
      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Featured */}
            <div className="lg:col-span-2">
              <Link href={FEATURED.href} className="block rounded-2xl overflow-hidden relative" style={{ minHeight: 400, background: '#1B2A4A', textDecoration: 'none', boxShadow: '0 4px 16px rgba(27,42,74,0.12), 0 24px 64px rgba(27,42,74,0.16)' }}>
                <Image src={FEATURED.img} alt={FEATURED.title} fill style={{ objectFit: 'cover', opacity: 0.45, objectPosition: 'center' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(27,42,74,0.3) 0%, rgba(18,30,53,0.92) 70%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '32px 36px' }}>
                  <span className="inline-block text-xs font-bold uppercase rounded-md px-2 py-1 mb-3" style={{ ...CAT_STYLES[FEATURED.catStyle], letterSpacing: '0.1em' }}>{FEATURED.cat}</span>
                  <h2 className="font-black text-white mb-3" style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.5rem,3.5vw,2.4rem)', lineHeight: 1.1 }}>{FEATURED.title}</h2>
                  <p className="mb-4" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', lineHeight: 1.6, maxWidth: 520 }}>{FEATURED.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.8rem' }}>{FEATURED.author} &nbsp;&bull;&nbsp; {FEATURED.date}</span>
                    <span className="inline-flex items-center gap-1.5 text-sm font-bold" style={{ color: '#3DB54A' }}>Read Article <ArrowIcon /></span>
                  </div>
                </div>
              </Link>
            </div>
            {/* Side stack */}
            <div className="flex flex-col gap-6">
              {SECONDARY.map((a) => (
                <Link key={a.href} href={a.href} className="flex flex-col flex-1 rounded-2xl overflow-hidden bg-white" style={{ textDecoration: 'none', border: '1px solid rgba(27,42,74,0.07)', boxShadow: '0 1px 2px rgba(27,42,74,0.05), 0 4px 12px rgba(27,42,74,0.07)' }}>
                  <div className="relative overflow-hidden flex-shrink-0" style={{ aspectRatio: '16/9', background: '#F4F6F8' }}>
                    <Image src={a.img} alt={a.title} fill style={{ objectFit: 'cover' }} loading="lazy" />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(27,42,74,0.55) 0%, transparent 55%)' }} />
                    <span className="absolute bottom-3 left-3 text-xs font-bold uppercase rounded-md px-2 py-1" style={{ ...CAT_STYLES[a.catStyle], letterSpacing: '0.1em' }}>{a.cat}</span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-black mb-2" style={{ color: '#1B2A4A', fontSize: '1rem', lineHeight: 1.25, letterSpacing: '-0.02em' }}>{a.title}</h3>
                    <p className="text-xs flex-1 mb-4" style={{ color: '#6B7280', lineHeight: 1.6 }}>{a.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span style={{ color: '#6B7280', fontSize: '0.75rem' }}>{a.date}</span>
                      <span className="inline-flex items-center gap-1 text-xs font-bold" style={{ color: '#1a6b2a' }}>Read <ArrowIcon /></span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* More Articles Grid */}
      <section className="bg-white pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mt-12 mb-6">
            <span className="text-xs font-bold" style={{ color: '#1B2A4A', letterSpacing: '0.1em' }}>MORE ARTICLES</span>
            <div className="flex-1 h-px" style={{ background: 'rgba(27,42,74,0.12)' }} />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GRID_ARTICLES.map((a) => (
              <Link key={a.href} href={a.href} className="flex flex-col rounded-2xl overflow-hidden bg-white" style={{ textDecoration: 'none', border: '1px solid rgba(27,42,74,0.07)', boxShadow: '0 1px 2px rgba(27,42,74,0.05), 0 4px 12px rgba(27,42,74,0.07)' }}>
                <div className="relative overflow-hidden flex-shrink-0" style={{ aspectRatio: '16/9', background: '#F4F6F8' }}>
                  <Image src={a.img} alt={a.title} fill style={{ objectFit: 'cover' }} loading="lazy" />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(27,42,74,0.55) 0%, transparent 55%)' }} />
                  <span className="absolute bottom-3 left-3 text-xs font-bold uppercase rounded-md px-2 py-1" style={{ ...CAT_STYLES[a.catStyle], letterSpacing: '0.1em' }}>{a.cat}</span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-black mb-2" style={{ color: '#1B2A4A', fontSize: '1rem', lineHeight: 1.25, letterSpacing: '-0.02em' }}>{a.title}</h3>
                  <p className="text-xs flex-1 mb-4" style={{ color: '#6B7280', lineHeight: 1.6 }}>{a.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span style={{ color: '#6B7280', fontSize: '0.75rem' }}>{a.date}</span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold" style={{ color: '#1a6b2a' }}>Read <ArrowIcon /></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Operations & Growth */}
          <div className="flex items-center gap-3 mt-10 mb-6">
            <span className="text-xs font-bold" style={{ color: '#1B2A4A', letterSpacing: '0.1em' }}>OPERATIONS &amp; GROWTH</span>
            <div className="flex-1 h-px" style={{ background: 'rgba(27,42,74,0.12)' }} />
          </div>
          <div className="flex flex-col gap-5">
            {WIDE_ARTICLES.map((a) => (
              <Link key={a.href} href={a.href} className="grid grid-cols-1 sm:[grid-template-columns:280px_1fr] rounded-2xl overflow-hidden bg-white" style={{ textDecoration: 'none', border: '1px solid rgba(27,42,74,0.07)', boxShadow: '0 1px 2px rgba(27,42,74,0.05), 0 4px 12px rgba(27,42,74,0.07)' }}>
                <div className="relative overflow-hidden" style={{ background: '#F4F6F8', aspectRatio: '16/9' }}>
                  <Image src={a.img} alt={a.title} fill style={{ objectFit: 'cover' }} loading="lazy" />
                </div>
                <div className="p-7 flex flex-col justify-center">
                  <span className="inline-block text-xs font-bold uppercase rounded-md px-2 py-1 mb-3" style={{ ...CAT_STYLES[a.catStyle], letterSpacing: '0.1em' }}>{a.cat}</span>
                  <h3 className="font-black mb-2" style={{ color: '#1B2A4A', fontSize: '1.15rem', lineHeight: 1.25, letterSpacing: '-0.02em' }}>{a.title}</h3>
                  <p className="text-sm mb-5" style={{ color: '#6B7280', lineHeight: 1.65 }}>{a.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span style={{ color: '#6B7280', fontSize: '0.8rem' }}>{a.author} &nbsp;&bull;&nbsp; {a.date}</span>
                    <span className="inline-flex items-center gap-1 text-sm font-bold" style={{ color: '#1a6b2a' }}>Read Article <ArrowIcon /></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 mt-10" style={{ background: '#1B2A4A', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.04 }} aria-hidden="true">
          <svg width="100%" height="100%"><filter id="n2"><feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter><rect width="100%" height="100%" filter="url(#n2)" /></svg>
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs font-bold mb-4 uppercase tracking-widest" style={{ letterSpacing: '0.12em', color: '#3DB54A' }}>Ready to Get Started?</div>
          <h2 className="font-black text-white mb-5" style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', lineHeight: 1.05 }}>Talk to a vending expert today.</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: '1rem' }} className="mb-8">Whether you&apos;re starting your first route or scaling to 50 machines, we&apos;ll point you in the right direction. No pressure.</p>
          <Link href="/#contact" className="inline-flex items-center gap-2 font-bold rounded-xl text-white px-7 py-3.5" style={{ background: 'rgba(61,181,74,0.88)', border: '1px solid rgba(255,255,255,0.28)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.35), 0 4px 16px rgba(0,0,0,0.18)' }}>Get a Free Consultation</Link>
        </div>
      </section>
    </>
  );
}
