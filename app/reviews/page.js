import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Customer Reviews | Vital Vending Sales',
  description: 'Real reviews from real clients across the Northeast. See what businesses are saying about Vital Vending Sales vending machines and AI smart coolers.',
};

const REVIEWS = [
  { initial: 'J', color: '#1B2A4A', name: 'John Ragno', text: "Nick is trustworthy, honest, and takes his time to help you find the right machine — whether you're starting out or expanding your vending business. He's knowledgeable, patient, and goes above and beyond to ensure you understand your options. Excellent service from start to finish." },
  { initial: 'E', color: '#3DB54A', name: 'Emma Canarick', text: "Vital Vending exceeded every expectation! From day one, they went above and beyond to help ZenVend find the perfect machines for our needs. They didn't just sell us equipment — they walked us through every detail of how it works, patiently answering all of our questions." },
  { initial: 'C', color: '#243560', name: 'Chris Smalley', text: "Vital Vending has been an absolute game-changer in helping my wife and I get our vending business off the ground. Nick, Justin, and Prez are a wealth of knowledge, easy to work with, ultra responsive, and are all extremely professional. I'm grateful that I found them!" },
  { initial: 'T', color: '#2e9439', name: 'Timothy Wear', badge: 'Local Guide', text: "Deanna in the office is always such a delight to work with. And Prez has always shown the utmost care when delivering my machines. Highly recommend Vital Vending." },
  { initial: 'R', color: '#1B2A4A', name: 'Roopa Naik', text: "Excellent communication and an easy setup process. Nick was very helpful and responded quickly to all my questions. Highly recommend." },
  { initial: 'D', color: '#3DB54A', name: 'Drew Friedman', badge: 'Local Guide', text: "I met Nick at the NAMA show in Las Vegas and was blown away by his knowledge and experience in the vending machine sales realm. A true professional who knows this industry inside and out." },
  { initial: 'K', color: '#243560', name: 'KM Dispensing', text: "Nick is very knowledgeable and great to work with. He has a great selection of machines and can help with parts as well. I have had a great experience working with Vital Vending and would highly recommend!" },
  { initial: 'L', color: '#2e9439', name: 'Lily Markee', text: "Nick has a great wealth of knowledge and experience! Always professional and on time when we need him. — Erich @ LTD Refreshments" },
  { initial: 'M', color: '#1B2A4A', name: 'Michael Sepe', badge: 'Local Guide', text: "It's always a pleasure to do business with Nick. He serves the vending industry well. Stands behind his products and his word." },
  { initial: 'J', color: '#3DB54A', name: 'Jay Hooks', badge: 'Local Guide', text: "I had a few questions about some machines. Customer service was great! Very knowledgeable and helpful." },
];

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 ml-auto flex-shrink-0" fill="none">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const CLIENT_PHOTOS = [
  'Screenshot 2026-06-17 at 08-35-35 Instagram.jpg',
  'Screenshot 2026-06-17 at 08-35-53 Instagram.jpg',
  'Screenshot 2026-06-17 at 08-36-33 Instagram.jpg',
  'Screenshot 2026-06-17 at 08-36-40 Instagram.jpg',
  'Screenshot 2026-06-17 at 08-36-47 Instagram.jpg',
  'Screenshot 2026-06-17 at 08-36-54 Instagram.jpg',
  'Screenshot 2026-06-17 at 08-37-06 Instagram.jpg',
  'Screenshot 2026-06-17 at 08-37-21 Instagram.jpg',
  'Screenshot 2026-06-17 at 08-37-27 Instagram.jpg',
  'Screenshot 2026-06-17 at 08-37-32 Instagram.jpg',
  'Screenshot 2026-06-17 at 08-37-40 Instagram.jpg',
  'Screenshot 2026-06-17 at 08-37-45 Instagram.jpg',
  'Screenshot 2026-06-17 at 08-37-52 Instagram.jpg',
  'Screenshot 2026-06-17 at 08-37-58 Instagram.jpg',
  'Screenshot 2026-06-17 at 08-38-06 Instagram.jpg',
];

export default function Reviews() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: '#1B2A4A', position: 'relative', overflow: 'hidden' }} className="py-16 lg:py-24">
        <div style={{ position: 'absolute', inset: 0, opacity: 0.04 }} aria-hidden="true">
          <svg width="100%" height="100%"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter><rect width="100%" height="100%" filter="url(#noise)" /></svg>
        </div>
        <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '55%', height: '130%', background: 'radial-gradient(ellipse at center,rgba(61,181,74,0.1) 0%,transparent 70%)', pointerEvents: 'none' }} aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <nav className="text-sm mb-5" style={{ color: 'rgba(255,255,255,0.45)' }}>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span className="mx-2">/</span>
                <span style={{ color: 'rgba(255,255,255,0.8)' }}>Reviews</span>
              </nav>
              <div className="text-xs font-bold mb-4 uppercase tracking-widest" style={{ letterSpacing: '0.12em', color: '#3DB54A' }}>What Our Clients Say</div>
              <h1 className="font-black text-white mb-5" style={{ fontSize: 'clamp(2.2rem,5vw,3.6rem)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                Happy clients.<br />Happy break rooms.
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, fontSize: '1.05rem', maxWidth: 480 }}>
                From small offices to warehouses, gyms to schools, real businesses across the Northeast trust VVS to keep their people fueled and satisfied.
              </p>
              <a href="https://share.google/zldlNjs6a3Lq2OWP1" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-4 rounded-2xl px-5 py-4" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.14)', textDecoration: 'none' }}>
                <GoogleIcon />
                <div>
                  <div className="flex items-center gap-1.5">
                    <span style={{ color: '#F59E0B', fontSize: '1.125rem' }}>★★★★★</span>
                    <span className="font-black text-white text-lg" style={{ letterSpacing: '-0.02em' }}>5.0</span>
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.78rem', fontWeight: 500 }}>Google Reviews</div>
                </div>
                <div style={{ width: 1, background: 'rgba(255,255,255,0.15)', height: 36 }} />
                <div className="text-center">
                  <div className="font-black text-white text-lg" style={{ letterSpacing: '-0.02em' }}>10+</div>
                  <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.78rem', fontWeight: 500 }}>Verified Reviews</div>
                </div>
              </a>
            </div>
            <div className="hidden lg:flex items-center justify-center" style={{ height: 420 }}>
              <div style={{ height: 391, width: 391, borderRadius: 20, overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.35)', position: 'relative' }}>
                <Image src="/static-assets/Client testimonial pictures/Screenshot 2026-06-17 at 08-36-54 Instagram.jpg" alt="Happy VVS client" fill style={{ objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 60 }}>
            <path d="M0 60L1440 60L1440 20C1200 55 960 5 720 25C480 45 240 5 0 25L0 60Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* Stats Strip */}
      <section style={{ background: '#3DB54A' }} className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[['5.0', 'Google Rating'], ['200+', 'Happy Clients'], ['15+', 'Years Experience'], ['100%', 'Would Recommend']].map(([n, l]) => (
              <div key={l}>
                <div className="font-black" style={{ fontSize: 'clamp(2.2rem,4vw,3.2rem)', color: '#fff', letterSpacing: '-0.04em', lineHeight: 1 }}>{n}</div>
                <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.82rem', fontWeight: 600, marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-xs font-bold mb-3 uppercase tracking-widest" style={{ letterSpacing: '0.12em', color: '#1a6b2a' }}>Client Photos</div>
            <h2 className="font-black" style={{ fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', color: '#1B2A4A', letterSpacing: '-0.03em', lineHeight: 1.1 }}>Real clients. Real machines. Real smiles.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CLIENT_PHOTOS.map((photo) => (
              <div key={photo} style={{ borderRadius: 14, overflow: 'hidden', aspectRatio: '1/1', position: 'relative' }}>
                <Image src={`/static-assets/Client testimonial pictures/${photo}`} alt="VVS client" fill style={{ objectFit: 'cover' }} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section style={{ background: '#F4F6F8' }} className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div>
              <div className="text-xs font-bold mb-3 uppercase tracking-widest" style={{ letterSpacing: '0.12em', color: '#1a6b2a' }}>Google Reviews</div>
              <h2 className="font-black mb-3" style={{ fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', color: '#1B2A4A', letterSpacing: '-0.03em', lineHeight: 1.1 }}>What people are saying</h2>
              <p style={{ color: '#3D4D5C', maxWidth: 460, lineHeight: 1.7 }}>Pulled straight from Google. Unedited, unfiltered, and 100% real.</p>
            </div>
            <a href="https://share.google/zldlNjs6a3Lq2OWP1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl px-6 py-4 bg-white flex-shrink-0" style={{ boxShadow: '0 2px 12px rgba(27,42,74,0.08)', border: '1px solid rgba(27,42,74,0.07)', textDecoration: 'none' }}>
              <div className="text-center">
                <div style={{ fontSize: '3rem', fontWeight: 900, color: '#1B2A4A', letterSpacing: '-0.04em', lineHeight: 1 }}>5.0</div>
                <div style={{ color: '#F59E0B', fontSize: '1.25rem', marginTop: 4 }}>★★★★★</div>
                <div style={{ color: '#6B7280', fontSize: '0.75rem', fontWeight: 500, marginTop: 4 }}>Google Rating</div>
              </div>
            </a>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {REVIEWS.map((r) => (
              <div key={r.name} className="bg-white rounded-2xl p-6" style={{ border: '1px solid rgba(27,42,74,0.07)', boxShadow: '0 2px 8px rgba(27,42,74,0.05), 0 8px 24px rgba(27,42,74,0.06)' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-full flex items-center justify-center font-black text-white flex-shrink-0" style={{ width: 44, height: 44, background: r.color, fontSize: '1rem' }}>{r.initial}</div>
                  <div>
                    <div className="font-bold text-sm" style={{ color: '#1B2A4A' }}>{r.name}</div>
                    <div style={{ color: '#F59E0B' }}>★★★★★</div>
                    {r.badge && <div style={{ color: '#6B7280', fontSize: '0.7rem' }}>{r.badge}</div>}
                  </div>
                  <GoogleIcon />
                </div>
                <p className="text-sm" style={{ color: '#3D4D5C', lineHeight: 1.72 }}>{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#1B2A4A', position: 'relative', overflow: 'hidden' }} className="py-16 lg:py-20">
        <div style={{ position: 'absolute', inset: 0, opacity: 0.04 }} aria-hidden="true">
          <svg width="100%" height="100%"><filter id="noise3"><feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter><rect width="100%" height="100%" filter="url(#noise3)" /></svg>
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs font-bold mb-4 uppercase tracking-widest" style={{ letterSpacing: '0.12em', color: '#3DB54A' }}>Join 200+ Happy Clients</div>
          <h2 className="font-black text-white mb-5" style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', letterSpacing: '-0.03em', lineHeight: 1.15 }}>Ready to be our next success story?</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, marginBottom: '2rem' }}>Get a free consultation and see why businesses across the Northeast choose Vital Vending Sales.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/#contact" className="inline-flex items-center gap-2 font-bold rounded-xl text-white px-7 py-3.5" style={{ background: 'rgba(61,181,74,0.88)', border: '1px solid rgba(255,255,255,0.28)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.35), 0 4px 16px rgba(0,0,0,0.18)' }}>Get a Free Consultation</Link>
            <a href="tel:4132823776" className="inline-flex items-center gap-2 font-semibold text-sm" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', padding: '14px 0' }}>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
              (413) 282-3776
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
