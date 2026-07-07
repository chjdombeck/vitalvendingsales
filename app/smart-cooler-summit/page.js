'use client';

import { useState } from 'react';
import Image from 'next/image';
import { submitToHubSpot, SUMMIT_FORM_GUID } from '../../lib/hubspot';

const LEARN_ITEMS = [
  'Physical & operational review of 2 leading AI smart cooler brands — HAHA and USI Spectra',
  'How to prospect and secure high-value locations',
  'Real operator Q&A with Tim Wear, founder of Snack Savvy NH, who has deployed and operates 20+ smart coolers and traditional vending machines',
  'Networking with other operators and industry experts',
];

const GET_ITEMS = [
  'A side-by-side look at the top AI smart cooler brands',
  'Insights on profitable locations and real-world operations',
  'Q&A with a real operator in the field',
  'Summit-only pricing and promotions on both brands — not available to the public',
];

const BRANDS = [
  { name: 'HAHA Smart Coolers', img: '/static-assets/MoreVendingMachinesandContent/Mini Details.png' },
  { name: 'USI Spectra', img: '/static-assets/vvs_product_catalog/images/spectra-pro-2.webp' },
];

function RegisterForm() {
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState({ first_name: '', last_name: '', email: '', phone: '', attendees: '' });

  const inputCls = 'w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-shadow duration-200';
  const inputStyle = { borderColor: '#e5e7eb', background: '#fff', color: '#1B2A4A' };
  const labelCls = 'block text-xs font-bold mb-1.5 uppercase tracking-wide';

  async function handleSubmit(e) {
    e.preventDefault();
    await submitToHubSpot({
      firstname: data.first_name,
      lastname: data.last_name,
      email: data.email,
      phone: data.phone,
      number_of_attendees: data.attendees || '1',
      message: 'RSVP for the New England Smart Cooler Summit (Aug 8, 2026, Apex Entertainment, Marlborough MA).',
    }, SUMMIT_FORM_GUID);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: '#D6F0DA' }}>
          <svg className="w-6 h-6" style={{ color: '#3DB54A' }} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
        </div>
        <div className="font-bold text-xl mb-1" style={{ color: '#1B2A4A' }}>You&apos;re Registered!</div>
        <div className="text-sm" style={{ color: '#6B7280' }}>We&apos;ll send you the details for August 8th. See you at Apex Entertainment.</div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelCls} style={{ color: '#1B2A4A' }}>First Name</label>
          <input name="first_name" type="text" placeholder="John" required value={data.first_name} onChange={(e) => setData((p) => ({ ...p, first_name: e.target.value }))} className={inputCls} style={inputStyle} />
        </div>
        <div>
          <label className={labelCls} style={{ color: '#1B2A4A' }}>Last Name</label>
          <input name="last_name" type="text" placeholder="Smith" required value={data.last_name} onChange={(e) => setData((p) => ({ ...p, last_name: e.target.value }))} className={inputCls} style={inputStyle} />
        </div>
      </div>
      <div>
        <label className={labelCls} style={{ color: '#1B2A4A' }}>Email</label>
        <input name="email" type="email" placeholder="john@example.com" required value={data.email} onChange={(e) => setData((p) => ({ ...p, email: e.target.value }))} className={inputCls} style={inputStyle} />
      </div>
      <div>
        <label className={labelCls} style={{ color: '#1B2A4A' }}>Phone Number</label>
        <input name="phone" type="tel" placeholder="(413) 555-0000" value={data.phone} onChange={(e) => setData((p) => ({ ...p, phone: e.target.value }))} className={inputCls} style={inputStyle} />
      </div>
      <div>
        <label className={labelCls} style={{ color: '#1B2A4A' }}>Number of Attendees</label>
        <input name="attendees" type="number" min="1" placeholder="1" value={data.attendees} onChange={(e) => setData((p) => ({ ...p, attendees: e.target.value }))} className={inputCls} style={inputStyle} />
      </div>
      <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-base text-white transition-colors duration-200" style={{ background: '#3DB54A' }}>
        Reserve My Spot — It&apos;s Free
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
      </button>
      <p className="text-center text-xs" style={{ color: '#6B7280' }}>Free to attend. Breakfast &amp; refreshments provided. Space is limited.</p>
    </form>
  );
}

export default function Summit() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden py-16 lg:py-24" style={{ background: '#1B2A4A' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.04 }} aria-hidden="true">
          <svg width="100%" height="100%"><filter id="summitNoise"><feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter><rect width="100%" height="100%" filter="url(#summitNoise)" /></svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex px-3 py-1.5 text-xs font-bold uppercase tracking-widest mb-5" style={{ background: 'rgba(61,181,74,0.25)', border: '1px solid rgba(61,181,74,0.4)', color: '#fff', borderRadius: 4 }}>
            New England Smart Cooler Summit
          </div>
          <h1 className="text-white font-black mb-4" style={{ fontSize: 'clamp(2rem,4.5vw,3.2rem)', letterSpacing: '-0.03em', lineHeight: 1.1, maxWidth: 780 }}>
            The Next Big AI Business Opportunity Is Here.<br />
            <span style={{ color: '#3DB54A' }}>Will You Be Part Of It?</span>
          </h1>
          <p className="mb-2" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: 620 }}>
            Real technology. Real operators. Real opportunity. Join us for a free, hands-on review of the leading AI smart cooler brands on the market today.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6 text-sm" style={{ color: 'rgba(255,255,255,0.85)' }}>
            <span className="flex items-center gap-2"><svg className="w-4 h-4" style={{ color: '#3DB54A' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>Saturday, August 8, 2026</span>
            <span className="flex items-center gap-2"><svg className="w-4 h-4" style={{ color: '#3DB54A' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>10:45 AM – 2:00 PM (Check-in begins 10:45 AM)</span>
            <span className="flex items-center gap-2"><svg className="w-4 h-4" style={{ color: '#3DB54A' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>Apex Entertainment, 21 Apex Drive, Marlborough, MA 01752</span>
          </div>
        </div>
      </section>

      {/* EVENT DETAILS + FORM */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: details + flier */}
            <div>
              <div className="relative rounded-2xl overflow-hidden mb-8" style={{ boxShadow: '0 4px 32px rgba(27,42,74,0.14)' }}>
                <Image src="/static-assets/summit/summit-flier.jpg" alt="New England Smart Cooler Summit flier — August 8, 2026, Apex Entertainment, Marlborough MA" width={1200} height={1650} style={{ width: '100%', height: 'auto', display: 'block' }} priority />
              </div>

              <h2 className="font-black text-2xl mb-4" style={{ color: '#1B2A4A', letterSpacing: '-0.02em' }}>What You&apos;ll Learn</h2>
              <ul className="space-y-3 mb-8">
                {LEARN_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm" style={{ color: '#3D4D5C', lineHeight: 1.7 }}>
                    <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#3DB54A' }} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    {item}
                  </li>
                ))}
              </ul>

              <h2 className="font-black text-2xl mb-4" style={{ color: '#1B2A4A', letterSpacing: '-0.02em' }}>You&apos;ll Get</h2>
              <ul className="space-y-3 mb-8">
                {GET_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm" style={{ color: '#3D4D5C', lineHeight: 1.7 }}>
                    <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#3DB54A' }} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="rounded-2xl p-6" style={{ background: '#D6F0DA' }}>
                <p className="font-bold mb-1" style={{ color: '#1B2A4A' }}>Open to all — whether you&apos;re new or already in the business.</p>
                <p className="text-sm" style={{ color: '#1e7a28' }}>Free to attend. Breakfast &amp; refreshments provided. Space is limited.</p>
              </div>
            </div>

            {/* Right: brand showcase + form */}
            <div>
              <div className="rounded-2xl p-6 lg:p-8 mb-8" style={{ background: '#F4F6F8' }}>
                <p className="text-xs font-bold uppercase mb-4" style={{ color: '#3DB54A', letterSpacing: '0.1em' }}>Physical &amp; Operational Review Of</p>
                <div className="grid grid-cols-2 gap-3">
                  {BRANDS.map((b) => (
                    <div key={b.name} className="rounded-xl bg-white flex flex-col items-center p-3" style={{ border: '1px solid rgba(27,42,74,0.08)' }}>
                      <div className="relative flex items-center justify-center" style={{ height: 110, width: '100%' }}>
                        <Image src={b.img} alt={b.name} width={100} height={100} style={{ mixBlendMode: 'multiply', maxHeight: 100, width: 'auto', objectFit: 'contain' }} />
                      </div>
                      <p className="text-xs font-semibold text-center mt-2" style={{ color: '#1B2A4A' }}>{b.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl p-6 lg:p-8" style={{ background: '#fff', border: '1px solid rgba(27,42,74,0.08)', boxShadow: '0 4px 24px rgba(27,42,74,0.08)' }}>
                <h2 className="font-black text-xl mb-1" style={{ color: '#1B2A4A' }}>Register for the Free Summit</h2>
                <p className="text-sm mb-6" style={{ color: '#6B7280' }}>Reserve your spot — limited seating available.</p>
                <RegisterForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
