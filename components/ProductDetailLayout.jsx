import Link from 'next/link';
import Image from 'next/image';

export default function ProductDetailLayout({
  name, model, tagline, price, image, specs, features, costRows, costNote, comparisonImage, pdfHref, related,
}) {
  return (
    <>
      {/* Breadcrumb */}
      <div style={{ background: '#F4F6F8' }} className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm" style={{ color: '#8C95A0' }}>
          <Link href="/" className="hover:text-[#1B2A4A] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/smart-coolers" className="hover:text-[#1B2A4A] transition-colors">AI Smart Coolers</Link>
          <span className="mx-2">/</span>
          <span style={{ color: '#1B2A4A', fontWeight: 500 }}>{name}</span>
        </div>
      </div>

      {/* Product Hero */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="relative rounded-2xl flex items-center justify-center p-10" style={{ background: '#F4F6F8', minHeight: 420 }}>
              <Image src={image} alt={`${name} AI Smart Cooler${model ? ' ' + model : ''}`} width={380} height={380} style={{ mixBlendMode: 'multiply', maxHeight: 380, width: 'auto', height: 'auto', objectFit: 'contain' }} priority />
            </div>
            <div>
              <div className="text-xs font-bold uppercase mb-3" style={{ color: '#3DB54A', letterSpacing: '0.1em' }}>HAHA Smart Coolers</div>
              <h1 className="font-black mb-2" style={{ color: '#1B2A4A', fontSize: 'clamp(2rem,4vw,2.8rem)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>{name}</h1>
              {model && <p className="text-sm mb-1 font-medium" style={{ color: '#8C95A0' }}>Model: {model}</p>}
              <div className="flex items-baseline gap-2 mt-4 mb-6">
                <span className="text-sm font-medium" style={{ color: '#8C95A0' }}>From</span>
                <span className="font-black" style={{ color: '#1B2A4A', fontSize: '2.4rem', letterSpacing: '-0.03em' }}>{price}</span>
              </div>
              <p className="mb-8" style={{ color: '#3D4D5C', lineHeight: 1.75 }}>{tagline}</p>

              <div className="space-y-3 mb-8">
                {specs.map(([label, value]) => (
                  <div key={label} className="flex justify-between py-3 text-sm" style={{ borderBottom: '1px solid #F0F2F4' }}>
                    <span style={{ color: '#8C95A0' }}>{label}</span>
                    <span className="font-semibold" style={{ color: '#1B2A4A' }}>{value}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/#contact" className="inline-flex items-center gap-2 font-bold rounded-xl text-white px-7 py-3.5" style={{ background: 'rgba(61,181,74,0.9)', border: '1px solid rgba(255,255,255,0.28)', boxShadow: '0 4px 16px rgba(0,0,0,0.18), 0 0 24px rgba(61,181,74,0.28)' }}>Request a Quote</Link>
                <a href="tel:4132823776" className="inline-flex items-center gap-2 font-semibold rounded-xl px-6 py-3.5" style={{ color: '#1B2A4A', background: 'rgba(255,255,255,0.55)', border: '1.5px solid rgba(27,42,74,0.3)' }}>(413) 282-3776</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-14 lg:py-20" style={{ background: '#F4F6F8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-xs font-bold uppercase mb-3" style={{ color: '#3DB54A', letterSpacing: '0.1em' }}>Why HAHA</div>
            <h2 className="font-black mb-4" style={{ color: '#1B2A4A', fontSize: 'clamp(1.6rem,3vw,2.2rem)', letterSpacing: '-0.03em' }}>Built Different. Built Better.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl p-5" style={{ background: '#fff' }}>
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className="font-bold mb-2" style={{ color: '#1B2A4A' }}>{f.title}</h3>
                <p className="text-sm" style={{ color: '#3D4D5C', lineHeight: 1.7 }}>{f.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl p-6 lg:p-8" style={{ background: '#fff' }}>
            <h3 className="font-bold mb-2" style={{ color: '#1B2A4A' }}>Organizers Included — No Extra Cost</h3>
            <p className="text-sm" style={{ color: '#3D4D5C', lineHeight: 1.7 }}>Beverage glides and food organizers come standard with every HAHA unit. Competitors charge up to $500 for these as an add-on. With HAHA, they&apos;re included.</p>
          </div>
        </div>
      </section>

      {/* Operating Costs */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="text-xs font-bold uppercase mb-3" style={{ color: '#3DB54A', letterSpacing: '0.1em' }}>Transparent Pricing</div>
            <h2 className="font-black mb-3" style={{ color: '#1B2A4A', fontSize: 'clamp(1.5rem,3vw,2rem)', letterSpacing: '-0.03em' }}>What Does It Cost to Operate?</h2>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-200" style={{ overflowX: 'auto' }}>
            <table className="w-full text-sm">
              <thead style={{ background: '#1B2A4A', color: '#fff' }}>
                <tr>
                  <th className="text-left px-6 py-4 font-semibold">Cost Item</th>
                  <th className="text-left px-6 py-4 font-semibold">Amount</th>
                  <th className="text-left px-6 py-4 font-semibold hidden sm:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody>
                {costRows.map((row, i) => (
                  <tr key={row[0] + i} style={{ borderBottom: '1px solid #f3f4f6', background: i % 2 === 1 ? '#f9fafb' : 'transparent' }}>
                    <td className="px-6 py-4 font-medium" style={{ color: '#1B2A4A' }}>{row[0]}</td>
                    <td className="px-6 py-4 font-bold" style={{ color: '#1B2A4A' }}>{row[1]}</td>
                    <td className="px-6 py-4 hidden sm:table-cell" style={{ color: '#3D4D5C' }}>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {costNote && <p className="text-sm mt-5" style={{ color: '#8C95A0', lineHeight: 1.7 }}>{costNote}</p>}
          {pdfHref && (
            <div className="mt-10 rounded-2xl p-6 lg:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5" style={{ background: '#1B2A4A' }}>
              <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(61,181,74,0.18)' }}>
                <svg className="w-6 h-6" fill="none" stroke="#3DB54A" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a1 1 0 001 1h16a1 1 0 001-1v-3" /></svg>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-white mb-1">HAHA App User Guide</h3>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>Download the official operator guide to learn how to set up your machine, manage products, view sales reports, and get the most out of the HAHA platform.</p>
              </div>
              <a href={pdfHref} download="HAHA-App-User-Guide.pdf" className="flex-shrink-0 inline-flex items-center gap-2 font-bold rounded-xl px-5 py-3 text-sm" style={{ background: '#3DB54A', color: '#1B2A4A' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a1 1 0 001 1h16a1 1 0 001-1v-3" /></svg>
                Download PDF
              </a>
            </div>
          )}
        </div>
      </section>

      {/* VS Comparison */}
      {comparisonImage && (
        <section className="py-14 lg:py-20" style={{ background: '#F4F6F8' }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="text-xs font-bold uppercase mb-3" style={{ color: '#3DB54A', letterSpacing: '0.1em' }}>Why Make the Switch</div>
              <h2 className="font-black mb-3" style={{ color: '#1B2A4A', fontSize: 'clamp(1.5rem,3vw,2rem)', letterSpacing: '-0.03em' }}>HAHA Smart Vending vs. Traditional Vending</h2>
            </div>
            <div className="relative rounded-2xl overflow-hidden" style={{ boxShadow: '0 4px 32px rgba(27,42,74,0.12)' }}>
              <Image src={comparisonImage} alt="HAHA Smart Vending vs Traditional Vending comparison chart" width={1200} height={800} style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          </div>
        </section>
      )}

      {/* Related Products */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-black mb-8" style={{ color: '#1B2A4A', fontSize: 'clamp(1.4rem,2.5vw,1.9rem)', letterSpacing: '-0.02em' }}>You Might Also Consider</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link key={r.href} href={r.href} className="block rounded-2xl overflow-hidden bg-white transition-transform duration-300 hover:-translate-y-1" style={{ textDecoration: 'none', boxShadow: '0 2px 12px rgba(27,42,74,0.08)' }}>
                <div className="relative flex items-center justify-center" style={{ background: '#F4F6F8', height: 180 }}>
                  <Image src={r.img} alt={r.name} width={160} height={160} style={{ mixBlendMode: 'multiply', height: 160, width: 'auto', objectFit: 'contain' }} loading="lazy" />
                </div>
                <div className="p-5">
                  {r.model && <p className="text-xs mb-1" style={{ color: '#8C95A0' }}>Model: {r.model}</p>}
                  <h3 className="font-bold mb-1" style={{ color: '#1B2A4A' }}>{r.name}</h3>
                  <p className="font-black text-lg" style={{ color: '#3DB54A' }}>{r.price}</p>
                </div>
              </Link>
            ))}
            <Link href="/smart-coolers" className="block rounded-2xl overflow-hidden bg-white transition-transform duration-300 hover:-translate-y-1" style={{ textDecoration: 'none', boxShadow: '0 2px 12px rgba(27,42,74,0.08)' }}>
              <div className="flex items-center justify-center" style={{ background: '#1B2A4A', height: 180 }}>
                <span className="text-white font-black text-xl">View All Models</span>
              </div>
              <div className="p-5">
                <h3 className="font-bold mb-1" style={{ color: '#1B2A4A' }}>Browse Full Lineup</h3>
                <p className="text-sm" style={{ color: '#8C95A0' }}>7 HAHA models — find the right fit for your location.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 lg:py-20 text-center" style={{ background: '#1B2A4A' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-black text-white mb-4" style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', letterSpacing: '-0.03em' }}>Ready to Get the {name}?</h2>
          <p className="mb-8 text-base" style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>Get a free consultation with our team. We&apos;ll walk you through placement, product mix, and ROI — no pressure.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/#contact" className="inline-flex items-center gap-2 font-bold rounded-xl text-white px-7 py-3.5" style={{ background: 'rgba(61,181,74,0.9)', border: '1px solid rgba(255,255,255,0.28)', boxShadow: '0 4px 16px rgba(0,0,0,0.18), 0 0 24px rgba(61,181,74,0.28)' }}>Request a Quote</Link>
            <a href="tel:4132823776" className="inline-flex items-center gap-2 font-semibold rounded-xl px-6 py-3.5 text-white" style={{ background: 'rgba(255,255,255,0.1)', border: '1.5px solid rgba(255,255,255,0.3)' }}>(413) 282-3776</a>
          </div>
        </div>
      </section>
    </>
  );
}
