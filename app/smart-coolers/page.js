'use client';

import { useState } from 'react';
import Link from 'next/link';
import { submitToHubSpot } from '../../lib/hubspot';

const HAHA_PRODUCTS = [
  { href: '/smart-coolers/haha-mini', img: '/static-assets/MoreVendingMachinesandContent/Mini Details.png', name: 'HAHA Mini', model: 'US360C', tagline: 'Compact and capable — perfect for tighter spaces', specs: ['252 bottles', '6 shelves', 'AI recognition'], price: '$2,999', badge: 'AI Smart Cooler', badgeStyle: {} },
  { href: '/smart-coolers/haha-plus', img: '/static-assets/MoreVendingMachinesandContent/Pus 440 Details.png', name: 'HAHA Plus', model: 'US440CT', tagline: 'Mid-size powerhouse with room to grow', specs: ['324 bottles', '6 shelves', 'AI recognition'], price: '$3,399', badge: 'AI Smart Cooler', badgeStyle: {} },
  { href: '/smart-coolers/haha-pro', img: '/static-assets/MoreVendingMachinesandContent/Pro Details.png', name: 'HAHA Pro', model: 'US542CT', tagline: 'Full-size AI cooler, avg $4.55 per transaction', specs: ['378 bottles', '6 shelves', 'AI recognition'], price: '$4,399', badge: 'AI Smart Cooler', badgeStyle: {} },
  { href: '/smart-coolers/haha-freezer', img: '/static-assets/MoreVendingMachinesandContent/Freezer 550 Details.png', name: 'HAHA Freezer', model: 'US550FT', tagline: 'Frozen and fresh — same smart AI platform', specs: ['384 capacity', '6 shelves', 'Freezer ready'], price: '$4,799', badge: 'AI Freezer', badgeStyle: { background: '#E0F0FF', color: '#0B5FA0' } },
  { href: '/smart-coolers/haha-max-620', img: '/static-assets/MoreVendingMachinesandContent/Max 620 Details.png', name: 'HAHA Max 620', model: '', tagline: 'Maximum capacity for busy locations', specs: ['420 bottles', '6 shelves', 'AI recognition'], price: '$4,799', badge: 'AI Smart Cooler', badgeStyle: {} },
  { href: '/smart-coolers/haha-max-660', img: '/static-assets/MoreVendingMachinesandContent/Max 620s Details.png', name: 'HAHA Max 660', model: '', tagline: 'Advertise, engage, and sell — all from one unit', specs: ['420 bottles', 'Digital screen', 'AI recognition'], price: '$4,999', badge: 'AI Smart Cooler', badgeStyle: {} },
  { href: '/smart-coolers/haha-ultra-double-door', img: '/static-assets/MoreVendingMachinesandContent/Double Door Details.png', name: 'HAHA Ultra Double Door', model: 'US1200CT', tagline: 'Double capacity for the highest-volume locations', specs: ['756 bottles', '12 shelves', 'Dual door'], price: '$6,999', badge: 'Double Door', badgeStyle: { background: '#F0E8FD', color: '#5B0FA8' }, wide: true },
];

const USI_PRODUCTS = [
  { id: 'spectraLaunch', img: '/static-assets/vvs_product_catalog/images/spectra-launch-1.png', name: 'Spectra Launch', part: '#36730001', tagline: 'Entry-level TrueAI™ smart cooler with 6 customizable shelves', specs: ['TrueAI™ vision', '6 shelves', 'Cassette fridge'], price: '$4,995', badge: '3-Year Warranty', badgeStyle: { background: '#D6F0DA', color: '#1a6b2a' } },
  { id: 'spectraCore', img: '/static-assets/vvs_product_catalog/images/spectra-core-1.png', name: 'Spectra Core', part: '#36710001', tagline: 'Black interior, 30" ad screen, snack & beverage organizers', specs: ['TrueAI™ vision', '30" screen', 'Cashless pay'], price: '$5,495', badge: '5-Year Warranty', badgeStyle: { background: '#D6F0DA', color: '#1a6b2a' } },
  { id: 'spectraPro', img: '/static-assets/vvs_product_catalog/images/spectra-pro-2.webp', name: 'Spectra Pro', part: '#36720003', tagline: '30" ad screen, LED door handle, GPS asset tracking', specs: ['TrueAI™ vision', '30" screen', 'LED handle'], price: '$6,495', badge: '5-Year Warranty', badgeStyle: { background: '#D6F0DA', color: '#1a6b2a' } },
  { id: 'spectraElevate', img: '/static-assets/vvs_product_catalog/images/spectra-elevate-1.webp', name: 'Spectra Elevate', part: '#36700001', tagline: 'GPS tracking, loyalty program, real-time theft alerts, USA-made', specs: ['TrueAI™ vision', 'GPS tracking', 'Loyalty rewards'], price: '$7,995', badge: '7-Year Warranty', badgeStyle: { background: '#3DB54A', color: '#fff' } },
];

const MODAL_DATA = {
  spectraLaunch: {
    name: 'USI Spectra Launch Smart Cooler', brand: 'USI — Spectra Series', category: 'AI Smart Cooler', price: '$4,995',
    img: '/static-assets/vvs_product_catalog/images/spectra-launch-1.png', images: [],
    specs: ['Part Number: 36730001', 'Warranty: 3 Years', 'Technology: TrueAI™ computer vision product recognition', 'Shelves: 6 customizable shelves with product pushers', 'Interior: White interior', 'Refrigeration: Cassette-style removable refrigeration', 'Payment: Cashless — WeVend or Cantaloupe', 'Connectivity: Cloud-based remote monitoring (VMS)', 'Support: Lifetime 24/7 U.S.-based support', 'Lock: NAMA-compliant smart lock'],
    features: 'The Spectra Launch is USI\'s entry-level TrueAI™ smart cooler, backed by a 3-year warranty and lifetime U.S. support. Six customizable shelves with product pushers, cassette-style removable refrigeration, cashless payments via WeVend or Cantaloupe, real-time smart shopping cart, and an interactive voice assistant. A powerful starting point for operators entering the AI smart cooler market.',
  },
  spectraCore: {
    name: 'USI Spectra Core Smart Cooler', brand: 'USI — Spectra Series', category: 'AI Smart Cooler', price: '$5,495',
    img: '/static-assets/vvs_product_catalog/images/spectra-core-1.png', images: [],
    specs: ['Part Number: 36710001', 'Warranty: 5 Years', 'Technology: TrueAI™ computer vision product recognition', 'Screen: 30" customer-facing advertising display', 'Interior: Black interior for enhanced merchandising', 'Includes: Snack and beverage organizers', 'Refrigeration: Cassette-style removable refrigeration', 'Payment: Cashless — WeVend or Cantaloupe', 'Connectivity: Cloud-based remote monitoring (VMS)', 'Support: Lifetime 24/7 U.S.-based support'],
    features: 'The Spectra Core steps up to a 5-year warranty and adds a 30" customer-facing advertising screen for passive revenue. Black interior for premium merchandising presentation, snack and beverage organizers included. TrueAI™ computer vision, cashless payments, real-time smart cart, and voice assistant standard across all Spectra models.',
  },
  spectraPro: {
    name: 'USI Spectra Pro Smart Cooler', brand: 'USI — Spectra Series', category: 'AI Smart Cooler', price: '$6,495',
    img: '/static-assets/vvs_product_catalog/images/spectra-pro-2.webp', images: [],
    specs: ['Part Number: 36720003', 'Warranty: 5 Years', 'Technology: True AI product detection', 'Screen: 30" full-color advertising video screen', 'Door: Interactive LED handle', 'Trays: FIFO pull-out trays with pushers', 'Payment: EMV-compliant cashless payments', 'Telemetry: Full telemetry with remote VMS integration', 'Security: Abnormal order & theft alerts, GPS asset tracking', 'Dimensions: 82.6"H x 31.5"W x 28.8"D — 443 lbs.', 'Electrical: 115 VAC/60Hz, 2.4 AMPS, 2/7 HP', 'Refrigeration: R290', 'Certification: ETL & NAMA'],
    features: 'The Spectra Pro is USI\'s most advanced AI-powered smart cooler, featuring a 30" full-color advertising video screen and an interactive LED handle that attracts attention. True AI product detection, real-time cart and checkout visibility, and full telemetry with remote VMS integration give operators total control across every location. A pullout compressor reduces service time, and machine health alerts plus abnormal order/theft alerts and GPS asset tracking keep equipment secure. Backed by a 5-year warranty for long-term ownership.',
    pdfHref: '/static-assets/sellsheets/Spectra-Pro-Sellsheet.pdf',
  },
  spectraElevate: {
    name: 'USI Spectra Elevate Smart Cooler', brand: 'USI — Spectra Series', category: 'AI Smart Cooler', price: '$7,995',
    img: '/static-assets/vvs_product_catalog/images/spectra-elevate-1.webp', images: [],
    specs: ['Part Number: 36700001', 'Warranty: 7 Years — industry-leading', 'Technology: TrueAI™ computer vision product recognition', 'Pushers: RTC pushers for fresh food & drinks', 'Loyalty: Integrated loyalty program', 'Security: Real-time theft alerts', 'Tracking: GPS asset tracking', 'Construction: Premium USA-made cooler', 'Support: Lifetime 24/7 U.S.-based hardware support', 'Payment: Cashless — WeVend or Cantaloupe'],
    features: 'The Spectra Elevate is USI\'s flagship — the only model backed by a 7-year warranty and built in the USA. RTC pushers for fresh food and drinks, an integrated loyalty program, real-time theft alerts, and GPS asset tracking make this the most operator-friendly smart cooler on the market. Premium construction, lifetime U.S. hardware support, and every Spectra standard feature included.',
  },
  venderaLC510: {
    name: 'Vendera LC-510 Smart Cooler', brand: 'Vendera', category: 'AI Smart Cooler', price: '$3,800',
    img: '/static-assets/vvs_product_catalog/images/vendera-modelLC510-image.png', images: [],
    specs: ['Model: LC-510', 'Warranty: 2 years parts / 5 years compressor (no labor)', 'Power: Standard 110V outlet — no installation crew needed', 'Connectivity: Cellular (4G LTE)', 'Dimensions: 28.4" W x 29.3" D', 'Shelves: 6', 'Capacity: Up to 400 products'],
    features: 'The Vendera LC-510 is the most accessible AI smart cooler on the market — plug it into a standard 110V outlet and you\'re ready to go. No installation crew required. Built-in 4G cellular connectivity means it works anywhere, even without Wi-Fi. Six shelves hold up to 400 products. A 2-year parts warranty and 5-year compressor warranty back it up. The ideal entry point for operators who want smart cooler technology without the complexity.',
  },
};

const VS_ROWS = [
  { label: 'What It Sells', smart: 'Sells 15,000+ SKUs — drinks, snacks, flowers, fresh produce, even glass or irregular-shaped items', old: 'Limited selection — no glass, fresh produce, or irregular-shaped items' },
  { label: 'Where It Works', smart: 'Works anywhere — offices, dorms, gyms, and more. One person can move it; fits through doors and elevators', old: 'Bulky and heavy — limited to larger or more accessible locations' },
  { label: 'How Customers Buy', smart: 'Customers can grab multiple items at once, spend more per visit, and pay any way (card, Apple Pay, etc.)', old: 'Fixed slots — less flexible and slower to restock' },
  { label: 'How It Restocks', smart: 'Smart app enables remote control, restock alerts, and data-driven product operation analysis', old: 'Complex slot mechanisms — harder to maintain and more prone to failure' },
  { label: 'Machine Design', smart: 'Slot-free design makes it easy to maintain and less likely to break down', old: 'Clumsy design and size limit mobility — frequent maintenance issues' },
  { label: 'User Experience', smart: 'Quick and easy — customers pick items directly, no bending required', old: 'Less user-friendly — items drop behind a door, forcing customers to bend down' },
];

const FAQS = [
  { q: 'What is an AI smart cooler?', a: 'An AI smart cooler is a next-generation unattended retail unit that uses cameras, weight sensors, and AI software to identify what customers take. Customers unlock the cooler with a card or mobile payment, grab their items, and the system charges them automatically when the door closes. No attendant or manual checkout required.' },
  { q: 'How much does a smart cooler cost?', a: 'AI smart coolers from Vital Vending Sales start at $2,999 for the HAHA Mini and range up to $7,995 for the USI Spectra Elevate. USI Spectra models are priced from $4,995 to $7,995, and the Vendera LC-510 starts at $3,800. Contact us for current pricing and any ongoing fees or subscription costs tied to the cloud platform.' },
  { q: 'What can I sell in a smart cooler?', a: 'Smart coolers are not limited to food and drinks. The HAHA units can vend almost any item larger than a tennis ball, including beverages, fresh food, snacks, over-the-counter medications, toiletries, electronics accessories, and personal care products.' },
  { q: 'Do smart coolers require Wi-Fi?', a: 'HAHA smart coolers support both Wi-Fi and 4G LTE connectivity. The FLEX model includes built-in cellular so it can operate in locations without reliable Wi-Fi. The cloud dashboard works on any internet-connected device.' },
  { q: 'How is a smart cooler different from a traditional vending machine?', a: 'Traditional vending machines dispense one item at a time through a mechanical selection process. Smart coolers let customers browse and grab items freely just like a store shelf. The AI detects what was taken and charges automatically. Smart coolers hold more variety, support fresh food, and generate higher per-visit revenue.' },
  { q: 'Where are smart coolers a good fit?', a: 'Smart coolers work well in offices, gyms, hotels, apartment buildings, universities, hospitals, airports, and any location that benefits from 24/7 access and a wide product range. They are especially effective in locations where fresh food demand is high or product variety matters.' },
];

function Badge({ label, style = {} }) {
  const defaultStyle = { background: '#D6F0DA', color: '#3DB54A' };
  return (
    <span className="text-xs font-bold uppercase tracking-wide px-2 py-1 rounded" style={{ ...defaultStyle, ...style }}>{label}</span>
  );
}

function SpecChip({ label }) {
  return <span className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-md" style={{ background: '#F4F6F8', color: '#3D4D5C' }}>{label}</span>;
}

function ProductCard({ img, name, model, tagline, specs, price, badge, badgeStyle, wide, href }) {
  return (
    <div className={`rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${wide ? 'sm:col-span-2 lg:col-span-1' : ''}`}
      style={{ background: '#fff', border: '1px solid rgba(27,42,74,0.08)', boxShadow: '0 1px 2px rgba(27,42,74,0.06),0 4px 12px rgba(27,42,74,0.08),0 16px 32px rgba(27,42,74,0.06)', cursor: 'pointer' }}>
      <div className="flex items-center justify-center" style={{ height: 220, background: '#F4F6F8' }}>
        <img src={img} alt={name} loading="lazy" style={{ height: 200, width: 'auto', maxWidth: '100%', objectFit: 'contain', mixBlendMode: 'multiply' }} />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <Badge label={badge} style={badgeStyle} />
          <span className="text-xs font-bold uppercase tracking-wide px-2 py-1 rounded" style={{ background: 'rgba(27,42,74,0.08)', color: '#1B2A4A' }}>HAHA</span>
        </div>
        <h3 className="font-bold text-base mb-0.5 leading-snug" style={{ color: '#1B2A4A' }}>{name}</h3>
        {model && <p className="text-xs mb-0.5" style={{ color: '#8C95A0' }}>Model: {model}</p>}
        <p className="text-xs mb-3" style={{ color: '#8C95A0' }}>{tagline}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {specs.map(s => <SpecChip key={s} label={s} />)}
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs font-medium" style={{ color: '#8C95A0' }}>Starting at</div>
            <div className="font-black text-xl" style={{ color: '#1B2A4A', letterSpacing: '-0.02em' }}>{price}</div>
          </div>
          <Link href={href || '#contact'} className="inline-flex items-center gap-1.5 text-xs font-bold text-white px-4 py-2.5 rounded-lg" style={{ background: '#3DB54A' }}>View Details</Link>
        </div>
      </div>
    </div>
  );
}

function USICard({ id, img, name, part, tagline, specs, price, badge, badgeStyle, brandLabel = 'USI', onOpen }) {
  return (
    <div
      role="button" tabIndex={0} aria-label={`View ${name} details`}
      onClick={() => onOpen(id)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onOpen(id); } }}
      className="rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
      style={{ background: '#fff', border: '1px solid rgba(27,42,74,0.08)', boxShadow: '0 1px 2px rgba(27,42,74,0.06),0 4px 12px rgba(27,42,74,0.08),0 16px 32px rgba(27,42,74,0.06)', cursor: 'pointer' }}>
      <div className="flex items-center justify-center" style={{ height: 220, background: '#F4F6F8' }}>
        <img src={img} alt={name} style={{ height: 200, width: 'auto', maxWidth: '100%', objectFit: 'contain' }} />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <Badge label={badge} style={badgeStyle} />
          <span className="text-xs font-bold uppercase tracking-wide px-2 py-1 rounded" style={{ background: 'rgba(27,42,74,0.08)', color: '#1B2A4A' }}>{brandLabel}</span>
        </div>
        <h3 className="font-bold text-base mb-0.5 leading-snug" style={{ color: '#1B2A4A' }}>{name}</h3>
        {part && <p className="text-xs mb-0.5" style={{ color: '#8C95A0' }}>Part {part}</p>}
        <p className="text-xs mb-3" style={{ color: '#8C95A0' }}>{tagline}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {specs.map(s => <SpecChip key={s} label={s} />)}
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs font-medium" style={{ color: '#8C95A0' }}>Starting at</div>
            <div className="font-black text-xl" style={{ color: '#1B2A4A', letterSpacing: '-0.02em' }}>{price}</div>
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); onOpen(id); }}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-white px-4 py-2.5 rounded-lg"
            style={{ background: '#3DB54A', border: 'none', cursor: 'pointer' }}>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

function ProductModal({ id, onClose }) {
  const [activeImg, setActiveImg] = useState(null);
  const p = id ? MODAL_DATA[id] : null;

  if (!p) return null;
  const currentImg = activeImg || p.img;
  const imgDir = '/static-assets/vvs_product_catalog/images/';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(27,42,74,0.55)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="bg-white rounded-2xl overflow-hidden w-full" style={{ maxWidth: 880, maxHeight: '90vh', overflowY: 'auto' }}>
        <div className="flex items-start justify-between p-6 lg:p-8 border-b border-gray-100">
          <div>
            <span className="inline-block text-xs font-bold uppercase rounded-md px-2 py-1 mb-2" style={{ background: '#D6F0DA', color: '#1e7a28', letterSpacing: '0.08em' }}>{p.category}</span>
            <h2 className="font-black text-2xl" style={{ color: '#1B2A4A', letterSpacing: '-0.03em' }}>{p.name}</h2>
            <div className="text-sm mt-1" style={{ color: '#8C95A0' }}>{p.brand}</div>
          </div>
          <button onClick={onClose} aria-label="Close" className="flex-shrink-0 ml-4 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200" style={{ background: '#F4F6F8', border: 'none', cursor: 'pointer' }}>
            <svg className="w-5 h-5" fill="none" stroke="#3D4D5C" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-0">
          <div className="flex flex-col">
            <div className="flex items-center justify-center p-8" style={{ background: '#F4F6F8', minHeight: 260 }}>
              <img src={currentImg} alt={p.name} style={{ maxHeight: 288, width: 'auto', objectFit: 'contain' }} />
            </div>
            {p.images.length > 1 && (
              <div className="flex gap-2 p-3 overflow-x-auto bg-white border-t border-gray-100">
                {p.images.map((filename) => {
                  const src = imgDir + filename;
                  return (
                    <button key={filename} onClick={() => setActiveImg(src)} aria-label={`View image`}
                      className="flex-shrink-0 rounded-lg overflow-hidden"
                      style={{ width: 56, height: 56, border: currentImg === src ? '2px solid #3DB54A' : '2px solid transparent', cursor: 'pointer', padding: 0, background: '#F4F6F8' }}>
                      <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <div className="p-6 lg:p-8">
            <div className="mb-6">
              <div className="text-xs font-medium mb-1" style={{ color: '#8C95A0' }}>Starting Price</div>
              <div className="font-black text-3xl" style={{ color: '#1B2A4A', letterSpacing: '-0.03em' }}>{p.price}</div>
            </div>
            <div className="mb-6">
              <div className="font-semibold text-sm mb-3" style={{ color: '#1B2A4A' }}>Key Specifications</div>
              <ul className="space-y-2">
                {p.specs.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm" style={{ color: '#3D4D5C' }}>
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#3DB54A' }} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-6">
              <div className="font-semibold text-sm mb-3" style={{ color: '#1B2A4A' }}>Features</div>
              <p className="text-sm" style={{ color: '#3D4D5C', lineHeight: 1.7 }}>{p.features}</p>
            </div>
            <div className="pt-4 border-t border-gray-100">
              <p className="text-xs mb-4" style={{ color: '#8C95A0', lineHeight: 1.6 }}>Prices shown are starting MSRP. Contact us for exact quotes, availability, and delivery options to your location.</p>
              <Link href="/#contact" onClick={onClose} className="flex items-center justify-center gap-2 font-bold rounded-xl text-white px-6 py-3 text-sm w-full" style={{ background: 'rgba(61,181,74,0.9)', textDecoration: 'none' }}>
                Get a Quote for This Unit
              </Link>
              <a href="tel:4132823776" className="flex items-center justify-center gap-2 font-semibold rounded-xl px-6 py-3 text-sm w-full mt-3" style={{ color: '#1B2A4A', background: '#F4F6F8', textDecoration: 'none' }}>
                Call (413) 282-3776
              </a>
              {p.pdfHref && (
                <a href={p.pdfHref} download target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 font-semibold rounded-xl px-6 py-3 text-sm w-full mt-3" style={{ color: '#3DB54A', background: 'transparent', border: '1.5px solid #D6F0DA', textDecoration: 'none' }}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a1 1 0 001 1h16a1 1 0 001-1v-3" /></svg>
                  Download Spec Sheet
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b" style={{ borderColor: 'rgba(27,42,74,0.08)' }}>
      <button onClick={() => setOpen(!open)}
        className="w-full text-left py-5 flex items-center justify-between gap-4 font-semibold text-sm"
        style={{ color: '#1B2A4A', background: 'none', border: 'none', cursor: 'pointer' }}>
        {q}
        <svg className="flex-shrink-0 w-5 h-5 transition-transform duration-200" style={{ color: '#8C95A0', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
          fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && <div className="pb-5 text-sm" style={{ color: '#3D4D5C', lineHeight: 1.7 }}>{a}</div>}
    </div>
  );
}

export default function SmartCoolers() {
  const [openId, setOpenId] = useState(null);
  return (
    <>
      <ProductModal id={openId} onClose={() => setOpenId(null)} />
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden py-20 lg:py-32" style={{ background: '#1B2A4A', backgroundImage: 'radial-gradient(ellipse 60% 70% at 20% 50%,rgba(61,181,74,0.13) 0%,transparent 65%),radial-gradient(ellipse 70% 50% at 85% 60%,rgba(36,53,96,0.8) 0%,transparent 55%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex px-3 py-1.5 text-xs font-bold uppercase tracking-widest mb-5" style={{ background: 'rgba(61,181,74,0.25)', border: '1px solid rgba(61,181,74,0.4)', color: '#fff', borderRadius: 4 }}>
              AI-Powered Unattended Retail
            </div>
            <h1 className="font-black text-white mb-5" style={{ fontSize: 'clamp(2.2rem,5vw,3.5rem)', letterSpacing: '-0.03em', lineHeight: 1.08 }}>
              AI Smart Coolers<br /><span style={{ color: '#3DB54A' }}>for the Northeast</span>
            </h1>
            <p className="text-lg mb-8" style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, maxWidth: 580 }}>
              The future of unattended retail. AI-powered smart coolers let customers grab what they need and go, while you manage inventory, pricing, and analytics from anywhere.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#catalog" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white" style={{ background: '#3DB54A' }}>
                Browse Smart Coolers
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </a>
              <Link href="/#contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold" style={{ border: '1.5px solid rgba(255,255,255,0.32)', color: '#fff' }}>Free Consultation</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST BAR ===== */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10 text-sm font-medium" style={{ color: '#3D4D5C' }}>
            {['AI-Powered Technology', 'Cashless Payments', 'Remote Cloud Management', 'Avg $4.55 Per Transaction', 'Serving the Northeast'].map(t => (
              <div key={t} className="flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" style={{ color: '#3DB54A' }} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== CATALOG ===== */}
      <section id="catalog" className="py-16 lg:py-24" style={{ background: '#F4F6F8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 lg:mb-14">
            <div className="inline-flex px-3 py-1 text-xs font-bold uppercase tracking-widest mb-3" style={{ background: '#D6F0DA', color: '#3DB54A', borderRadius: 4 }}>AI Smart Cooler Lineup</div>
            <h2 className="font-black text-3xl mb-3" style={{ color: '#1B2A4A', letterSpacing: '-0.03em', lineHeight: 1.2 }}>12 Models. 3 Brands. Every Location Covered.</h2>
            <p className="text-base" style={{ color: '#3D4D5C', lineHeight: 1.7, maxWidth: 640 }}>We carry AI smart coolers from HAHA, USI Spectra, and Vendera — so you&apos;re never locked into one manufacturer. USI Spectra models carry industry-leading warranty periods up to 7 years.</p>
          </div>

          {/* HAHA */}
          <div className="mb-3 pt-2 pb-1">
            <div className="text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color: '#8C95A0' }}>Brand</div>
            <div className="font-black text-2xl" style={{ color: '#1B2A4A', letterSpacing: '-0.02em' }}>HAHA Smart Coolers</div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {HAHA_PRODUCTS.map(p => <ProductCard key={p.name} {...p} />)}
          </div>

          {/* USI Spectra */}
          <div className="mb-3 pt-8 pb-1 border-t mt-4" style={{ borderColor: '#e5e7eb' }}>
            <div className="text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color: '#8C95A0' }}>Brand</div>
            <div className="font-black text-2xl" style={{ color: '#1B2A4A', letterSpacing: '-0.02em' }}>USI Spectra Smart Coolers</div>
            <p className="text-sm mt-1" style={{ color: '#3D4D5C' }}>Industry-leading warranty coverage — up to 7 years. Powered by TrueAI™ computer vision.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {USI_PRODUCTS.map(p => <USICard key={p.name} {...p} onOpen={setOpenId} />)}
          </div>

          {/* Vendera */}
          <div className="mb-3 pt-8 pb-1 border-t mt-4" style={{ borderColor: '#e5e7eb' }}>
            <div className="text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color: '#8C95A0' }}>Brand</div>
            <div className="font-black text-2xl" style={{ color: '#1B2A4A', letterSpacing: '-0.02em' }}>Vendera Smart Coolers</div>
            <p className="text-sm mt-1" style={{ color: '#3D4D5C' }}>Plug-and-play AI smart cooler. Standard 110V outlet — no installation crew needed.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            <USICard id="venderaLC510" img="/static-assets/vvs_product_catalog/images/vendera-modelLC510-image.png" name="Vendera LC-510" part="LC-510" tagline="Plug-and-play 110V smart cooler — no installation crew needed" specs={['Up to 400 items', '6 shelves', 'Cellular 4G']} price="$3,800" badge="AI Smart Cooler" badgeStyle={{}} onOpen={setOpenId} />
          </div>

        </div>
      </section>

      {/* ===== VS TABLE ===== */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex px-3 py-1 text-xs font-bold uppercase tracking-widest mb-3" style={{ background: '#D6F0DA', color: '#3DB54A', borderRadius: 4 }}>Why Make the Switch</div>
            <h2 className="font-black text-3xl mb-4" style={{ color: '#1B2A4A', letterSpacing: '-0.03em', lineHeight: 1.2 }}>AI Smart Vending vs. Traditional Vending</h2>
            <p style={{ color: '#3D4D5C', maxWidth: 520, margin: '0 auto', lineHeight: 1.75 }}>Side by side, the difference is clear. More product flexibility, fewer service calls, higher revenue per visit.</p>
          </div>
          <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(27,42,74,0.1)', boxShadow: '0 4px 32px rgba(27,42,74,0.12)' }}>
            {/* Header */}
            <div className="grid" style={{ gridTemplateColumns: '1fr 160px 1fr', background: '#fff' }}>
              <div className="flex items-center justify-center p-5">
                <span style={{ background: '#FFF3CD', border: '2px solid #F5A623', borderRadius: 999, padding: '10px 22px', fontWeight: 800, fontSize: '1rem', color: '#E59400' }}>AI Smart Vending</span>
              </div>
              <div className="flex items-center justify-center p-5">
                <span style={{ fontFamily: 'Georgia,serif', fontSize: '2.5rem', fontWeight: 900, color: '#1B2A4A', lineHeight: 1 }}>VS</span>
              </div>
              <div className="flex items-center justify-center p-5">
                <span style={{ background: '#F4F6F8', border: '2px solid #8C95A0', borderRadius: 999, padding: '10px 22px', fontWeight: 600, fontSize: '1rem', color: '#3D4D5C' }}>Old Vending Machines</span>
              </div>
            </div>
            {VS_ROWS.map(row => (
              <div key={row.label} className="grid" style={{ gridTemplateColumns: '1fr 160px 1fr', borderTop: '1px dashed rgba(27,42,74,0.15)' }}>
                <div className="flex items-center gap-3 p-3.5" style={{ background: '#FFFBEE' }}>
                  <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: '#F5A623' }}>
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <p className="text-sm" style={{ color: '#3D4D5C', lineHeight: 1.5, margin: 0 }}>{row.smart}</p>
                </div>
                <div className="flex items-center justify-center p-3.5 text-center font-bold text-sm" style={{ color: '#1B2A4A', borderLeft: '1px dashed rgba(27,42,74,0.15)', borderRight: '1px dashed rgba(27,42,74,0.15)' }}>{row.label}</div>
                <div className="flex items-center gap-3 p-3.5" style={{ background: '#F9F9F9' }}>
                  <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: '#D1D5DB' }}>
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M3 3l6 6M9 3l-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" /></svg>
                  </div>
                  <p className="text-sm" style={{ color: '#3D4D5C', lineHeight: 1.5, margin: 0 }}>{row.old}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/#contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white" style={{ background: '#3DB54A' }}>Get a Free Consultation</Link>
          </div>
        </div>
      </section>

      {/* ===== WHY SMART COOLERS ===== */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="inline-flex px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4" style={{ background: '#D6F0DA', color: '#3DB54A', borderRadius: 4 }}>Why Smart Coolers</div>
              <h2 className="font-black text-3xl mb-5" style={{ color: '#1B2A4A', letterSpacing: '-0.03em', lineHeight: 1.2 }}>More Revenue. Less Work. Smarter Vending.</h2>
              <p className="mb-8" style={{ color: '#3D4D5C', lineHeight: 1.7 }}>Traditional vending machines are limited by selections and product types. AI smart coolers change the game. Customers spend nearly double the typical vending transaction, they can grab anything from snacks to medications to electronics, and you manage the entire operation from your phone.</p>
              <ul className="space-y-4">
                {[
                  { title: 'Higher Average Transaction', desc: 'HAHA Smart Cooler customers spend an average of $4.55 per visit, nearly double a traditional vending machine.' },
                  { title: 'Sell Virtually Anything', desc: 'Not limited to snacks and drinks. Stock medications, toiletries, apparel, electronics, and more in the same unit.' },
                  { title: 'Manage From Anywhere', desc: 'Real-time inventory tracking, pricing control, temperature monitoring, and sales data from a cloud dashboard on any device.' },
                  { title: 'Frictionless Customer Experience', desc: 'Tap to unlock, grab items, close the door. The AI charges automatically. No fumbling with buttons or coin slots.' },
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
              <div className="mt-10">
                <Link href="/#contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white text-sm" style={{ background: '#3DB54A' }}>Get a Free Consultation</Link>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden" style={{ boxShadow: '0 8px 40px rgba(27,42,74,0.14)' }}>
                <img src="/static-assets/MoreVendingMachinesandContent/HAHA Smart Cooler In Gym .jpg" alt="HAHA AI smart cooler in a gym" loading="lazy" className="w-full h-auto object-cover" style={{ maxHeight: 480 }} />
              </div>
              <div className="absolute hidden lg:block bg-white rounded-xl p-4" style={{ bottom: -20, left: -20, boxShadow: '0 4px 24px rgba(27,42,74,0.12)' }}>
                <div className="font-black text-3xl" style={{ color: '#1B2A4A', letterSpacing: '-0.03em' }}>$4.55</div>
                <div className="text-xs font-medium" style={{ color: '#8C95A0' }}>Avg transaction value</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LEAD CAPTURE ===== */}
      <section className="py-16 lg:py-24" style={{ background: '#1B2A4A' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="inline-flex px-3 py-1.5 text-xs font-bold uppercase tracking-widest mb-4" style={{ background: 'rgba(61,181,74,0.25)', border: '1px solid rgba(61,181,74,0.4)', color: '#fff', borderRadius: 4 }}>Free Consultation</div>
              <h2 className="font-black text-white mb-5" style={{ fontSize: 'clamp(1.8rem,3vw,2.5rem)', letterSpacing: '-0.03em', lineHeight: 1.15 }}>Ready to Add a Smart Cooler to Your Route?</h2>
              <p className="mb-8 text-base" style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>Our team will walk you through which unit fits your location, product mix, and revenue goals. No pressure, no obligation.</p>
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
              <h3 className="font-black text-xl mb-1" style={{ color: '#1B2A4A', letterSpacing: '-0.02em' }}>Request Info</h3>
              <p className="text-sm mb-6" style={{ color: '#3D4D5C', lineHeight: 1.6 }}>Fill out the form and we&apos;ll be in touch within one business day.</p>
              <SmartCoolerForm />
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4" style={{ background: '#D6F0DA', color: '#3DB54A', borderRadius: 4 }}>FAQ</div>
            <h2 className="font-black text-3xl" style={{ color: '#1B2A4A', letterSpacing: '-0.03em', lineHeight: 1.2 }}>Common Questions About AI Smart Coolers</h2>
          </div>
          <div>
            {FAQS.map(f => <FAQItem key={f.q} {...f} />)}
          </div>
        </div>
      </section>
    </>
  );
}

function SmartCoolerForm() {
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState({ first_name: '', last_name: '', email: '', phone: '', message: '' });
  const inputCls = 'w-full px-4 py-3 rounded-lg border text-sm focus:outline-none transition-shadow duration-200';
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
      i_m_interested_in: 'smart-cooler',
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
      <div><label className="block text-xs font-semibold uppercase tracking-wide mb-1.5" style={{ color: '#1B2A4A' }}>Tell Us About Your Location</label><textarea rows={3} placeholder="E.g. office of 50 people, looking for a smart cooler..." value={data.message} onChange={e => setData(p => ({ ...p, message: e.target.value }))} className={inputCls} style={{ ...inputStyle, resize: 'none' }} /></div>
      <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-base text-white" style={{ background: '#3DB54A' }}>
        Send My Request
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
      </button>
      <p className="text-xs text-center" style={{ color: '#8C95A0' }}>We respond within one business day. No spam, ever.</p>
    </form>
  );
}
