import Link from 'next/link';

export default function VendingParts() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: '#1B2A4A' }} className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm mb-3" style={{ color: 'rgba(255,255,255,0.55)' }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span style={{ color: 'rgba(255,255,255,0.85)' }}>Vending Parts</span>
          </nav>
          <h1 className="font-black text-white mb-3" style={{ fontSize: 'clamp(2rem,4vw,3rem)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>Vending Machine Parts</h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, maxWidth: 520 }}>Genuine replacement parts for snack, combo, and beverage machines.</p>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex px-3 py-1.5 text-xs font-bold uppercase tracking-widest mb-6" style={{ background: '#D6F0DA', color: '#1e7a28', borderRadius: 4 }}>
            Coming Soon
          </div>
          <h2 className="font-black mb-4" style={{ color: '#1B2A4A', fontSize: 'clamp(1.6rem,3.5vw,2.4rem)', letterSpacing: '-0.03em', lineHeight: 1.2 }}>
            Our online parts store is on its way.
          </h2>
          <p className="mb-10" style={{ color: '#3D4D5C', lineHeight: 1.75, fontSize: '1.05rem' }}>
            We&apos;re building a full catalog of genuine vending machine parts — motors, bill validators, coin mechanisms, control boards, and more — so you can order online and ship direct. In the meantime, give us a call and we&apos;ll help you track down the part you need.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:4132823776" className="inline-flex items-center gap-2 font-bold rounded-xl text-white px-7 py-3.5" style={{ background: 'rgba(61,181,74,0.88)', border: '1px solid rgba(255,255,255,0.28)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.35), 0 4px 16px rgba(0,0,0,0.18)' }}>
              Call (413) 282-3776
            </a>
            <Link href="/#contact" className="inline-flex items-center gap-2 font-semibold rounded-xl px-6 py-3.5" style={{ color: '#1B2A4A', background: '#F4F6F8', border: '1.5px solid rgba(27,42,74,0.15)' }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
