import Link from 'next/link';
import Image from 'next/image';

const PARTNERS = [
  {
    name: 'LEAF Commercial Capital',
    logo: '/financing-logos/leaf-logo.png',
    logoWidth: 175,
    logoHeight: 50,
    desc: 'LEAF offers equipment financing and leasing programs built for businesses of all sizes, with flexible terms and a straightforward application process.',
    href: 'https://www.leafnow.com/equipment-financing',
  },
  {
    name: 'U-Select-It (Wittern Finance)',
    logo: '/financing-logos/uselectit-logo.png',
    logoWidth: 100,
    logoHeight: 66,
    desc: 'Financing through the Wittern Group, the manufacturer behind U-Select-It vending equipment, with programs tailored specifically to the vending industry.',
    href: 'https://uselectit.com/get-approved-for-financing/',
  },
  {
    name: 'Apex Commercial Capital',
    logoText: 'APEX',
    desc: 'Apex Commercial Capital provides equipment financing solutions designed to help businesses acquire the machines they need without tying up working capital.',
    href: 'https://www.apexcommercial.com/equipment-finance',
  },
];

export default function Financing() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: '#1B2A4A' }} className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm mb-3" style={{ color: 'rgba(255,255,255,0.55)' }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span style={{ color: 'rgba(255,255,255,0.85)' }}>Financing</span>
          </nav>
          <h1 className="font-black text-white mb-3" style={{ fontSize: 'clamp(2rem,4vw,3rem)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>Financing Options</h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, maxWidth: 560 }}>Flexible financing and leasing options to get vending machines and AI smart coolers on-site with less upfront cost.</p>
        </div>
      </section>

      {/* Intro */}
      <section className="pt-16 lg:pt-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-black mb-4" style={{ color: '#1B2A4A', fontSize: 'clamp(1.5rem,3vw,2rem)', letterSpacing: '-0.03em', lineHeight: 1.2 }}>
            Every business is different. We work with trusted financing partners to help you find the right fit.
          </h2>
          <p style={{ color: '#3D4D5C', lineHeight: 1.75, fontSize: '1.05rem' }}>
            Terms, approval requirements, and minimum order sizes vary by partner. Reach out directly to the one that fits your business, or give us a call and we&apos;ll point you in the right direction.
          </p>
        </div>
      </section>

      {/* Partner cards */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6">
          {PARTNERS.map((p) => (
            <div
              key={p.name}
              className="rounded-2xl border p-7 lg:p-9 flex flex-col sm:flex-row sm:items-center gap-7"
              style={{ borderColor: 'rgba(27,42,74,0.1)', background: '#F9FAFB', boxShadow: '0 4px 20px rgba(27,42,74,0.05)' }}
            >
              <div className="flex-shrink-0 flex items-center justify-center w-full sm:w-[180px]" style={{ height: 70 }}>
                {p.logo ? (
                  <Image src={p.logo} alt={p.name} width={p.logoWidth} height={p.logoHeight} style={{ objectFit: 'contain', maxHeight: 60, width: 'auto' }} />
                ) : (
                  <span className="font-black" style={{ color: '#1B2A4A', fontSize: '1.6rem', letterSpacing: '-0.02em' }}>{p.logoText}</span>
                )}
              </div>
              <div className="flex-1">
                <h3 className="font-bold mb-1.5" style={{ color: '#1B2A4A', fontSize: '1.15rem' }}>{p.name}</h3>
                <p className="mb-4" style={{ color: '#3D4D5C', lineHeight: 1.65, fontSize: '0.95rem' }}>{p.desc}</p>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-bold rounded-xl text-white px-6 py-3 text-sm"
                  style={{ background: 'rgba(61,181,74,0.88)', border: '1px solid rgba(255,255,255,0.28)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.35), 0 4px 16px rgba(0,0,0,0.18)' }}
                >
                  Apply with {p.name.split(' ')[0]}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20" style={{ background: '#F4F6F8' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-black mb-4" style={{ color: '#1B2A4A', fontSize: 'clamp(1.4rem,3vw,1.9rem)', letterSpacing: '-0.03em', lineHeight: 1.2 }}>
            Not sure which option is right for you?
          </h2>
          <p className="mb-8" style={{ color: '#3D4D5C', lineHeight: 1.75, fontSize: '1.05rem' }}>
            Give us a call and we&apos;ll help you figure out the best financing path for your equipment.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:4132823776" className="inline-flex items-center gap-2 font-bold rounded-xl text-white px-7 py-3.5" style={{ background: 'rgba(61,181,74,0.88)', border: '1px solid rgba(255,255,255,0.28)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.35), 0 4px 16px rgba(0,0,0,0.18)' }}>
              Call (413) 282-3776
            </a>
            <Link href="/#contact" className="inline-flex items-center gap-2 font-semibold rounded-xl px-6 py-3.5" style={{ color: '#1B2A4A', background: '#fff', border: '1.5px solid rgba(27,42,74,0.15)' }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
