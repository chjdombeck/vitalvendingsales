import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'About Us | Vital Vending Sales',
  description: 'Meet the team behind Vital Vending Sales. 15+ years serving MA, CT, and RI operators with vending machines, AI smart coolers, and micro-market solutions.',
};

export default function About() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: '#1B2A4A' }} className="relative overflow-hidden py-16 lg:py-24">
        <div style={{ position: 'absolute', inset: 0, opacity: 0.04 }} aria-hidden="true">
          <svg width="100%" height="100%"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter><rect width="100%" height="100%" filter="url(#noise)" /></svg>
        </div>
        <div style={{ position: 'absolute', top: '-20%', left: '-10%', width: '60%', height: '120%', background: 'radial-gradient(ellipse at center, rgba(61,181,74,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="text-sm mb-5" style={{ color: 'rgba(255,255,255,0.45)' }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span style={{ color: 'rgba(255,255,255,0.8)' }}>About Us</span>
          </nav>
          <div className="text-xs font-bold mb-4 uppercase tracking-widest" style={{ letterSpacing: '0.12em', color: '#3DB54A' }}>Our Story</div>
          <h1 className="font-black text-white mb-5" style={{ fontSize: 'clamp(2.2rem,5vw,3.8rem)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
            Built by operators,<br className="hidden sm:block" /> for operators.
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, fontSize: '1.05rem', maxWidth: 580 }} className="mx-auto">
            Vital Vending Sales was built from real experience on real routes. We know vending because we live it every day.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 60 }}>
            <path d="M0 60L1440 60L1440 20C1200 55 960 5 720 25C480 45 240 5 0 25L0 60Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div>
              <div className="text-xs font-bold mb-4 uppercase tracking-widest" style={{ letterSpacing: '0.12em', color: '#1a6b2a' }}>How It Started</div>
              <h2 className="font-black mb-6" style={{ fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', color: '#1B2A4A', letterSpacing: '-0.03em', lineHeight: 1.1 }}>The story behind<br />Vital Vending Sales</h2>
              <div className="space-y-5" style={{ color: '#3D4D5C', lineHeight: 1.8, fontSize: '1rem' }}>
                <p><strong style={{ color: '#1B2A4A' }}>Founder Nick Williamson graduated from Ithaca College in 2011 and built his career in sales across a variety of industries.</strong> His passion for vending was cultivated through more than a decade with Gekay Sales &amp; Service, where he gained hands-on experience servicing, refurbishing, installing, and supporting vending and refreshment equipment throughout New England and across the country.</p>
                <p>Through those experiences, Nick learned that success in the vending industry isn&apos;t simply about equipment. It&apos;s about trust, reliability, and genuinely caring about the people you serve. He saw firsthand how quality equipment, honest guidance, and dependable support could help businesses grow and entrepreneurs create meaningful opportunities for themselves and their families.</p>
                <p>With those values as the foundation, Vital Vending Sales was created. Today, Nick and the VVS team are dedicated to helping businesses, entrepreneurs, schools, healthcare organizations, property managers, and vending operators find the right solutions for their unique needs.</p>
              </div>
              <div className="flex flex-wrap gap-3 mt-8">
                <Link href="/#contact" className="inline-flex items-center gap-2 font-bold rounded-xl text-white px-7 py-3.5 transition-transform" style={{ background: 'rgba(61,181,74,0.88)', border: '1px solid rgba(255,255,255,0.28)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.35), 0 4px 16px rgba(0,0,0,0.18), 0 0 24px rgba(61,181,74,0.28)' }}>Get a Free Consultation</Link>
                <Link href="/vending-machines" className="inline-flex items-center gap-2 font-semibold rounded-xl px-7 py-3.5 transition-all" style={{ background: 'rgba(255,255,255,0.55)', border: '1.5px solid rgba(27,42,74,0.3)', color: '#1B2A4A' }}>See Our Equipment</Link>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: '4/5', maxWidth: 420, margin: '0 auto', boxShadow: '0 1px 2px rgba(27,42,74,0.06), 0 4px 12px rgba(27,42,74,0.08), 0 16px 32px rgba(27,42,74,0.06)', position: 'relative' }}>
                <Image src="/static-assets/Nick Headshot.jpg" alt="Nick Williamson, Founder of Vital Vending Sales" fill style={{ objectFit: 'cover', objectPosition: 'center top' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(18,30,53,0.72) 0%, rgba(18,30,53,0.1) 50%, transparent 100%)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px 18px' }}>
                  <div className="font-black text-white text-lg" style={{ letterSpacing: '-0.02em' }}>Nick Williamson</div>
                  <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', fontWeight: 500 }}>Founder, Vital Vending Sales</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Why */}
      <section style={{ background: '#F4F6F8', borderTop: '1px solid rgba(27,42,74,0.06)' }} className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-xs font-bold mb-3 uppercase tracking-widest" style={{ letterSpacing: '0.12em', color: '#1a6b2a' }}>Our Why</div>
            <h2 className="font-black mb-5" style={{ fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', color: '#1B2A4A', letterSpacing: '-0.03em', lineHeight: 1.1 }}>More than machines.</h2>
            <p style={{ color: '#3D4D5C', maxWidth: 600, lineHeight: 1.8, fontSize: '1.05rem' }} className="mx-auto">At Vital Vending Sales, we believe vending is about far more than equipment. It&apos;s about creating opportunities, solving problems, building relationships, and helping people succeed.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z', title: 'People First', body: 'We are passionate about helping entrepreneurs and small business owners create additional income and build sustainable businesses.' },
              { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', title: 'Trust & Reliability', body: 'We do what we say we\'re going to do. We show up, stay responsive, and treat every customer with genuine respect.' },
              { icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6', title: 'Long-Term Growth', body: 'Our goal isn\'t to sell a machine and move on. We provide knowledge, resources, and support needed for long-term success.' },
              { icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z', title: 'Partners, Not Transactions', body: 'When our customers succeed, we succeed. We\'re invested in your goals, not just your order.' },
            ].map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6" style={{ boxShadow: '0 2px 12px rgba(27,42,74,0.07)', border: '1px solid rgba(27,42,74,0.06)' }}>
                <div className="w-13 h-13 rounded-2xl flex items-center justify-center mb-4 flex-shrink-0" style={{ width: 52, height: 52, background: '#D6F0DA' }}>
                  <svg className="w-6 h-6" fill="none" stroke="#2e9439" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d={v.icon} /></svg>
                </div>
                <div className="font-black mb-2" style={{ color: '#1B2A4A', fontSize: '1rem' }}>{v.title}</div>
                <p className="text-sm" style={{ color: '#3D4D5C', lineHeight: 1.7 }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: '#F4F6F8', borderTop: '1px solid rgba(27,42,74,0.06)', borderBottom: '1px solid rgba(27,42,74,0.06)' }} className="py-14 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[['15+', 'Years in the vending industry'], ['200+', 'Machines placed across the Northeast'], ['500+', 'Parts in stock ready to ship'], ['100%', 'Owner-operated and independent']].map(([num, label]) => (
              <div key={num}>
                <div className="font-black" style={{ fontSize: 'clamp(2.4rem,5vw,3.6rem)', color: '#1B2A4A', letterSpacing: '-0.04em', lineHeight: 1 }}>{num}</div>
                <div className="font-semibold text-sm mt-1" style={{ color: '#3D4D5C', lineHeight: 1.4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-xs font-bold mb-3 uppercase tracking-widest" style={{ letterSpacing: '0.12em', color: '#1a6b2a' }}>Meet the Team</div>
            <h2 className="font-black mb-4" style={{ fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', color: '#1B2A4A', letterSpacing: '-0.03em', lineHeight: 1.1 }}>The people behind VVS</h2>
            <p style={{ color: '#3D4D5C', maxWidth: 520, lineHeight: 1.75 }} className="mx-auto">Real experience, real care. Nick and the VVS crew bring over 15 years of hands-on vending industry knowledge to every client relationship.</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-5">
            <div className="rounded-2xl overflow-hidden" style={{ width: 190, border: '1px solid rgba(27,42,74,0.07)', boxShadow: '0 2px 8px rgba(27,42,74,0.06), 0 8px 20px rgba(27,42,74,0.06)' }}>
              <div className="relative" style={{ aspectRatio: '4/5', background: '#F4F6F8' }}>
                <Image src="/static-assets/team/team-member-1.jpg" alt="Member of the Vital Vending Sales team" fill style={{ objectFit: 'cover', objectPosition: 'center top' }} sizes="190px" />
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden" style={{ width: 190, border: '1px solid rgba(27,42,74,0.07)', boxShadow: '0 2px 8px rgba(27,42,74,0.06), 0 8px 20px rgba(27,42,74,0.06)' }}>
              <div className="relative" style={{ aspectRatio: '4/5', background: '#F4F6F8' }}>
                <Image src="/static-assets/team/team-member-2.jpg" alt="Member of the Vital Vending Sales team" fill style={{ objectFit: 'cover', objectPosition: 'center top' }} sizes="190px" />
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden" style={{ maxWidth: 300, width: '100%', border: '1px solid rgba(27,42,74,0.07)', boxShadow: '0 4px 16px rgba(27,42,74,0.1), 0 16px 40px rgba(27,42,74,0.1)' }}>
              <div className="relative" style={{ aspectRatio: '4/5', background: '#F4F6F8' }}>
                <Image src="/static-assets/Nick Headshot.jpg" alt="Nick Williamson, Founder of Vital Vending Sales" fill style={{ objectFit: 'cover', objectPosition: 'center top' }} sizes="(max-width: 767px) 90vw, 300px" />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(18,30,53,0.5) 0%, transparent 50%)', pointerEvents: 'none' }} />
              </div>
              <div className="p-6">
                <div className="font-black text-lg mb-0.5" style={{ color: '#1B2A4A', letterSpacing: '-0.02em' }}>Nick Williamson</div>
                <div className="font-semibold text-sm mb-3" style={{ color: '#3DB54A' }}>Founder &amp; Owner</div>
                <p className="text-sm" style={{ color: '#3D4D5C', lineHeight: 1.7 }}>Ithaca College grad with 15+ years of hands-on vending industry experience. Nick built VVS on a simple belief: great equipment, honest guidance, and people who actually care make all the difference.</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden" style={{ width: 190, border: '1px solid rgba(27,42,74,0.07)', boxShadow: '0 2px 8px rgba(27,42,74,0.06), 0 8px 20px rgba(27,42,74,0.06)' }}>
              <div className="relative" style={{ aspectRatio: '4/5', background: '#F4F6F8' }}>
                <Image src="/static-assets/team/team-member-3.jpg" alt="Member of the Vital Vending Sales team" fill style={{ objectFit: 'cover', objectPosition: 'center top' }} sizes="190px" />
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden" style={{ width: 190, border: '1px solid rgba(27,42,74,0.07)', boxShadow: '0 2px 8px rgba(27,42,74,0.06), 0 8px 20px rgba(27,42,74,0.06)' }}>
              <div className="relative" style={{ aspectRatio: '4/5', background: '#F4F6F8' }}>
                <Image src="/static-assets/team/team-member-5.jpg" alt="Member of the Vital Vending Sales team" fill style={{ objectFit: 'cover', objectPosition: 'center top' }} sizes="190px" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section style={{ background: '#F4F6F8' }} className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-xs font-bold mb-3 uppercase tracking-widest" style={{ letterSpacing: '0.12em', color: '#1a6b2a' }}>Behind the Scenes</div>
            <h2 className="font-black mb-4" style={{ fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', color: '#1B2A4A', letterSpacing: '-0.03em', lineHeight: 1.1 }}>Life at VVS</h2>
            <p style={{ color: '#3D4D5C', maxWidth: 500, lineHeight: 1.75 }} className="mx-auto">From installs and route runs to warehouse days and machine builds, a look at how we operate.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            <div className="rounded-2xl overflow-hidden relative col-span-1 lg:row-span-2" style={{ aspectRatio: '3/4', background: '#F4F6F8', border: '1px solid rgba(27,42,74,0.07)', boxShadow: '0 1px 2px rgba(27,42,74,0.06), 0 4px 12px rgba(27,42,74,0.08)' }}>
              <Image src="/static-assets/MoreVendingMachinesandContent/bhs1.jpg" alt="Machine install behind the scenes" fill style={{ objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(18,30,53,0.72) 0%, rgba(18,30,53,0.1) 50%, transparent 100%)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px 18px' }}>
                <div className="font-bold text-white text-sm">Machine Install</div>
                <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.75rem' }}>Behind the Scenes</div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden relative" style={{ aspectRatio: '4/3', background: '#F4F6F8', border: '1px solid rgba(27,42,74,0.07)', boxShadow: '0 1px 2px rgba(27,42,74,0.06), 0 4px 12px rgba(27,42,74,0.08)' }}>
              <Image src="/static-assets/Client testimonial pictures/Screenshot 2026-06-17 at 08-37-52 Instagram.jpg" alt="Happy VVS clients" fill style={{ objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(18,30,53,0.72) 0%, rgba(18,30,53,0.1) 50%, transparent 100%)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px 18px' }}>
                <div className="font-bold text-white text-sm">Happy Clients</div>
                <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.75rem' }}>VVS Community</div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden relative" style={{ aspectRatio: '4/3', background: '#F4F6F8', border: '1px solid rgba(27,42,74,0.07)', boxShadow: '0 1px 2px rgba(27,42,74,0.06), 0 4px 12px rgba(27,42,74,0.08)' }}>
              <Image src="/static-assets/MoreVendingMachinesandContent/bhs3.jpg" alt="Pro tip from VVS" fill style={{ objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(18,30,53,0.72) 0%, rgba(18,30,53,0.1) 50%, transparent 100%)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px 18px' }}>
                <div className="font-bold text-white text-sm">Pro Tips</div>
                <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.75rem' }}>From the Field</div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden relative col-span-2 lg:col-span-2" style={{ aspectRatio: '4/3', background: '#F4F6F8', border: '1px solid rgba(27,42,74,0.07)', boxShadow: '0 1px 2px rgba(27,42,74,0.06), 0 4px 12px rgba(27,42,74,0.08)' }}>
              <Image src="/static-assets/MoreVendingMachinesandContent/bhs2.jpg" alt="VVS team in the field" fill style={{ objectFit: 'cover', objectPosition: 'center 30%' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(18,30,53,0.72) 0%, rgba(18,30,53,0.1) 50%, transparent 100%)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px 18px' }}>
                <div className="font-bold text-white text-sm">The VVS Team</div>
                <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.75rem' }}>Out in the Field</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#1B2A4A', position: 'relative', overflow: 'hidden' }} className="py-16 lg:py-20">
        <div style={{ position: 'absolute', inset: 0, opacity: 0.04 }} aria-hidden="true">
          <svg width="100%" height="100%"><filter id="noise2"><feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter><rect width="100%" height="100%" filter="url(#noise2)" /></svg>
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs font-bold mb-4 uppercase tracking-widest" style={{ letterSpacing: '0.12em', color: '#3DB54A' }}>Ready to talk?</div>
          <h2 className="font-black text-white mb-5" style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', letterSpacing: '-0.03em', lineHeight: 1.15 }}>Start a conversation with the VVS team</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, marginBottom: '2rem' }}>Whether you need one machine or twenty, we&apos;ll give you straight answers and a fair quote. No pressure.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/#contact" className="inline-flex items-center gap-2 font-bold rounded-xl text-white px-7 py-3.5" style={{ background: 'rgba(61,181,74,0.88)', border: '1px solid rgba(255,255,255,0.28)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.35), 0 4px 16px rgba(0,0,0,0.18), 0 0 24px rgba(61,181,74,0.28)' }}>Get a Free Consultation</Link>
            <a href="tel:4132823776" className="inline-flex items-center gap-2 font-semibold text-sm" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none', padding: '14px 0' }}>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
              (413) 282-3776
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
