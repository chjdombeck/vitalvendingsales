'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const PARTS = [
  { id: 'vend-motor-001', name: 'Vend Motor — Spiral / Coil', sku: 'VM-SPIRAL-001', category: 'motors', price: 24.99, stock: 48, badge: 'Best Seller', badgeStyle: 'green', desc: 'Universal spiral vend motor for snack machines. Compatible with most USI, AMS, and National machines. Drop-in replacement, no wiring required.', compatible: 'USI Evoke Series, AMS 35/39, National 147/157', img: 'https://placehold.co/400x300/F4F6F8/1B2A4A?text=Vend+Motor', stripeLink: '' },
  { id: 'bill-val-mei-001', name: 'MEI CF7000 Bill Validator', sku: 'BV-MEI-CF7000', category: 'validators', price: 189.99, stock: 12, badge: 'In Stock', badgeStyle: 'green', desc: 'Mars MEI CF7000 cashless bill acceptor. Accepts $1-$100 bills with 98%+ acceptance rate. Includes stacker and 90-day warranty.', compatible: 'Universal mount — fits most snack and combo machines', img: 'https://placehold.co/400x300/F4F6F8/1B2A4A?text=Bill+Validator', stripeLink: '' },
  { id: 'coinco-9300', name: 'Coinco 9300-L Coin Mechanism', sku: 'CM-COINCO-9300L', category: 'coin', price: 149.99, stock: 7, badge: 'Low Stock', badgeStyle: 'red', desc: 'Coinco 9300-L multi-price coin mechanism. Accepts nickels, dimes, quarters, and dollar coins. Refurbished and tested — guaranteed to work.', compatible: 'USI, AMS, Vendo, Crane National machines', img: 'https://placehold.co/400x300/F4F6F8/1B2A4A?text=Coin+Mechanism', stripeLink: '' },
  { id: 'selection-btn-led', name: 'Selection Button w/ LED (4-pack)', sku: 'BTN-LED-4PK', category: 'electronics', price: 18.99, stock: 82, badge: 'Best Seller', badgeStyle: 'green', desc: 'Lighted selection buttons with integrated LEDs. Snap-in replacement, standard 30mm cutout. Available in white. Pack of 4.', compatible: 'AMS 35, AMS 39, USI 3014, USI 3015', img: 'https://placehold.co/400x300/F4F6F8/1B2A4A?text=Selection+Buttons', stripeLink: '' },
  { id: 'control-board-usi', name: 'USI Evoke Main Control Board', sku: 'CB-USI-EVOKE', category: 'electronics', price: 249.00, stock: 4, badge: 'Low Stock', badgeStyle: 'red', desc: 'OEM replacement main control board for USI Evoke 5 and Evoke 6 series machines. Plug-and-play — no programming required.', compatible: 'USI Evoke 5, USI Evoke 6, USI Evoke ST5', img: 'https://placehold.co/400x300/F4F6F8/1B2A4A?text=Control+Board', stripeLink: '' },
  { id: 'vend-motor-kit-4pk', name: 'Vend Motor Kit — 4-Pack', sku: 'VM-KIT-4PK', category: 'motors', price: 79.99, stock: 23, badge: 'Save 20%', badgeStyle: 'navy', desc: 'Value 4-pack of universal spiral vend motors. Stock up and save. Same motor as VM-SPIRAL-001 sold individually at $24.99 each.', compatible: 'USI Evoke Series, AMS 35/39, National 147/157', img: 'https://placehold.co/400x300/F4F6F8/1B2A4A?text=Motor+4-Pack', stripeLink: '' },
  { id: 'cam-lock-tubular', name: 'Tubular Cam Lock — T-Handle', sku: 'LK-CAM-TUBE', category: 'locks', price: 14.99, stock: 60, badge: 'In Stock', badgeStyle: 'green', desc: 'Standard tubular cam lock with T-handle for vending machine doors. Includes 2 keys. 7-pin security cylinder.', compatible: 'Universal — fits most vending machine door panels', img: 'https://placehold.co/400x300/F4F6F8/1B2A4A?text=Cam+Lock', stripeLink: '' },
  { id: 'door-gasket-universal', name: 'Door Gasket / Seal Strip — 6ft', sku: 'GS-DOOR-6FT', category: 'misc', price: 12.49, stock: 35, badge: 'In Stock', badgeStyle: 'green', desc: 'Universal magnetic door gasket/seal for beverage and combo machines. Sold per 6-foot length. Cut to size. Black foam-backed magnetic strip.', compatible: 'Vendo, Dixie Narco, Royal, AMS cooler doors', img: 'https://placehold.co/400x300/F4F6F8/1B2A4A?text=Door+Gasket', stripeLink: '' },
];

const FILTERS = [
  { key: 'all', label: 'All Parts' },
  { key: 'motors', label: 'Motors & Actuators' },
  { key: 'validators', label: 'Bill Validators' },
  { key: 'coin', label: 'Coin Mechanisms' },
  { key: 'electronics', label: 'Electronics & Boards' },
  { key: 'locks', label: 'Locks & Keys' },
  { key: 'misc', label: 'Misc Parts' },
];

const FAQS = [
  { q: 'Do you ship outside New England?', a: 'Yes. While we specialize in the Northeast, we ship parts to all 50 states. Shipping rates are calculated at checkout based on your location and order weight.' },
  { q: 'How do I know if a part is compatible with my machine?', a: 'Each listing includes compatible machine models. If you\'re unsure, call us at (413) 282-3776 and our team will help you identify the right part for your machine.' },
  { q: 'What is your return policy?', a: 'We accept returns within 30 days of delivery on unused parts in original packaging. Electrical components are non-returnable once installed. Contact us to initiate a return.' },
  { q: 'How fast will my order arrive?', a: 'Orders placed before 2pm EST ship same day. Northeast delivery typically arrives in 1-2 business days. Standard shipping for other regions is 3-5 business days.' },
];

export default function VendingParts() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState('');
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('vvs_cart') || '[]');
      setCart(saved);
    } catch {}
  }, []);

  function saveCart(newCart) {
    setCart(newCart);
    try { localStorage.setItem('vvs_cart', JSON.stringify(newCart)); } catch {}
  }

  function addToCart(partId) {
    const part = PARTS.find(p => p.id === partId);
    if (!part) return;
    const existing = cart.find(i => i.id === partId);
    let newCart;
    if (existing) {
      newCart = cart.map(i => i.id === partId ? { ...i, qty: i.qty + 1 } : i);
    } else {
      newCart = [...cart, { id: part.id, name: part.name, sku: part.sku, price: part.price, img: part.img, qty: 1 }];
    }
    saveCart(newCart);
    showToast(part.name + ' added to cart');
  }

  function removeFromCart(partId) {
    saveCart(cart.filter(i => i.id !== partId));
  }

  function updateQty(partId, newQty) {
    if (newQty < 1) { removeFromCart(partId); return; }
    saveCart(cart.map(i => i.id === partId ? { ...i, qty: newQty } : i));
  }

  function showToast(msg) {
    setToast(msg);
    setTimeout(() => setToast(''), 2800);
  }

  function checkout() {
    if (cart.length === 0) return;
    const summary = cart.map(i => `${i.name} x${i.qty} ($${(i.price * i.qty).toFixed(2)})`).join(', ');
    const total = cart.reduce((s, i) => s + i.price * i.qty, 0).toFixed(2);
    window.location.href = `mailto:info@vitalvendingsales.com?subject=Parts Order from VVS Website&body=I would like to order the following parts:%0A%0A${encodeURIComponent(summary)}%0A%0ATotal: $${total}%0A%0APlease contact me to complete this purchase.`;
  }

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  const cartTotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const filtered = activeFilter === 'all' ? PARTS : PARTS.filter(p => p.category === activeFilter);

  function badgeStyle(s) {
    if (s === 'red') return { background: '#FFE4E4', color: '#c0392b' };
    if (s === 'navy') return { background: '#1B2A4A', color: '#fff' };
    return { background: '#D6F0DA', color: '#1B2A4A' };
  }

  return (
    <>
      {/* Cart Overlay */}
      {cartOpen && <div className="fixed inset-0 z-40" style={{ background: 'rgba(0,0,0,0.4)' }} onClick={() => setCartOpen(false)} />}

      {/* Cart Drawer */}
      <div className="fixed top-0 right-0 bottom-0 z-50 flex flex-col bg-white" style={{ width: '100%', maxWidth: 420, transform: cartOpen ? 'translateX(0)' : 'translateX(100%)', transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)', boxShadow: '-8px 0 40px rgba(0,0,0,0.15)' }}>
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <h2 className="font-black text-lg" style={{ color: '#1B2A4A', letterSpacing: '-0.02em' }}>Your Cart</h2>
          <button onClick={() => setCartOpen(false)} className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full py-16 text-center">
              <svg className="w-14 h-14 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" style={{ color: '#e5e7eb' }}><path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              <p className="font-medium" style={{ color: '#6B7280' }}>Your cart is empty</p>
              <p className="text-sm mt-1" style={{ color: '#6B7280' }}>Add some parts to get started</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map(item => (
                <div key={item.id} className="flex gap-4 py-4 border-b border-gray-100 last:border-0">
                  <div className="w-16 h-16 rounded-lg overflow-hidden relative flex-shrink-0" style={{ background: '#F4F6F8' }}>
                    <Image src={item.img} alt={item.name} fill style={{ objectFit: 'cover' }} unoptimized />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-sm mb-0.5" style={{ color: '#1B2A4A', lineHeight: 1.3 }}>{item.name}</div>
                    <div className="text-xs mb-2" style={{ color: '#6B7280' }}>{item.sku}</div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button onClick={() => updateQty(item.id, item.qty - 1)} className="w-7 h-7 rounded-md flex items-center justify-center font-bold text-lg" style={{ border: '1px solid #e5e7eb', background: '#F4F6F8', cursor: 'pointer' }}>-</button>
                        <span className="font-bold text-sm w-6 text-center" style={{ color: '#1B2A4A' }}>{item.qty}</span>
                        <button onClick={() => updateQty(item.id, item.qty + 1)} className="w-7 h-7 rounded-md flex items-center justify-center font-bold text-lg" style={{ border: '1px solid #e5e7eb', background: '#F4F6F8', cursor: 'pointer' }}>+</button>
                      </div>
                      <div className="font-black text-sm" style={{ color: '#1B2A4A' }}>${(item.price * item.qty).toFixed(2)}</div>
                    </div>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="flex-shrink-0 mt-1 p-1 hover:text-red-500 transition-colors" style={{ color: '#6B7280' }}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        {cart.length > 0 && (
          <div className="border-t border-gray-100 px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-medium" style={{ color: '#3D4D5C' }}>Subtotal</span>
              <span className="font-black text-xl" style={{ color: '#1B2A4A', letterSpacing: '-0.02em' }}>${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs" style={{ color: '#6B7280', lineHeight: 1.5 }}>Shipping and taxes calculated at checkout. Free shipping on orders over $75.</p>
            <button onClick={checkout} className="w-full font-bold py-3 rounded-xl text-white flex items-center justify-center gap-2" style={{ background: '#3DB54A', border: 'none', cursor: 'pointer', fontSize: '1rem' }}>
              Proceed to Checkout
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
            <button onClick={() => setCartOpen(false)} className="w-full text-center text-sm font-medium hover:text-navy transition-colors" style={{ color: '#6B7280', background: 'none', border: 'none', cursor: 'pointer' }}>Continue Shopping</button>
          </div>
        )}
      </div>

      {/* Hero */}
      <section style={{ background: '#1B2A4A' }} className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <nav className="text-sm mb-3" style={{ color: 'rgba(255,255,255,0.55)' }}>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span className="mx-2">/</span>
                <span style={{ color: 'rgba(255,255,255,0.85)' }}>Vending Parts</span>
              </nav>
              <h1 className="font-black text-white mb-3" style={{ fontSize: 'clamp(2rem,4vw,3rem)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>Vending Machine Parts</h1>
              <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, maxWidth: 520 }}>Genuine replacement parts for snack, combo, and beverage machines. Buy online and ship direct. Need help finding a part? Call us.</p>
            </div>
            <div className="flex flex-wrap items-center gap-6">
              {[['500+', 'Parts in Stock'], ['2-Day', 'Northeast Shipping'], ['15+', 'Yrs Experience']].map(([n, l]) => (
                <div key={l} className="text-center">
                  <div className="font-black text-white text-2xl" style={{ letterSpacing: '-0.03em' }}>{n}</div>
                  <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.8rem', fontWeight: 600 }}>{l}</div>
                </div>
              ))}
              <button onClick={() => setCartOpen(true)} className="relative flex items-center gap-2 font-bold rounded-full text-white px-5 py-2.5 ml-2" style={{ background: '#3DB54A', border: 'none', cursor: 'pointer', fontSize: '0.875rem' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                Cart
                {cartCount > 0 && <span className="inline-flex items-center justify-center font-black rounded-full text-white" style={{ minWidth: 20, height: 20, background: '#1B2A4A', fontSize: '0.7rem', padding: '0 4px' }}>{cartCount}</span>}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <div style={{ background: '#F4F6F8', borderBottom: '1px solid rgba(27,42,74,0.06)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-wrap items-center justify-center lg:justify-between gap-4 text-sm font-medium" style={{ color: '#3D4D5C' }}>
            {['Free shipping on orders over $75', 'Secure checkout', '30-day returns', 'Expert phone support: (413) 282-3776'].map(item => (
              <div key={item} className="flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#3DB54A' }}><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Catalog */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-10">
            {FILTERS.map(f => (
              <button key={f.key} onClick={() => setActiveFilter(f.key)} className="px-5 py-2 rounded-full font-semibold text-sm transition-all"
                style={{ border: '2px solid', borderColor: activeFilter === f.key ? '#1B2A4A' : '#e5e7eb', background: activeFilter === f.key ? '#1B2A4A' : '#fff', color: activeFilter === f.key ? '#fff' : '#3D4D5C', cursor: 'pointer' }}>
                {f.label}
              </button>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map(part => (
              <div key={part.id} className="bg-white rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(27,42,74,0.07)' }}>
                <div className="relative flex items-center justify-center" style={{ aspectRatio: '4/3', background: '#F4F6F8', overflow: 'hidden' }}>
                  <img src={part.img} alt={part.name} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 16 }} />
                  {part.badge && (
                    <div className="absolute top-3 left-3">
                      <span className="text-xs font-bold uppercase px-2.5 py-1 rounded-full" style={{ ...badgeStyle(part.badgeStyle), letterSpacing: '0.1em' }}>{part.badge}</span>
                    </div>
                  )}
                  {part.stock <= 10 && part.stock > 0 && (
                    <div className="absolute top-3 right-3 text-xs font-bold" style={{ color: '#c0392b' }}>Only {part.stock} left</div>
                  )}
                </div>
                <div className="p-5">
                  <div className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: '#6B7280' }}>{part.sku}</div>
                  <h3 className="font-bold text-base mb-2" style={{ color: '#1B2A4A', letterSpacing: '-0.01em', lineHeight: 1.3 }}>{part.name}</h3>
                  <p className="text-xs mb-3" style={{ color: '#3D4D5C', lineHeight: 1.55 }}>{part.desc}</p>
                  <div className="text-xs mb-4" style={{ color: '#6B7280', lineHeight: 1.5 }}>
                    <span className="font-semibold" style={{ color: '#1B2A4A' }}>Compatible:</span> {part.compatible}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-black text-xl" style={{ color: '#1B2A4A', letterSpacing: '-0.02em' }}>${part.price.toFixed(2)}</div>
                      <div className="text-xs" style={{ color: '#6B7280' }}>{part.stock > 10 ? 'In stock' : part.stock > 0 ? 'Low stock' : 'Out of stock'}</div>
                    </div>
                    <button onClick={() => addToCart(part.id)} disabled={part.stock === 0} className="text-sm font-bold py-2 px-4 rounded-xl text-white" style={{ background: part.stock === 0 ? '#ccc' : '#3DB54A', border: 'none', cursor: part.stock === 0 ? 'not-allowed' : 'pointer' }}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm mt-12" style={{ color: '#6B7280', lineHeight: 1.7 }}>
            Don&apos;t see the part you need? Call us at <a href="tel:4132823776" className="font-bold hover:text-green-600 transition-colors" style={{ color: '#1B2A4A' }}>(413) 282-3776</a> and we&apos;ll help you source it.
          </p>
        </div>
      </section>

      {/* eBay Strip */}
      <section style={{ background: '#F4F6F8', borderTop: '1px solid rgba(27,42,74,0.06)', borderBottom: '1px solid rgba(27,42,74,0.06)' }} className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-6 justify-between">
            <div>
              <div className="font-black text-lg mb-1" style={{ color: '#1B2A4A', letterSpacing: '-0.02em' }}>Also Available on eBay</div>
              <p className="text-sm" style={{ color: '#3D4D5C', lineHeight: 1.6 }}>Many of our parts are listed on eBay for your convenience. Shop on your preferred platform.</p>
            </div>
            <a href="https://www.ebay.com/str/vitalvendingsales" target="_blank" rel="noopener" className="inline-flex items-center gap-2 font-bold rounded-full px-6 py-3 flex-shrink-0 transition-all" style={{ background: 'transparent', color: '#1B2A4A', border: '2px solid #1B2A4A', textDecoration: 'none' }}>
              Shop on eBay
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-black mb-3" style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', color: '#1B2A4A', letterSpacing: '-0.03em', lineHeight: 1.15 }}>Frequently Asked Questions</h2>
            <p style={{ color: '#3D4D5C', lineHeight: 1.7 }}>Common questions about ordering vending machine parts from VVS.</p>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="rounded-xl p-5" style={{ background: '#F4F6F8', border: '1px solid rgba(27,42,74,0.06)' }}>
                <button className="w-full flex items-center justify-between text-left font-bold text-sm" style={{ color: '#1B2A4A', background: 'none', border: 'none', cursor: 'pointer' }} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {faq.q}
                  <svg className="w-4 h-4 flex-shrink-0 ml-3 transition-transform" style={{ color: '#6B7280', transform: openFaq === i ? 'rotate(180deg)' : 'none' }} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </button>
                {openFaq === i && <p className="text-sm mt-3" style={{ color: '#3D4D5C', lineHeight: 1.7 }}>{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white z-50" style={{ transform: 'translateX(-50%)', background: '#1B2A4A', boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
          <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#3DB54A' }}><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
          {toast}
        </div>
      )}
    </>
  );
}
