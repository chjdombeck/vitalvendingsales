import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Black Friday Smart Cooler Deals | Nov 20 to 30, 2026 | Vital Vending Sales',
  description: 'Black Friday pricing on HAHA AI smart coolers plus a free extended warranty, and $214.95 in savings on every Spectra smart cooler. November 20 to 30, 2026.',
  alternates: { canonical: '/black-friday' },
};

const IMG = '/static-assets/MoreVendingMachinesandContent/';
const SPRING = 'cubic-bezier(0.34, 1.56, 0.64, 1)';

const HAHA_DEALS = [
  { name: 'Mini 360', img: '/static-assets/black-friday/haha-mini.png', was: 2999, now: 2749 },
  { name: 'Plus 440', img: '/static-assets/black-friday/haha-plus.png', was: 3499, now: 3199 },
  { name: 'Pro 542', img: IMG + 'Pro Details.png', was: 4399, now: 4099 },
  { name: 'Freezer 550', img: '/static-assets/black-friday/haha-freezer.png', was: 4899, now: 4499 },
  { name: 'Max 620S', img: IMG + 'Max 620S Details.jpg', was: 5399, now: 4699 },
  { name: 'Max 660', img: IMG + 'Max 660 Details.webp', was: 4999, now: 4599 },
  { name: 'Ultra 1200', img: '/static-assets/black-friday/haha-ultra-1200.png', was: 6999, now: 6399, wide: true },
];

const SPECTRA_FEATURES = [
  { title: 'Maximize Revenue', path: 'M3 17l6-6 4 4 8-8M14 7h7v7' },
  { title: 'AI-Driven Visibility', path: 'M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m14-6h2m-2 6h2M7 7h10v10H7z' },
  { title: 'Premium Customer Experience', path: 'M17 20h5v-2a3 3 0 00-5.36-1.86M17 20H7m10 0v-2c0-.66-.13-1.28-.36-1.86M7 20H2v-2a3 3 0 015.36-1.86M7 20v-2c0-.66.13-1.28.36-1.86m0 0a5 5 0 019.28 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' },
  { title: 'Industry-Leading Warranties', path: 'M9 12l2 2 4-4m5.6-4.02A11.96 11.96 0 0112 2.94 11.96 11.96 0 013.4 5.98 12 12 0 003 9c0 5.6 3.82 10.3 9 11.62 5.18-1.33 9-6.03 9-11.62 0-1.04-.13-2.05-.38-3.02z' },
];

const usd = (n) => '$' + n.toLocaleString('en-US');

const GRAIN = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")";

const btnPrimary = 'inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 font-bold text-white hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1B2A4A]';
const btnPrimaryStyle = {
  background: '#3DB54A',
  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3), 0 8px 24px rgba(61,181,74,0.32)',
  transition: `transform 250ms ${SPRING}`,
};
const btnGhost = 'inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 font-bold text-white hover:-translate-y-0.5 hover:bg-white/10 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3DB54A]';
const btnGhostStyle = { border: '1px solid rgba(255,255,255,0.28)', transition: `transform 250ms ${SPRING}` };

function SectionTag({ children }) {
  return (
    <span className="inline-block rounded-md px-2.5 py-1 text-[0.72rem] font-extrabold tracking-[0.14em] uppercase" style={{ background: '#D6F0DA', color: '#1a6b2a' }}>
      {children}
    </span>
  );
}

export default function BlackFriday() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden py-14 lg:py-24"
        style={{
          background: 'radial-gradient(ellipse 55% 70% at 85% 20%, rgba(61,181,74,0.22) 0%, transparent 60%), radial-gradient(ellipse 50% 60% at 10% 100%, rgba(36,53,96,1) 0%, transparent 70%), #121e35',
        }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: GRAIN, opacity: 0.08, mixBlendMode: 'overlay' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.55)' }}>
            <Link href="/" className="hover:text-white focus-visible:text-white focus-visible:outline-none">Home</Link>
            <span className="mx-2">/</span>
            <span style={{ color: 'rgba(255,255,255,0.85)' }}>Black Friday</span>
          </nav>

          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-block rounded-md px-3 py-1 text-[0.78rem] font-extrabold tracking-[0.16em] uppercase" style={{ background: '#3DB54A', color: '#121e35' }}>
              Limited-time offer
            </span>
            <span className="text-sm font-semibold tracking-wide" style={{ color: '#9be3a4' }}>November 20 to 30, 2026</span>
          </div>

          <h1 className="font-black text-white mb-5 max-w-3xl" style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', letterSpacing: '-0.035em', lineHeight: 1.02 }}>
            Black Friday <span style={{ color: '#3DB54A' }}>smart cooler</span> deals
          </h1>
          <p className="max-w-xl mb-8 text-base lg:text-lg" style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.7 }}>
            Our best pricing of the year on HAHA and Spectra AI smart coolers. Lock in your price before November 30.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#haha" className={btnPrimary} style={btnPrimaryStyle}>HAHA Deals</a>
            <a href="#spectra" className={btnGhost} style={btnGhostStyle}>Spectra Deals</a>
          </div>
        </div>
      </section>

      {/* HAHA */}
      <section id="haha" className="py-14 lg:py-24 scroll-mt-20" style={{ background: '#F4F6F8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 lg:mb-14">
            <SectionTag>HAHA Smart Coolers</SectionTag>
            <h2 className="font-black mt-4 mb-3" style={{ color: '#1B2A4A', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              Black Friday prices
            </h2>
            <p style={{ color: '#6B7280', lineHeight: 1.7 }}>Seven models. Limited-time savings.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
            {HAHA_DEALS.map((d) => (
              <article
                key={d.name}
                className="w-[calc(50%-0.5rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.125rem)] rounded-2xl bg-white p-4 lg:p-5 flex flex-col"
                style={{ boxShadow: '0 1px 2px rgba(27,42,74,0.06), 0 8px 24px rgba(27,42,74,0.07)', border: '1px solid rgba(27,42,74,0.06)' }}
              >
                <div className="relative w-full aspect-[3/4] mb-4">
                  <Image src={d.img} alt={`HAHA ${d.name} smart cooler`} fill sizes="(min-width:1024px) 260px, 45vw" className="object-contain" />
                  <span className="absolute top-0 right-0 rounded-full px-2.5 py-1 text-[0.7rem] font-extrabold" style={{ background: '#3DB54A', color: '#fff', boxShadow: '0 4px 12px rgba(61,181,74,0.35)' }}>
                    Save {usd(d.was - d.now)}
                  </span>
                </div>
                <div className="rounded-lg py-1.5 text-center font-extrabold text-white text-sm lg:text-base mb-3" style={{ background: '#1B2A4A' }}>
                  {d.name}
                </div>
                <div className="text-center mt-auto">
                  <div className="text-sm line-through" style={{ color: '#6B7280' }}>{usd(d.was)}</div>
                  <div className="font-black" style={{ color: '#2e9439', fontSize: 'clamp(1.5rem, 2.6vw, 2rem)', letterSpacing: '-0.02em', lineHeight: 1.15 }}>{usd(d.now)}</div>
                </div>
              </article>
            ))}
          </div>

          {/* Warranty */}
          <div
            className="relative mt-12 lg:mt-16 rounded-2xl overflow-hidden p-6 lg:p-10 flex flex-col lg:flex-row lg:items-center gap-6"
            style={{
              background: 'radial-gradient(ellipse 60% 100% at 100% 0%, rgba(61,181,74,0.18) 0%, transparent 60%), #E6F5E8',
              border: '1px solid rgba(61,181,74,0.25)',
              boxShadow: '0 12px 32px rgba(46,148,57,0.12)',
            }}
          >
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: '#3DB54A', boxShadow: '0 8px 20px rgba(61,181,74,0.35)' }}>
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d={SPECTRA_FEATURES[3].path} />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-black mb-1" style={{ color: '#1B2A4A', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                Free extended warranty
              </h3>
              <p className="font-extrabold mb-2" style={{ color: '#1B2A4A' }}>+1 year premium extended warranty on every eligible HAHA cooler</p>
              <p className="font-bold text-sm" style={{ color: '#1a6b2a' }}>$280 value per eligible cooler. 2 years total coverage.</p>
            </div>
            <p className="text-sm lg:max-w-[220px]" style={{ color: '#3D4D5C', lineHeight: 1.6 }}>
              Applies to eligible machines purchased November 20 to 30, 2026.
            </p>
          </div>
        </div>
      </section>

      {/* Spectra */}
      <section id="spectra" className="py-14 lg:py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-center">
            <div className="relative mx-auto w-full max-w-[420px] aspect-square">
              <div className="absolute inset-[10%] rounded-full" style={{ background: 'radial-gradient(circle, rgba(61,181,74,0.18) 0%, transparent 70%)' }} />
              <Image src="/static-assets/vvs_product_catalog/images/spectra-pro-2.webp" alt="Spectra smart cooler" fill sizes="(min-width:1024px) 420px, 90vw" className="object-contain" />
            </div>

            <div>
              <SectionTag>Spectra Smart Coolers</SectionTag>
              <h2 className="font-black mt-4 mb-3" style={{ color: '#1B2A4A', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                The most advanced AI powered smart cooler
              </h2>
              <p className="mb-6" style={{ color: '#3D4D5C', lineHeight: 1.7 }}>Purchase any Spectra Smart Cooler and receive:</p>

              <div className="space-y-4 mb-6">
                <div className="flex gap-4 rounded-2xl p-5" style={{ background: 'linear-gradient(90deg, #E6F5E8, #F4FBF5)', border: '1px solid rgba(61,181,74,0.2)' }}>
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: '#3DB54A' }}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5a1.99 1.99 0 011.41.59l7 7a2 2 0 010 2.82l-7 7a2 2 0 01-2.82 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-black" style={{ color: '#1B2A4A', fontSize: '1.6rem', letterSpacing: '-0.02em', lineHeight: 1.1 }}>$150 off</p>
                    <p className="font-semibold text-sm" style={{ color: '#3D4D5C' }}>each cooler purchased</p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-2xl p-5" style={{ background: 'linear-gradient(90deg, #E6F5E8, #F4FBF5)', border: '1px solid rgba(61,181,74,0.2)' }}>
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: '#3DB54A' }}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-black" style={{ color: '#1B2A4A', fontSize: '1.35rem', letterSpacing: '-0.02em', lineHeight: 1.15 }}>One month of SaaS fees credited</p>
                    <p className="font-semibold text-sm" style={{ color: '#3D4D5C' }}>$64.95 value per cooler</p>
                    <p className="text-xs mt-1 italic" style={{ color: '#6B7280' }}>Provided as a credit against the equipment invoice</p>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl p-6 text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-4" style={{ background: '#1B2A4A', boxShadow: '0 16px 40px rgba(27,42,74,0.25), 0 0 0 2px #3DB54A' }}>
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 50% 100% at 100% 50%, rgba(61,181,74,0.25), transparent 70%)' }} />
                <p className="relative font-extrabold text-sm tracking-[0.16em] uppercase text-white">Total savings</p>
                <p className="relative">
                  <span className="font-black" style={{ color: '#3DB54A', fontSize: 'clamp(2.2rem, 5vw, 3rem)', letterSpacing: '-0.03em', lineHeight: 1 }}>$214.95</span>
                  <span className="ml-2 text-sm font-bold tracking-[0.12em] uppercase" style={{ color: 'rgba(255,255,255,0.75)' }}>per cooler</span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {SPECTRA_FEATURES.map((f) => (
              <div key={f.title} className="flex items-center gap-3 rounded-xl p-4" style={{ background: '#F4F6F8' }}>
                <svg className="w-8 h-8 flex-shrink-0" fill="none" stroke="#3DB54A" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d={f.path} />
                </svg>
                <span className="font-bold text-sm" style={{ color: '#1B2A4A', lineHeight: 1.3 }}>{f.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-14 lg:py-20" style={{ background: 'radial-gradient(ellipse 50% 80% at 50% 0%, rgba(61,181,74,0.18), transparent 70%), #1B2A4A' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: GRAIN, opacity: 0.08, mixBlendMode: 'overlay' }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-black text-white mb-3" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
            Lock in your Black Friday price
          </h2>
          <p className="mb-8" style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.7 }}>
            Offers run November 20 to 30, 2026. Reach out and we will walk you through the right cooler for your location.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <Link href="/#contact" className={btnPrimary} style={btnPrimaryStyle}>Get a Quote</Link>
            <a href="tel:+14132823776" className={btnGhost} style={btnGhostStyle}>Call (413) 282-3776</a>
          </div>
          <a href="mailto:info@vitalvendingsales.com" className="text-sm font-semibold hover:text-white focus-visible:text-white focus-visible:outline-none" style={{ color: '#9be3a4' }}>
            info@vitalvendingsales.com
          </a>
        </div>
      </section>
    </>
  );
}
