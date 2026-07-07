'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { submitToHubSpot } from '../../lib/hubspot';

const MACHINES = [
  { id: 'evoke6', category: 'snack', brand: 'USI', name: 'USI Evoke 6', desc: 'Largest capacity snack machine for high-volume locations', specs: ['733 items', '83 selections', 'ADA compliant'], price: '$6,316', img: '/static-assets/vvs_product_catalog/images/usi-evoke-6-snack-vending-machine-2.jpg' },
  { id: 'evoke5', category: 'snack', brand: 'USI', name: 'USI Evoke 5', desc: 'Versatile snack machine ideal for mid-size accounts', specs: ['5 Flex Shelves', 'iCart optional', 'ADA compliant'], price: '$6,070', img: '/static-assets/vvs_product_catalog/images/usi-evoke-5-snack-vending-machine-2.jpg' },
  { id: 'mercato5000', category: 'snack', brand: 'USI', name: 'USI Mercato 5000', desc: 'High-volume glass-front snack machine, most selections', specs: ['528 items', '65 selections', 'Glass front'], price: '$5,821', img: '/static-assets/vvs_product_catalog/images/usi-mercato-5000-snack-vending-machine-2.jpg' },
  { id: 'mercato4000', category: 'snack', brand: 'USI', name: 'USI Mercato 4000', desc: 'Reliable mid-range snack machine, MDB payment ready', specs: ['360 items', '36 selections', 'MDB compatible'], price: '$5,631', img: '/static-assets/vvs_product_catalog/images/usi-mercato-4000-snack-vending-machine-2.jpg' },
  { id: 'mercato3000', category: 'snack', brand: 'USI', name: 'USI Mercato 3000', desc: 'Best value for space-conscious operators, small footprint', specs: ['360 items', '36 selections', 'Compact'], price: '$5,072', img: '/static-assets/vvs_product_catalog/images/usi-mercato-3000-snack-vending-machine-2.jpg' },
  { id: 'ams39', category: 'snack', brand: 'AMS', name: 'AMS 39 Snack Machine', desc: 'AMS workhorse, built for simplicity and dependability', specs: ['5-wide', 'Dual config', 'Proven reliability'], price: '$4,330', img: '/static-assets/vvs_product_catalog/images/ams-39-snack-vending-machine-2.jpg' },
  { id: 'ams35', category: 'snack', brand: 'AMS', name: 'AMS 35 Snack Machine', desc: 'Compact 4-wide AMS machine for smaller footprint locations', specs: ['4-wide', '72"H x 35"W', 'Compact'], price: '$4,055', img: '/static-assets/vvs_product_catalog/images/ams-35-snack-vending-machine-2.jpg' },
  { id: 'slimgem', category: 'snack', brand: 'AMS', name: 'AMS Slim Gem', desc: 'Ultra-slim design for tight spaces, Sensit delivery system', specs: ['28.5" wide', 'Dual spirals', 'Sensit delivery'], price: '$3,490', img: '/static-assets/vvs_product_catalog/images/ams-slim-gem-snack-vending-machine-2.jpg' },
  { id: 'evokelift', category: 'combo', brand: 'USI', name: 'Evoke Elevator Food & Beverage', desc: 'Soft-elevator delivery for fresh food and fragile items', specs: ['60 selections', 'Soft elevator', 'FIFO loading'], price: '$10,929', img: '/static-assets/vvs_product_catalog/images/evoke-elevator-food-beverage-vending-machine-2.jpg', badgeCombo: true },
  { id: 'evokecombo', category: 'combo', brand: 'USI', name: 'USI Evoke ST5 Combo', desc: 'Eye-catching state-of-the-art combo, lowest cost of ownership', specs: ['Snack + cold drink', 'Refrigerated', 'ADA compliant'], price: '$8,378', img: '/static-assets/vvs_product_catalog/images/usi-evoke-st5-combo-vending-machine-2.jpg', badgeCombo: true },
  { id: 'ams39combo', category: 'combo', brand: 'AMS', name: 'AMS 39 Combo Machine', desc: 'Ideal for smaller locations and cost-conscious operators', specs: ['Snack + drink', 'Rugged build', 'Cost-effective'], price: '$5,999', img: '/static-assets/vvs_product_catalog/images/ams-39-combo-vending-machine-2.jpg', badgeCombo: true },
  { id: 'alpinecombi3000', category: 'combo', brand: 'Alpine', name: 'Alpine Combi 3000', desc: 'Frozen food and beverage combo — expand your revenue per location', specs: ['Frozen + drinks', 'Combo unit', 'High margin'], price: '$11,661', img: '/static-assets/vvs_product_catalog/images/alpine-combi-3000-1.png', badgeCombo: true },
  { id: 'evoke10drink', category: 'beverage', brand: 'USI', name: 'USI Evoke 10 Drink', desc: 'High-capacity cold drink machine for cans and bottles', specs: ['10 selections', 'Refrigerated', 'High volume'], price: '$6,114', img: '/static-assets/vvs_product_catalog/images/evoke-10-drink-1.png', badgeBev: true },
  { id: 'dixie501e', category: 'beverage', brand: 'Dixie Narco', name: 'Dixie Narco 501E', desc: 'The workhorse of the vending world, legendary reliability', specs: ['72"H x 37"W', 'Cans & bottles', 'Easy service'], price: '$2,099', img: '/static-assets/vvs_product_catalog/images/dixie-narco-501e-2.jpg', badgeBev: true },
  { id: 'coolblu', category: 'beverage', brand: 'CoolBlu', name: 'CoolBlu Cooler', desc: 'High-capacity refrigerated cooler for fresh food and cold drinks', specs: ['High capacity', 'Fresh food ready', 'Cashless pay'], price: '$2,499', img: '/static-assets/vvs_product_catalog/images/coolblu-coolers-2.jpg', badgeBev: true },
  { id: 'evokecoffee', category: 'coffee', brand: 'USI', name: 'Evoke Coffee Machine', desc: 'Full ADA-compliant coffee vending with LED lighting', specs: ['ADA compliant', 'LED lighting', 'iVend sensor'], price: '$8,379', img: '/static-assets/vvs_product_catalog/images/evoke-coffee-machine-2.jpg', badgeCoffee: true },
  { id: 'ap123', category: 'refurbished', brand: 'AP / InOne', name: 'AP 123 Snack + InOne Controller', desc: 'Fully refurbished AP 123 with upgraded InOne control board', specs: ['Refurbished', 'InOne controller', 'Updated electronics'], price: 'Call for Price', img: '/static-assets/vvs_product_catalog/images/ap-123-snack-vending-machine-inone-upgrade-controller-2.jpg', badgeRef: true },
];

const FILTERS = [
  { key: 'all', label: 'All Machines' },
  { key: 'snack', label: 'Snack Machines' },
  { key: 'combo', label: 'Combo Machines' },
  { key: 'beverage', label: 'Beverage Machines' },
  { key: 'coffee', label: 'Coffee Machines' },
  { key: 'refurbished', label: 'Used & Refurbished' },
];

function getBadge(m) {
  if (m.badgeCombo) return { label: 'Combo', bg: '#FFF3D6', color: '#B07D00' };
  if (m.badgeBev) return { label: 'Beverage', bg: '#D6EEF8', color: '#1B6FA8' };
  if (m.badgeCoffee) return { label: 'Coffee', bg: '#F3EAD6', color: '#7B4F1C' };
  if (m.badgeRef) return { label: 'Refurbished', bg: '#EAE0F5', color: '#5B3A8C' };
  return { label: 'Snack', bg: '#D6F0DA', color: '#1e7a28' };
}

export default function VendingMachines() {
  const [active, setActive] = useState('all');
  const [modal, setModal] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const filtered = active === 'all' ? MACHINES : MACHINES.filter(m => m.category === active);

  async function handleSubmit(e) {
    e.preventDefault();
    const machine = MACHINES.find(m => m.id === modal);
    const [firstname, ...rest] = form.name.trim().split(' ');
    try {
      await submitToHubSpot({
        firstname,
        lastname: rest.join(' '),
        email: form.email,
        phone: form.phone,
        i_m_interested_in: 'vending-new',
        message: machine ? `Interested in: ${machine.name}\n\n${form.message}` : form.message,
      });
      setSent(true);
    } catch {}
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 lg:py-24" style={{ background: 'linear-gradient(135deg, #1B2A4A 0%, #243560 100%)' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.04 }} aria-hidden="true">
          <svg width="100%" height="100%"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter><rect width="100%" height="100%" filter="url(#noise)" /></svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-6 flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            <span style={{ color: 'rgba(255,255,255,0.8)' }}>Vending Machines</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase mb-4" style={{ background: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.8)', letterSpacing: '0.1em' }}>Northeast Supplier</div>
            <h1 className="text-white font-black mb-5" style={{ fontSize: 'clamp(2rem,4.5vw,3rem)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              Vending Machines for Sale<br />
              <span style={{ color: '#3DB54A' }}>in the Northeast</span>
            </h1>
            <p className="mb-8" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: 560 }}>
              New, used, and refurbished snack, combo, and beverage vending machines from top brands like USI and AMS. We serve entrepreneurs and businesses across Massachusetts, Connecticut, Rhode Island, and beyond.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#catalog" className="inline-flex items-center gap-2 font-bold rounded-xl text-white px-6 py-3" style={{ background: 'rgba(61,181,74,0.88)', border: '1px solid rgba(255,255,255,0.28)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.35), 0 4px 16px rgba(0,0,0,0.18)' }}>
                Browse All Machines
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </a>
              <Link href="/#contact" className="inline-flex items-center gap-2 font-semibold rounded-xl px-6 py-3" style={{ background: 'rgba(255,255,255,0.1)', border: '1.5px solid rgba(255,255,255,0.3)', color: '#fff' }}>Free Consultation</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10 text-sm font-medium" style={{ color: '#3D4D5C' }}>
            {['New, Used & Refurbished', 'Serving the Northeast', '15+ Years Experience', 'Free Expert Consultation', 'Top Brands In Stock'].map(item => (
              <div key={item} className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#3DB54A' }}><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Catalog */}
      <section id="catalog" className="py-16 lg:py-24" style={{ background: '#F4F6F8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 lg:mb-14">
            <h2 className="font-black mb-3" style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', color: '#1B2A4A', letterSpacing: '-0.03em', lineHeight: 1.15 }}>Browse Our Machine Catalog</h2>
            <p style={{ color: '#3D4D5C', lineHeight: 1.7, maxWidth: 600 }}>All machines are new, sourced from industry-leading manufacturers. Pricing shown is starting MSRP. Click Request Info to get started.</p>
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
            {filtered.map(m => {
              const badge = getBadge(m);
              return (
                <div key={m.id}
                  role="button" tabIndex={0} aria-label={`Quick view ${m.name}`}
                  onClick={() => { setModal(m.id); setSent(false); setForm({ name: '', email: '', phone: '', message: '' }); }}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setModal(m.id); setSent(false); setForm({ name: '', email: '', phone: '', message: '' }); } }}
                  className="bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                  style={{ border: '1px solid rgba(27,42,74,0.07)', boxShadow: '0 1px 2px rgba(27,42,74,0.06), 0 4px 12px rgba(27,42,74,0.08)', cursor: 'pointer' }}>
                  <div className="flex items-center justify-center" style={{ height: 200, background: '#F4F6F8' }}>
                    <img src={m.img} alt={m.name} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '12px', mixBlendMode: 'multiply' }} />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold uppercase rounded-full px-2.5 py-1" style={{ background: badge.bg, color: badge.color, letterSpacing: '0.06em' }}>{badge.label}</span>
                      <span className="text-xs font-bold uppercase rounded-full px-2.5 py-1" style={{ background: '#1B2A4A', color: '#fff', letterSpacing: '0.06em' }}>{m.brand}</span>
                    </div>
                    <h3 className="font-bold text-base mb-1" style={{ color: '#1B2A4A', lineHeight: 1.3 }}>{m.name}</h3>
                    <p className="text-xs mb-3" style={{ color: '#6B7280' }}>{m.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {m.specs.map(s => <span key={s} className="text-xs px-2 py-0.5 rounded-md font-medium" style={{ background: '#F4F6F8', color: '#3D4D5C' }}>{s}</span>)}
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-medium" style={{ color: '#6B7280' }}>Starting at</div>
                        <div className="font-black text-xl" style={{ color: '#1B2A4A', letterSpacing: '-0.02em' }}>{m.price}</div>
                      </div>
                      <button
                        onClick={(e) => { e.stopPropagation(); setModal(m.id); setSent(false); setForm({ name: '', email: '', phone: '', message: '' }); }}
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

      {/* Why VVS */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="inline-block text-xs font-bold uppercase px-3 py-1 mb-4" style={{ background: '#D6F0DA', color: '#3DB54A', borderRadius: 4, letterSpacing: '0.08em' }}>Why Choose VVS</div>
              <h2 className="font-black mb-5" style={{ fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', color: '#1B2A4A', letterSpacing: '-0.03em', lineHeight: 1.1 }}>The Right Machine for Your Business, Every Time</h2>
              <p className="mb-8" style={{ color: '#3D4D5C', lineHeight: 1.7 }}>Buying a vending machine is a long-term investment. At Vital Vending Sales, we help you choose the right equipment for your specific location, product mix, and revenue goals. We have 15 years of experience in the Northeast vending market, and we back every machine sale with expert support.</p>
              <ul className="space-y-4">
                {[
                  { title: 'Expert Equipment Matching', desc: 'We assess your location, traffic, and goals before recommending a machine.' },
                  { title: 'New, Used & Refurbished Equipment', desc: 'We carry new machines from USI, AMS, Summit, and other top manufacturers, plus quality used and refurbished options.' },
                  { title: 'Northeast Delivery and Setup', desc: 'We deliver and set up equipment across MA, CT, RI, NH, VT, ME, and NY.' },
                  { title: 'Ongoing Service and Support', desc: 'Parts, service, and technical support so your machines stay profitable long-term.' },
                ].map(item => (
                  <li key={item.title} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5" style={{ background: '#D6F0DA' }}>
                      <svg className="w-3.5 h-3.5" style={{ color: '#3DB54A' }} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </div>
                    <div>
                      <div className="font-semibold text-sm" style={{ color: '#1B2A4A' }}>{item.title}</div>
                      <div className="text-sm mt-0.5" style={{ color: '#3D4D5C', lineHeight: 1.6 }}>{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: '4/5', background: '#F4F6F8', boxShadow: '0 1px 2px rgba(27,42,74,0.06), 0 4px 12px rgba(27,42,74,0.08), 0 16px 32px rgba(27,42,74,0.06)' }}>
                <img src="/static-assets/VVSworkpic1.jpg" alt="Vital Vending Sales team" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture */}
      <section style={{ background: '#1B2A4A' }} className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="inline-flex px-3 py-1.5 rounded text-xs font-bold uppercase tracking-widest mb-4" style={{ background: 'rgba(61,181,74,0.25)', border: '1px solid rgba(61,181,74,0.4)', color: '#fff', borderRadius: 4 }}>Free Consultation</div>
              <h2 className="font-black text-white mb-5" style={{ fontSize: 'clamp(1.8rem,3vw,2.5rem)', letterSpacing: '-0.03em', lineHeight: 1.15 }}>Ready to Put the Right Machine in Your Location?</h2>
              <p className="mb-8 text-base" style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>Our team will walk you through which machine fits your location, traffic, and revenue goals. No pressure, no obligation.</p>
              <ul className="space-y-4">
                {['Free, no-obligation equipment assessment', 'We respond within one business day', '15+ years placing machines in the Northeast'].map(t => (
                  <li key={t} className="flex items-center gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>
                    <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#3DB54A' }} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <a href="tel:4132823776" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm" style={{ border: '1.5px solid rgba(255,255,255,0.32)', color: '#fff' }}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                  (413) 282-3776
                </a>
              </div>
            </div>
            <div className="rounded-2xl p-8 lg:p-10 bg-white" style={{ boxShadow: '0 8px 48px rgba(0,0,0,0.25)' }}>
              <h3 className="font-black text-xl mb-1" style={{ color: '#1B2A4A', letterSpacing: '-0.02em' }}>Request Equipment Info</h3>
              <p className="text-sm mb-6" style={{ color: '#3D4D5C', lineHeight: 1.6 }}>Tell us about your location and we&apos;ll recommend the right machine. No obligation.</p>
              <VendingMachineForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block text-xs font-bold uppercase px-3 py-1 mb-4" style={{ background: '#D6F0DA', color: '#3DB54A', borderRadius: 4, letterSpacing: '0.08em' }}>FAQ</div>
            <h2 className="font-black" style={{ fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', color: '#1B2A4A', letterSpacing: '-0.03em', lineHeight: 1.1 }}>Common Questions About Buying Vending Machines</h2>
          </div>
          <div>
            {[
              { q: 'How much does a vending machine cost?', a: 'New vending machines from Vital Vending Sales range from $3,490 for a compact snack machine (AMS Slim Gem) up to $8,378 for a full combo unit (USI Evoke ST5). We also carry used and fully refurbished machines at lower price points for operators focused on faster ROI. Pricing depends on capacity, brand, and configuration. Contact us for current availability and accurate pricing.' },
              { q: 'Do you deliver and install vending machines in Massachusetts?', a: 'Yes. Vital Vending Sales is based in Ludlow, MA and provides delivery and setup across Massachusetts and the broader Northeast, including Connecticut, Rhode Island, New Hampshire, Vermont, Maine, and New York.' },
              { q: 'What brands of vending machines do you carry?', a: 'We carry new machines from USI (Evoke and Mercato lines), AMS (AMS 35, AMS 39, Slim Gem), and Alpine Combi 3000, USI Evoke 10 Drink. We also offer quality used and fully refurbished equipment for operators who want faster ROI or a lower upfront investment. Contact us to see what\'s currently available.' },
              { q: 'How do I buy a vending machine from Vital Vending Sales?', a: 'Equipment purchases are handled through a personalized consultation. Click "Request Info" on any machine above, or call us at (413) 282-3776. We will walk you through specs, pricing, and availability, and help you find the best machine for your location.' },
              { q: 'What is the difference between a snack machine, a combo machine, and a beverage machine?', a: 'Snack machines hold packaged snacks and non-perishables in ambient temperature. Beverage machines are refrigerated and designed for cans and bottles. Combo machines combine both snack and cold drink capabilities in a single unit, which is great for locations where space is limited but you want variety.' },
              { q: 'Do you offer financing or leasing for vending machines?', a: 'We can discuss financing options during your consultation. Reach out to us at (413) 282-3776 or info@vitalvendingsales.com to learn what options are available for your purchase.' },
            ].map((faq, i) => <VMFaqItem key={i} {...faq} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#1B2A4A', position: 'relative', overflow: 'hidden' }} className="py-16 lg:py-20">
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs font-bold mb-4 uppercase tracking-widest" style={{ letterSpacing: '0.12em', color: '#3DB54A' }}>Not Sure Which Machine?</div>
          <h2 className="font-black text-white mb-5" style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', letterSpacing: '-0.03em', lineHeight: 1.15 }}>Let an expert help you choose.</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, marginBottom: '2rem' }}>We&apos;ll match you with the right machine for your location, budget, and goals. No pressure, no obligation.</p>
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
        const m = MACHINES.find(x => x.id === modal);
        const badge = m ? getBadge(m) : null;
        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(27,42,74,0.55)' }} onClick={() => setModal(null)}>
            <div className="bg-white rounded-2xl overflow-hidden w-full" style={{ maxWidth: 880, maxHeight: '90vh', overflowY: 'auto' }} onClick={e => e.stopPropagation()}>
              <div className="flex items-start justify-between p-6 lg:p-8 border-b border-gray-100">
                <div>
                  {badge && <span className="inline-block text-xs font-bold uppercase rounded-md px-2 py-1 mb-2" style={{ background: badge.bg, color: badge.color, letterSpacing: '0.08em' }}>{badge.label}</span>}
                  <h2 className="font-black text-2xl" style={{ color: '#1B2A4A', letterSpacing: '-0.03em' }}>{m?.name}</h2>
                  <div className="text-sm mt-1" style={{ color: '#6B7280' }}>{m?.brand}</div>
                </div>
                <button onClick={() => setModal(null)} aria-label="Close" className="flex-shrink-0 ml-4 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200" style={{ background: '#F4F6F8', border: 'none', cursor: 'pointer' }}>
                  <svg className="w-5 h-5" fill="none" stroke="#3D4D5C" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>

              <div className="grid lg:grid-cols-2 gap-0">
                <div className="flex items-center justify-center p-8" style={{ background: '#F4F6F8', minHeight: 260 }}>
                  {m && <img src={m.img} alt={m.name} style={{ maxHeight: 288, width: 'auto', objectFit: 'contain', mixBlendMode: 'multiply' }} />}
                </div>

                <div className="p-6 lg:p-8">
                  <div className="mb-6">
                    <div className="text-xs font-medium mb-1" style={{ color: '#6B7280' }}>Starting Price</div>
                    <div className="font-black text-3xl" style={{ color: '#1B2A4A', letterSpacing: '-0.03em' }}>{m?.price}</div>
                  </div>
                  <div className="mb-6">
                    <div className="font-semibold text-sm mb-3" style={{ color: '#1B2A4A' }}>Key Specifications</div>
                    <ul className="space-y-2">
                      {m?.specs.map((s) => (
                        <li key={s} className="flex items-start gap-2 text-sm" style={{ color: '#3D4D5C' }}>
                          <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#3DB54A' }} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-6">
                    <div className="font-semibold text-sm mb-3" style={{ color: '#1B2A4A' }}>Overview</div>
                    <p className="text-sm" style={{ color: '#3D4D5C', lineHeight: 1.7 }}>{m?.desc}</p>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    {sent ? (
                      <div className="text-center py-6">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: '#D6F0DA' }}>
                          <svg className="w-6 h-6" fill="none" stroke="#3DB54A" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <h3 className="font-black text-lg mb-1" style={{ color: '#1B2A4A' }}>Message Sent!</h3>
                        <p className="text-sm" style={{ color: '#6B7280' }}>We&apos;ll be in touch shortly about the {m?.name}.</p>
                      </div>
                    ) : (
                      <>
                        <div className="font-semibold text-sm mb-3" style={{ color: '#1B2A4A' }}>Get a Quote for This Unit</div>
                        <form onSubmit={handleSubmit} className="space-y-3">
                          {[['name', 'Your Name', 'text'], ['email', 'Email Address', 'email'], ['phone', 'Phone (optional)', 'tel']].map(([field, placeholder, type]) => (
                            <input key={field} type={type} placeholder={placeholder} required={field !== 'phone'} value={form[field]} onChange={e => setForm(f => ({ ...f, [field]: e.target.value }))}
                              className="w-full px-4 py-3 rounded-xl text-sm" style={{ border: '1.5px solid #e5e7eb', outline: 'none', color: '#1B2A4A' }} />
                          ))}
                          <textarea placeholder="Any questions or special requirements?" rows={3} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                            className="w-full px-4 py-3 rounded-xl text-sm resize-none" style={{ border: '1.5px solid #e5e7eb', outline: 'none', color: '#1B2A4A' }} />
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
    </>
  );
}

function VMFaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid rgba(27,42,74,0.08)' }}>
      <button onClick={() => setOpen(!open)} className="w-full text-left py-5 flex items-center justify-between gap-4 font-semibold text-sm" style={{ color: '#1B2A4A', background: 'none', border: 'none', cursor: 'pointer' }}>
        {q}
        <svg className="flex-shrink-0 w-5 h-5" style={{ color: '#6B7280', transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
      </button>
      {open && <div className="pb-5 text-sm" style={{ color: '#3D4D5C', lineHeight: 1.7 }}>{a}</div>}
    </div>
  );
}

function VendingMachineForm() {
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState({ first_name: '', last_name: '', email: '', phone: '', message: '' });
  const inputCls = 'w-full px-4 py-3 rounded-lg border text-sm focus:outline-none';
  const inputStyle = { borderColor: '#e5e7eb', color: '#1B2A4A' };

  if (submitted) return (
    <div className="text-center py-6">
      <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: '#D6F0DA' }}>
        <svg className="w-6 h-6" style={{ color: '#3DB54A' }} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
      </div>
      <div className="font-bold text-xl mb-1" style={{ color: '#1B2A4A' }}>Request Sent!</div>
      <div className="text-sm" style={{ color: '#6B7280' }}>We&apos;ll be in touch within 1 business day.</div>
    </div>
  );

  async function handleSubmit(e) {
    e.preventDefault();
    await submitToHubSpot({
      firstname: data.first_name,
      lastname: data.last_name,
      email: data.email,
      phone: data.phone,
      i_m_interested_in: 'vending-new',
      message: data.message,
    });
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div><label className="block text-xs font-semibold uppercase tracking-wide mb-1.5" style={{ color: '#1B2A4A' }}>First Name</label><input type="text" required placeholder="John" value={data.first_name} onChange={e => setData(p => ({ ...p, first_name: e.target.value }))} className={inputCls} style={inputStyle} /></div>
        <div><label className="block text-xs font-semibold uppercase tracking-wide mb-1.5" style={{ color: '#1B2A4A' }}>Last Name</label><input type="text" required placeholder="Smith" value={data.last_name} onChange={e => setData(p => ({ ...p, last_name: e.target.value }))} className={inputCls} style={inputStyle} /></div>
      </div>
      <div><label className="block text-xs font-semibold uppercase tracking-wide mb-1.5" style={{ color: '#1B2A4A' }}>Email Address</label><input type="email" required placeholder="john@example.com" value={data.email} onChange={e => setData(p => ({ ...p, email: e.target.value }))} className={inputCls} style={inputStyle} /></div>
      <div><label className="block text-xs font-semibold uppercase tracking-wide mb-1.5" style={{ color: '#1B2A4A' }}>Phone Number</label><input type="tel" placeholder="(413) 555-0100" value={data.phone} onChange={e => setData(p => ({ ...p, phone: e.target.value }))} className={inputCls} style={inputStyle} /></div>
      <div><label className="block text-xs font-semibold uppercase tracking-wide mb-1.5" style={{ color: '#1B2A4A' }}>Tell Us About Your Location</label><textarea rows={3} placeholder="E.g. office of 80 people, looking for a snack and beverage combo..." value={data.message} onChange={e => setData(p => ({ ...p, message: e.target.value }))} className={inputCls} style={{ ...inputStyle, resize: 'none' }} /></div>
      <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-base text-white" style={{ background: '#3DB54A' }}>
        Send My Request
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
      </button>
      <p className="text-xs text-center" style={{ color: '#6B7280' }}>We respond within one business day. No spam, ever.</p>
    </form>
  );
}
