'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { submitToHubSpot } from '../../lib/hubspot';
import { submitToGHLLead } from '../../lib/ghl';
import SuccessModal from '../../components/SuccessModal';
import { trackEvent } from '../../lib/analytics';

const PRODUCTS = [
  { id: 'cantaloupe-g11', category: 'card', brand: 'Cantaloupe', name: 'Cantaloupe G11 Card Reader', desc: 'Cashless payment kit with cellular telemetry built in, so you get card payments and remote machine monitoring in one device.', specs: ['Tap, chip & swipe', 'Built-in telemetry', 'Cellular connected'], price: '$349', img: '/payment-products/cantaloupe-g11.png' },
  { id: 'nayax-vpos', category: 'card', brand: 'Nayax', name: 'Nayax VPOS Touch Card Reader', desc: 'Compact cashless payment terminal for vending and micro markets, supporting tap, chip, and mobile wallet payments.', specs: ['Tap, chip & mobile wallet', 'Compact design', 'Remote reporting'], price: '$349', img: '/payment-products/nayax-vpos.png' },
  { id: 'conlux-mcm5', category: 'coin', brand: 'Conlux', name: 'Conlux MCM5 Coin Mechanism', desc: 'Reliable new coin mechanism for accurate, fast coin acceptance on snack, beverage, and combo machines.', specs: ['New unit', 'MDB compatible', 'High-accuracy acceptance'], price: '$349', img: '/payment-products/conlux-mcm5.png' },
  { id: 'conlux-cv-bill', category: 'bill', brand: 'Conlux', name: 'Conlux CV Dollar Bill Acceptor', desc: 'Dependable bill acceptor built for high-traffic vending locations, keeping cash transactions fast and reliable.', specs: ['New unit', 'MDB compatible', 'High-traffic rated'], price: '$349', img: '/payment-products/conlux-cv-bill-acceptor.png' },
  { id: 'mei-vn2500', category: 'bill', brand: 'MEI', name: 'Refurbished MEI VN2500 Validator', desc: 'Fully refurbished MEI bill validator that accepts $1 and $5 bills, a cost-effective upgrade for existing machines.', specs: ['Refurbished', 'Accepts $1 & $5', 'MDB compatible'], price: '$235', img: '/payment-products/mei-vn2500.jpg', badgeRef: true },
];

const FILTERS = [
  { key: 'all', label: 'All Devices' },
  { key: 'card', label: 'Card Readers' },
  { key: 'bill', label: 'Bill Acceptors' },
  { key: 'coin', label: 'Coin Mechanisms' },
];

function getBadge(p) {
  if (p.badgeRef) return { label: 'Refurbished', bg: '#EAE0F5', color: '#5B3A8C' };
  if (p.category === 'card') return { label: 'Card Reader', bg: '#D6EEF8', color: '#1B6FA8' };
  if (p.category === 'bill') return { label: 'Bill Acceptor', bg: '#FFF3D6', color: '#B07D00' };
  return { label: 'Coin Mechanism', bg: '#D6F0DA', color: '#1e7a28' };
}

export default function PaymentSolutions() {
  const [active, setActive] = useState('all');
  const [modal, setModal] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', sms_consent: false });
  const [sent, setSent] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const filtered = PRODUCTS.filter(p => active === 'all' || p.category === active);

  function resetForm() {
    setSent(false);
    setForm({ name: '', email: '', phone: '', message: '', sms_consent: false });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (sent) return;
    const product = PRODUCTS.find(p => p.id === modal);
    const [firstname, ...rest] = form.name.trim().split(' ');
    try {
      const message = product ? `Interested in: ${product.name}\n\n${form.message}` : form.message;
      await submitToHubSpot({
        firstname,
        lastname: rest.join(' '),
        email: form.email,
        phone: form.phone,
        i_m_interested_in: 'payment-solutions',
        message,
      });
      submitToGHLLead({
        first_name: firstname,
        last_name: rest.join(' '),
        email: form.email,
        phone: form.phone,
        interest: 'payment-solutions',
        message,
      }).catch(() => {});
      setForm({ name: '', email: '', phone: '', message: '', sms_consent: false });
      setSent(true);
      setShowSuccessModal(true);
      trackEvent('generate_lead', { form_name: 'payment_solutions_quote', product_name: product?.name || '' });
    } catch {}
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 lg:py-24" style={{ background: 'linear-gradient(135deg, #1B2A4A 0%, #243560 100%)' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.04 }} aria-hidden="true">
          <svg width="100%" height="100%"><filter id="noise2"><feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter><rect width="100%" height="100%" filter="url(#noise2)" /></svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-6 flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            <span style={{ color: 'rgba(255,255,255,0.8)' }}>Payment Devices</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase mb-4" style={{ background: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.8)', letterSpacing: '0.1em' }}>Cashless &amp; Cash Ready</div>
            <h1 className="text-white font-black mb-5" style={{ fontSize: 'clamp(2rem,4.5vw,3rem)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              Payment Devices for<br />
              <span style={{ color: '#3DB54A' }}>Every Machine</span>
            </h1>
            <p className="mb-8" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: 560 }}>
              Card readers, bill acceptors, and coin mechanisms to keep your machines cashless-ready and collecting sales around the clock.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#catalog" className="inline-flex items-center gap-2 font-bold rounded-xl text-white px-6 py-3" style={{ background: 'rgba(61,181,74,0.88)', border: '1px solid rgba(255,255,255,0.28)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.35), 0 4px 16px rgba(0,0,0,0.18)' }}>
                Browse Payment Devices
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </a>
              <Link href="/#contact" className="inline-flex items-center gap-2 font-semibold rounded-xl px-6 py-3" style={{ background: 'rgba(255,255,255,0.1)', border: '1.5px solid rgba(255,255,255,0.3)', color: '#fff' }}>Free Consultation</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="py-16 lg:py-24" style={{ background: '#F4F6F8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 lg:mb-14">
            <h2 className="font-black mb-3" style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', color: '#1B2A4A', letterSpacing: '-0.03em', lineHeight: 1.15 }}>Browse Payment Devices</h2>
            <p style={{ color: '#3D4D5C', lineHeight: 1.7, maxWidth: 600 }}>Pricing shown is starting price. Click Request Info to get started.</p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {FILTERS.map(f => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className="px-5 py-2 rounded-full font-semibold text-sm transition-all"
                style={{
                  border: '2px solid',
                  borderColor: active === f.key ? '#1B2A4A' : '#e5e7eb',
                  background: active === f.key ? '#1B2A4A' : '#fff',
                  color: active === f.key ? '#fff' : '#3D4D5C',
                  cursor: 'pointer',
                }}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map(p => {
              const badge = getBadge(p);
              return (
                <div key={p.id}
                  role="button" tabIndex={0} aria-label={`Quick view ${p.name}`}
                  onClick={() => { setModal(p.id); resetForm(); }}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setModal(p.id); resetForm(); } }}
                  className="bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                  style={{ border: '1px solid rgba(27,42,74,0.07)', boxShadow: '0 1px 2px rgba(27,42,74,0.06), 0 4px 12px rgba(27,42,74,0.08)', cursor: 'pointer' }}>
                  <div className="relative" style={{ height: 200, background: '#F4F6F8' }}>
                    <Image src={p.img} alt={p.name} fill loading="lazy" sizes="(max-width: 639px) 90vw, (max-width: 1023px) 45vw, (max-width: 1279px) 30vw, 23vw" style={{ objectFit: 'contain', padding: 20, mixBlendMode: 'multiply' }} />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold uppercase rounded-full px-2.5 py-1" style={{ background: badge.bg, color: badge.color, letterSpacing: '0.06em' }}>{badge.label}</span>
                      <span className="text-xs font-bold uppercase rounded-full px-2.5 py-1" style={{ background: '#1B2A4A', color: '#fff', letterSpacing: '0.06em' }}>{p.brand}</span>
                    </div>
                    <h3 className="font-bold text-base mb-1" style={{ color: '#1B2A4A', lineHeight: 1.3 }}>{p.name}</h3>
                    <p className="text-xs mb-3" style={{ color: '#6B7280' }}>{p.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {p.specs.map(s => <span key={s} className="text-xs px-2 py-0.5 rounded-md font-medium" style={{ background: '#F4F6F8', color: '#3D4D5C' }}>{s}</span>)}
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-medium" style={{ color: '#6B7280' }}>Starting at</div>
                        <div className="font-black text-xl" style={{ color: '#1B2A4A', letterSpacing: '-0.02em' }}>{p.price}</div>
                      </div>
                      <button
                        onClick={(e) => { e.stopPropagation(); setModal(p.id); resetForm(); }}
                        className="text-xs font-bold py-2.5 px-4 rounded-xl text-white"
                        style={{ background: '#3DB54A', border: 'none', cursor: 'pointer' }}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#1B2A4A', position: 'relative', overflow: 'hidden' }} className="py-16 lg:py-20">
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs font-bold mb-4 uppercase tracking-widest" style={{ letterSpacing: '0.12em', color: '#3DB54A' }}>Not Sure Which Device?</div>
          <h2 className="font-black text-white mb-5" style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', letterSpacing: '-0.03em', lineHeight: 1.15 }}>Let an expert help you choose.</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, marginBottom: '2rem' }}>We&apos;ll match you with the right payment device for your machines. No pressure, no obligation.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/#contact" className="inline-flex items-center gap-2 font-bold rounded-xl text-white px-7 py-3.5" style={{ background: 'rgba(61,181,74,0.88)', border: '1px solid rgba(255,255,255,0.28)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.35), 0 4px 16px rgba(0,0,0,0.18)' }}>Get a Free Consultation</Link>
            <a href="tel:4132823776" className="inline-flex items-center gap-2 font-semibold text-sm" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', padding: '14px 0' }}>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
              (413) 282-3776
            </a>
          </div>
        </div>
      </section>

      {/* Quick View Modal */}
      {modal && (() => {
        const p = PRODUCTS.find(x => x.id === modal);
        const badge = p ? getBadge(p) : null;
        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(27,42,74,0.55)' }} onClick={() => setModal(null)}>
            <div className="bg-white rounded-2xl overflow-hidden w-full" style={{ maxWidth: 880, maxHeight: '90vh', overflowY: 'auto' }} onClick={e => e.stopPropagation()}>
              <div className="flex items-start justify-between p-6 lg:p-8 border-b border-gray-100">
                <div>
                  {badge && <span className="inline-block text-xs font-bold uppercase rounded-md px-2 py-1 mb-2" style={{ background: badge.bg, color: badge.color, letterSpacing: '0.08em' }}>{badge.label}</span>}
                  <h2 className="font-black text-2xl" style={{ color: '#1B2A4A', letterSpacing: '-0.03em' }}>{p?.name}</h2>
                  <div className="text-sm mt-1" style={{ color: '#6B7280' }}>{p?.brand}</div>
                </div>
                <button onClick={() => setModal(null)} aria-label="Close" className="flex-shrink-0 ml-4 w-11 h-11 rounded-full flex items-center justify-center transition-colors duration-200" style={{ background: '#F4F6F8', border: 'none', cursor: 'pointer' }}>
                  <svg className="w-5 h-5" fill="none" stroke="#3D4D5C" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>

              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative flex items-center justify-center p-8" style={{ background: '#F4F6F8', minHeight: 260 }}>
                  {p && <img src={p.img} alt={p.name} style={{ maxHeight: 288, width: 'auto', objectFit: 'contain', mixBlendMode: 'multiply' }} />}
                </div>

                <div className="p-6 lg:p-8">
                  <div className="mb-6">
                    <div className="text-xs font-medium mb-1" style={{ color: '#6B7280' }}>Starting Price</div>
                    <div className="font-black text-3xl" style={{ color: '#1B2A4A', letterSpacing: '-0.03em' }}>{p?.price}</div>
                  </div>
                  <div className="mb-6">
                    <div className="font-semibold text-sm mb-3" style={{ color: '#1B2A4A' }}>Key Specifications</div>
                    <ul className="space-y-2">
                      {p?.specs.map((s) => (
                        <li key={s} className="flex items-start gap-2 text-sm" style={{ color: '#3D4D5C' }}>
                          <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#3DB54A' }} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-6">
                    <div className="font-semibold text-sm mb-3" style={{ color: '#1B2A4A' }}>Overview</div>
                    <p className="text-sm" style={{ color: '#3D4D5C', lineHeight: 1.7 }}>{p?.desc}</p>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    {sent ? (
                      <div className="text-center py-6">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: '#D6F0DA' }}>
                          <svg className="w-6 h-6" fill="none" stroke="#3DB54A" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <h3 className="font-black text-lg mb-1" style={{ color: '#1B2A4A' }}>Message Sent!</h3>
                        <p className="text-sm" style={{ color: '#6B7280' }}>We&apos;ll be in touch shortly about the {p?.name}.</p>
                      </div>
                    ) : (
                      <>
                        <div className="font-semibold text-sm mb-3" style={{ color: '#1B2A4A' }}>Get a Quote for This Device</div>
                        <form onSubmit={handleSubmit} className="space-y-3">
                          {[['name', 'Your Name', 'text'], ['email', 'Email Address', 'email'], ['phone', 'Phone (optional)', 'tel']].map(([field, placeholder, type]) => (
                            <input key={field} type={type} placeholder={placeholder} required={field !== 'phone'} value={form[field]} onChange={e => setForm(f => ({ ...f, [field]: e.target.value }))}
                              className="w-full px-4 py-3 rounded-xl text-sm" style={{ border: '1.5px solid #e5e7eb', outline: 'none', color: '#1B2A4A' }} />
                          ))}
                          <textarea placeholder="Any questions or special requirements?" rows={3} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                            className="w-full px-4 py-3 rounded-xl text-sm resize-none" style={{ border: '1.5px solid #e5e7eb', outline: 'none', color: '#1B2A4A' }} />
                          <div className="flex items-start gap-2">
                            <input id={`sms-consent-${p?.id}`} type="checkbox" checked={form.sms_consent} onChange={e => setForm(f => ({ ...f, sms_consent: e.target.checked }))}
                              className="mt-0.5 flex-shrink-0" style={{ width: 15, height: 15, accentColor: '#3DB54A' }} />
                            <label htmlFor={`sms-consent-${p?.id}`} className="text-xs" style={{ color: '#6B7280', lineHeight: 1.5 }}>
                              I consent to receive marketing and promotional SMS messages from Vital Vending Sales LLC at the phone number provided. Message frequency may vary. Message &amp; Data rates may apply. Reply HELP for help or STOP to opt-out. <a href="/terms-of-service" className="underline" style={{ color: '#3DB54A' }}>Terms</a> &amp; <a href="/privacy-policy" className="underline" style={{ color: '#3DB54A' }}>Privacy Policy</a>
                            </label>
                          </div>
                          <button type="submit" className="w-full font-bold py-3 rounded-xl text-white" style={{ background: 'rgba(61,181,74,0.9)', border: 'none', cursor: 'pointer' }}>Send Message</button>
                        </form>
                        <a href="tel:4132823776" className="flex items-center justify-center gap-2 font-semibold rounded-xl px-6 py-3 text-sm w-full mt-3" style={{ color: '#1B2A4A', background: '#F4F6F8', textDecoration: 'none' }}>
                          Call (413) 282-3776
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })()}
      <SuccessModal open={showSuccessModal} onClose={() => setShowSuccessModal(false)} />
    </>
  );
}
