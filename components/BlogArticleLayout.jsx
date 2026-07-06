import Link from 'next/link';
import Image from 'next/image';

const CAT_STYLES = {
  catGreen: { background: '#D6F0DA', color: '#1e7a28' },
  catNavy: { background: 'rgba(27,42,74,0.1)', color: '#1B2A4A' },
  catAmber: { background: '#FEF3C7', color: '#92400E' },
};

const ArrowIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
);

export default function BlogArticleLayout({ category, catStyle, title, author, date, readTime, heroImage, related, children }) {
  return (
    <>
      {/* Article Hero */}
      <div className="relative w-full" style={{ height: 420, background: '#1B2A4A', overflow: 'hidden' }}>
        <Image src={heroImage} alt={title} fill sizes="100vw" style={{ objectFit: 'cover', opacity: 0.4 }} priority />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(27,42,74,0.3) 0%, rgba(18,30,53,0.95) 70%)' }} />
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
            <span className="inline-block text-xs font-bold uppercase rounded-md px-2.5 py-1 mb-4" style={{ ...CAT_STYLES[catStyle], letterSpacing: '0.1em' }}>{category}</span>
            <h1 className="font-black text-white mb-5" style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.75rem,4vw,3rem)', lineHeight: 1.1, letterSpacing: '-0.02em', maxWidth: 720 }}>{title}</h1>
            <div className="flex items-center gap-4 flex-wrap">
              {author && (
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#3DB54A' }}>
                    <span className="text-white font-bold" style={{ fontSize: '0.65rem' }}>VVS</span>
                  </div>
                  <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem' }}>{author}</span>
                </div>
              )}
              <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.875rem' }}>{date}</span>
              {readTime && <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.875rem' }}>{readTime}</span>}
            </div>
          </div>
        </div>
      </div>

      {/* Article Body */}
      <main className="py-14">
        <div className="max-w-2xl mx-auto px-4 sm:px-6" style={{ color: '#3D4D5C' }}>
          {children}
        </div>
      </main>

      {/* Related Articles */}
      {related?.length > 0 && (
        <section className="py-14" style={{ background: '#F4F6F8' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-xs font-bold" style={{ color: '#1B2A4A', letterSpacing: '0.1em' }}>RELATED ARTICLES</span>
              <div className="flex-1 h-px" style={{ background: 'rgba(27,42,74,0.12)' }} />
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link key={r.href} href={r.href} className="rounded-2xl overflow-hidden bg-white flex flex-col" style={{ textDecoration: 'none', border: '1px solid rgba(27,42,74,0.07)', boxShadow: '0 1px 2px rgba(27,42,74,0.05), 0 4px 12px rgba(27,42,74,0.07)' }}>
                  <div className="relative overflow-hidden flex-shrink-0" style={{ height: 160, background: '#F4F6F8' }}>
                    <Image src={r.img} alt={r.title} fill style={{ objectFit: 'cover' }} loading="lazy" />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <span className="inline-block text-xs font-bold uppercase rounded-md px-2 py-1 mb-2 w-fit" style={{ ...CAT_STYLES[r.catStyle], letterSpacing: '0.1em' }}>{r.cat}</span>
                    <h3 className="font-black mb-1" style={{ color: '#1B2A4A', fontSize: '0.95rem', lineHeight: 1.25, letterSpacing: '-0.01em' }}>{r.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16" style={{ background: '#1B2A4A', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.04 }} aria-hidden="true">
          <svg width="100%" height="100%"><filter id="n2"><feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter><rect width="100%" height="100%" filter="url(#n2)" /></svg>
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs font-bold mb-4 uppercase" style={{ letterSpacing: '0.12em', color: '#3DB54A' }}>Ready to Get Started?</div>
          <h2 className="font-black text-white mb-5" style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem,4vw,3rem)', lineHeight: 1.05 }}>Talk to a vending expert today.</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: '1rem' }} className="mb-8">Whether you&apos;re starting your first route or scaling to 50 machines, we&apos;ll point you in the right direction. No pressure.</p>
          <Link href="/#contact" className="inline-flex items-center gap-2 font-bold rounded-xl text-white px-7 py-3.5" style={{ background: 'rgba(61,181,74,0.88)', border: '1px solid rgba(255,255,255,0.28)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.35), 0 4px 16px rgba(0,0,0,0.18)' }}>Get a Free Consultation</Link>
        </div>
      </section>
    </>
  );
}

export const articleStyles = {
  h2: { fontFamily: 'Georgia, serif', fontWeight: 900, color: '#1B2A4A', fontSize: '1.6rem', lineHeight: 1.2, letterSpacing: '-0.02em', marginTop: '2.5rem', marginBottom: '1rem' },
  p: { color: '#3D4D5C', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1.05rem' },
  ul: { color: '#3D4D5C', lineHeight: 1.8, marginBottom: '1.25rem', paddingLeft: '1.5rem', fontSize: '1.05rem' },
  li: { marginBottom: '0.5rem' },
  pullquote: { borderLeft: '4px solid #3DB54A', padding: '1.25rem 1.5rem', margin: '2rem 0', background: '#F4F6F8', borderRadius: '0 12px 12px 0' },
  pullquoteText: { fontFamily: 'Georgia, serif', fontSize: '1.25rem', fontWeight: 700, color: '#1B2A4A', lineHeight: 1.4, margin: 0 },
  callout: { background: '#D6F0DA', borderRadius: 12, padding: '1.5rem', margin: '2rem 0' },
  calloutH3: { color: '#1B2A4A', fontWeight: 800, marginBottom: '0.5rem' },
  table: { width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0' },
  th: { background: '#1B2A4A', color: '#fff', padding: '10px 14px', textAlign: 'left', fontSize: '0.875rem' },
  td: { padding: '10px 14px', borderBottom: '1px solid rgba(27,42,74,0.1)', fontSize: '0.9rem', color: '#3D4D5C' },
};
