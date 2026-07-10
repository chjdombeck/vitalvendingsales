'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { submitToHubSpot } from '../lib/hubspot';

const REVIEWS = [
  { name: 'John Ragno', time: '7 months ago', text: '"Nick is trustworthy, honest, and takes his time to help you find the right machine, whether you\'re starting out or expanding your vending business. He\'s knowledgeable, patient, and goes above and beyond to ensure you understand your options. Excellent service from start to finish."' },
  { name: 'Emma Canarick', time: '7 months ago', text: '"Vital Vending exceeded every expectation! From day one, they went above and beyond to help ZenVend find the perfect machines for our needs. They didn\'t just sell us equipment, they walked us through every detail of how it works, patiently answering every question we had."' },
  { name: 'Chris Smalley', time: '5 months ago', text: '"Vital Vending has been an absolute game-changer in helping my wife and I get our vending business off the ground. Nick, Justin and Prez are a wealth of knowledge, easy to work with, ultra responsive, and are all extremely professional. I\'m grateful that I found them!"' },
  { name: 'Drew Friedman', time: '4 months ago', text: '"I met Nick at the NAMA show in Las Vegas and was blown away by his knowledge and experience in the vending machine sales realm. A true expert who clearly loves what he does and genuinely wants to help operators succeed."' },
  { name: 'Timothy Wear', time: '3 weeks ago', text: '"Deanna in the office is always such a delight to work with. And Prez has always shown the utmost care when delivering my machines. Highly recommend Vital Vending."' },
  { name: 'Roopa Naik', time: '4 months ago', text: '"Excellent communication and an easy setup process. Nick was very helpful and responded quickly to all my questions. Highly recommend."' },
  { name: 'KM Dispensing', time: '3 years ago', text: '"Nick is very knowledgeable and great to work with. He has a great selection of machines and can help with parts as well. I have had a great experience working with Vital Vending and would highly recommend!"' },
  { name: 'Lily Markee', time: '1 year ago', text: '"Nick has a great wealth of knowledge and experience! Always professional and on time when we need him. Erich at LTD Refreshments."' },
  { name: 'Michael Sepe', time: '3 years ago', text: '"It\'s always a pleasure to do business with Nick. He serves the vending industry well. Stands behind his products and his word."' },
  { name: 'Jay Hooks', time: '2 years ago', text: '"I had a few questions about some machines. Customer service was great! Very knowledgeable and helpful."' },
];

function GoogleIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" style={{ color: '#3DB54A' }} fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  );
}

function Stars() {
  return <span style={{ color: '#facc15' }}>★★★★★</span>;
}

function ReviewCard({ review }) {
  return (
    <div className="flex-none rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="flex items-center justify-between mb-3">
        <Stars />
        <GoogleIcon size={16} />
      </div>
      <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7 }}>{review.text}</p>
      <div>
        <div className="font-bold text-sm" style={{ color: '#3DB54A' }}>{review.name}</div>
        <div className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>Google Review · {review.time}</div>
      </div>
    </div>
  );
}

function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(1);
  const trackRef = useRef(null);

  const total = REVIEWS.length;
  const maxIdx = total - visible;

  function goTo(idx) {
    const clamped = Math.max(0, Math.min(idx, maxIdx));
    setCurrent(clamped);
  }

  useEffect(() => {
    function updateVisible() {
      if (window.innerWidth >= 1024) setVisible(3);
      else if (window.innerWidth >= 640) setVisible(2);
      else setVisible(1);
    }
    updateVisible();
    window.addEventListener('resize', updateVisible);
    return () => window.removeEventListener('resize', updateVisible);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const vis = visible;
    const viewport = track.parentElement;
    const gap = window.innerWidth >= 640 ? 20 : 12;
    const pl = parseInt(window.getComputedStyle(viewport).paddingLeft) || 0;
    const pr = parseInt(window.getComputedStyle(viewport).paddingRight) || 0;
    const cardW = (viewport.offsetWidth - pl - pr - gap * (vis - 1)) / vis;
    Array.from(track.children).forEach(c => { c.style.width = cardW + 'px'; });
    track.style.gap = gap + 'px';
    track.style.transform = `translateX(-${current * (cardW + gap)}px)`;
  }, [current, visible]);

  return (
    <div className="relative">
      <button onClick={() => goTo(current - 1)} aria-label="Previous"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full flex items-center justify-center lg:-translate-x-5"
        style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', opacity: current === 0 ? 0.35 : 1 }}>
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button onClick={() => goTo(current + 1)} aria-label="Next"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full flex items-center justify-center lg:translate-x-5"
        style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', opacity: current >= maxIdx ? 0.35 : 1 }}>
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
      </button>
      <div className="overflow-hidden px-12 lg:px-0">
        <div ref={trackRef} className="flex" style={{ transition: 'transform 0.55s cubic-bezier(0.16,1,0.3,1)', willChange: 'transform' }}>
          {REVIEWS.map((r, i) => <ReviewCard key={i} review={r} />)}
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: maxIdx + 1 }).map((_, i) => (
          <button key={i} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`}
            style={{ width: i === current ? 24 : 8, height: 8, borderRadius: 9999, border: 'none', cursor: 'pointer', background: i === current ? '#3DB54A' : 'rgba(255,255,255,0.25)', transition: 'all 0.3s', padding: 0 }} />
        ))}
      </div>
    </div>
  );
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ first_name: '', last_name: '', email: '', phone: '', interest: '', message: '' });

  function handleChange(e) {
    setFormData(p => ({ ...p, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await submitToHubSpot({
      firstname: formData.first_name,
      lastname: formData.last_name,
      email: formData.email,
      phone: formData.phone,
      i_m_interested_in: formData.interest,
      message: formData.message,
    });
    setSubmitted(true);
  }

  const inputCls = 'w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-shadow duration-200';
  const inputStyle = { borderColor: '#e5e7eb', background: '#fff', color: '#1B2A4A' };
  const labelCls = 'block text-xs font-bold mb-1.5 uppercase tracking-wide';

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: '#D6F0DA' }}>
          <svg className="w-6 h-6" style={{ color: '#3DB54A' }} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
        </div>
        <div className="font-bold text-xl mb-1" style={{ color: '#1B2A4A' }}>Message Sent!</div>
        <div className="text-sm" style={{ color: '#6B7280' }}>We&apos;ll be in touch within 1 business day.</div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-first-name" className={labelCls} style={{ color: '#1B2A4A' }}>First Name</label>
          <input id="contact-first-name" name="first_name" type="text" placeholder="John" required value={formData.first_name} onChange={handleChange} className={inputCls} style={inputStyle} />
        </div>
        <div>
          <label htmlFor="contact-last-name" className={labelCls} style={{ color: '#1B2A4A' }}>Last Name</label>
          <input id="contact-last-name" name="last_name" type="text" placeholder="Smith" required value={formData.last_name} onChange={handleChange} className={inputCls} style={inputStyle} />
        </div>
      </div>
      <div>
        <label htmlFor="contact-email" className={labelCls} style={{ color: '#1B2A4A' }}>Email</label>
        <input id="contact-email" name="email" type="email" placeholder="john@example.com" required value={formData.email} onChange={handleChange} className={inputCls} style={inputStyle} />
      </div>
      <div>
        <label htmlFor="contact-phone" className={labelCls} style={{ color: '#1B2A4A' }}>Phone</label>
        <input id="contact-phone" name="phone" type="tel" placeholder="(413) 555-0000" value={formData.phone} onChange={handleChange} className={inputCls} style={inputStyle} />
      </div>
      <div>
        <label htmlFor="contact-interest" className={labelCls} style={{ color: '#1B2A4A' }}>I&apos;m interested in</label>
        <select id="contact-interest" name="interest" value={formData.interest} onChange={handleChange} className={inputCls} style={{ ...inputStyle, appearance: 'none' }}>
          <option value="">Select an option...</option>
          <option value="smart-cooler">AI Smart Cooler</option>
          <option value="vending-new">New Vending Machine</option>
          <option value="vending-used">Used Vending Machine</option>
          <option value="location">Location Services</option>
          <option value="service">Service &amp; Support</option>
          <option value="general">General Inquiry</option>
        </select>
      </div>
      <div>
        <label htmlFor="contact-message" className={labelCls} style={{ color: '#1B2A4A' }}>Message</label>
        <textarea id="contact-message" name="message" rows={3} placeholder="Tell us a bit about your goals or questions..." value={formData.message} onChange={handleChange} className={inputCls} style={{ ...inputStyle, resize: 'none' }} />
      </div>
      <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-base text-white transition-colors duration-200"
        style={{ background: '#3DB54A' }}>
        Send Message — It&apos;s Free
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
      </button>
      <p className="text-center text-xs" style={{ color: '#6B7280' }}>By submitting, you agree to be contacted by Vital Vending Sales. We never share your info.</p>
    </form>
  );
}

export default function Home() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const section = canvas.parentElement;
    let ctx, beams, rafId;

    function randomHue(index) {
      if (index % 6 === 0) return 127 + Math.random() * 15;
      return 210 + Math.random() * 25;
    }

    function createBeam(w, h, index) {
      return {
        x: Math.random() * w * 1.5 - w * 0.25,
        y: Math.random() * h * 1.5 - h * 0.25,
        width: 30 + Math.random() * 60,
        length: h * 2.5,
        angle: -35 + Math.random() * 10,
        speed: 0.5 + Math.random() * 1.0,
        opacity: 0.22 + Math.random() * 0.28,
        hue: randomHue(index),
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03,
      };
    }

    function resetBeam(beam, index, w, h) {
      const col = index % 3;
      const spacing = w / 3;
      beam.y = h + 100;
      beam.x = col * spacing + spacing / 2 + (Math.random() - 0.5) * spacing * 0.5;
      beam.width = 80 + Math.random() * 90;
      beam.speed = 0.4 + Math.random() * 0.5;
      beam.hue = randomHue(index);
      beam.opacity = 0.22 + Math.random() * 0.26;
      return beam;
    }

    function drawBeam(c, beam) {
      c.save();
      c.translate(beam.x, beam.y);
      c.rotate(beam.angle * Math.PI / 180);
      const po = beam.opacity * (0.8 + Math.sin(beam.pulse) * 0.2);
      const g = c.createLinearGradient(0, 0, 0, beam.length);
      const bh = beam.hue;
      const sat = bh < 160 ? 90 : 82;
      const lit = bh < 160 ? 65 : 72;
      g.addColorStop(0, `hsla(${bh},${sat}%,${lit}%,0)`);
      g.addColorStop(0.1, `hsla(${bh},${sat}%,${lit}%,${po * 0.5})`);
      g.addColorStop(0.4, `hsla(${bh},${sat}%,${lit}%,${po})`);
      g.addColorStop(0.6, `hsla(${bh},${sat}%,${lit}%,${po})`);
      g.addColorStop(0.9, `hsla(${bh},${sat}%,${lit}%,${po * 0.5})`);
      g.addColorStop(1, `hsla(${bh},${sat}%,${lit}%,0)`);
      c.fillStyle = g;
      c.fillRect(-beam.width / 2, 0, beam.width, beam.length);
      c.restore();
    }

    const isMobile = window.innerWidth < 768;
    const beamCount = isMobile ? 12 : 28;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 2 : 3);
      const w = section.offsetWidth;
      const h = section.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx = canvas.getContext('2d');
      ctx.scale(dpr, dpr);
      beams = Array.from({ length: beamCount }, (_, i) => createBeam(w, h, i));
    }

    function animate() {
      if (!ctx) return;
      const w = section.offsetWidth;
      const h = section.offsetHeight;
      ctx.clearRect(0, 0, w, h);
      beams.forEach((beam, i) => {
        beam.y -= beam.speed;
        beam.pulse += beam.pulseSpeed;
        if (beam.y + beam.length < -100) resetBeam(beam, i, w, h);
        drawBeam(ctx, beam);
      });
      rafId = requestAnimationFrame(animate);
    }

    resize();
    window.addEventListener('resize', resize, { passive: true });
    const onVisibility = () => { if (document.hidden) cancelAnimationFrame(rafId); else if (!prefersReducedMotion) animate(); };
    document.addEventListener('visibilitychange', onVisibility);
    if (prefersReducedMotion) {
      animate();
      cancelAnimationFrame(rafId);
    } else {
      animate();
    }

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <>
      <style>{`@keyframes vmGlow { 0%,100%{opacity:.8;transform:scale(1)} 50%{opacity:1;transform:scale(1.08)} }`}</style>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden" style={{ background: '#1B2A4A' }}>
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ filter: 'blur(24px)', willChange: 'transform' }} aria-hidden="true" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg,rgba(27,42,74,0.58) 0%,rgba(27,42,74,0.32) 60%,rgba(18,30,53,0.58) 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ display: 'flex', alignItems: 'center', minHeight: 0 }}>
          <div className="w-full lg:w-1/2 pt-16 pb-24 lg:pt-28 lg:pb-36" style={{ position: 'relative', zIndex: 2, maxWidth: 540 }}>
            <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#fff', background: 'rgba(61,181,74,0.25)', border: '1px solid rgba(61,181,74,0.4)', padding: '4px 12px', borderRadius: 4, display: 'inline-block', marginBottom: '0.75rem' }}>
              Northeast&apos;s Leader in AI Smart Vending
            </div>
            <h1 className="text-white font-black leading-tight mb-4 sm:mb-6" style={{ fontSize: 'clamp(2.4rem,5vw,3.5rem)', letterSpacing: '-0.03em', lineHeight: 1.08 }}>
              The Break Time Experts.<br />
              <span style={{ color: '#3DB54A' }}>Now Smarter</span><br />
              Than Ever.
            </h1>
            <p className="mb-5 sm:mb-8" style={{ color: 'rgba(219,234,254,0.85)', lineHeight: 1.7, maxWidth: 480 }}>
              AI-powered smart coolers, vending machines, and micro-market solutions for entrepreneurs and businesses across the Northeast.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/smart-coolers" className="inline-flex items-center gap-2 font-bold text-white text-base" style={{ padding: '14px 28px', borderRadius: 10, background: 'rgba(61,181,74,0.88)', backdropFilter: 'blur(14px) saturate(200%)', WebkitBackdropFilter: 'blur(14px) saturate(200%)', border: '1px solid rgba(255,255,255,0.28)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.35),inset 0 -1px 0 rgba(0,0,0,0.18),0 0 0 1px rgba(61,181,74,0.25),0 4px 16px rgba(0,0,0,0.18),0 0 24px rgba(61,181,74,0.28)', transition: 'transform 0.28s cubic-bezier(0.1,0.4,0.2,1),filter 0.28s cubic-bezier(0.1,0.4,0.2,1)' }}>
                Explore AI Smart Coolers
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link href="#contact" className="inline-flex items-center gap-2 font-semibold text-white text-base" style={{ padding: '13px 26px', borderRadius: 10, background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(18px) saturate(180%)', WebkitBackdropFilter: 'blur(18px) saturate(180%)', border: '1px solid rgba(255,255,255,0.32)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.28),0 4px 14px rgba(0,0,0,0.18)', transition: 'transform 0.28s cubic-bezier(0.1,0.4,0.2,1)' }}>
                Free Consultation
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-5 mt-6 sm:mt-10">
              {['15+ Years Experience', '$0 Consultation', 'Northeast Regional Leader'].map(t => (
                <div key={t} className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  <svg className="w-4 h-4 flex-shrink-0" style={{ color: '#3DB54A' }} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  {t}
                </div>
              ))}
            </div>
          </div>
          <div id="hero-machine-col" className="hidden lg:flex" style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '55%', alignItems: 'center', justifyContent: 'flex-end', pointerEvents: 'none' }}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 560, height: 560, borderRadius: '50%', background: 'radial-gradient(circle,rgba(61,181,74,0.26) 0%,rgba(61,181,74,0.08) 48%,transparent 72%)', filter: 'blur(50px)', animation: 'vmGlow 5s ease-in-out infinite', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: 340, height: 50, background: 'radial-gradient(ellipse,rgba(61,181,74,0.45) 0%,transparent 70%)', filter: 'blur(20px)', borderRadius: '50%', pointerEvents: 'none' }} />
            <Image src="/static-assets/hero6.webp" alt="AI Smart Vending Machines" width={546} height={477} sizes="(max-width: 1023px) 0px, 546px"
              style={{ position: 'relative', zIndex: 2, width: '94%', maxWidth: 546, maxHeight: '100%', objectFit: 'contain', objectPosition: 'center bottom', filter: 'drop-shadow(0 32px 64px rgba(0,0,0,0.65)) drop-shadow(0 0 60px rgba(61,181,74,0.28)) drop-shadow(0 0 20px rgba(61,181,74,0.15))' }} />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 80 }}>
            <path d="M0 80L1440 80L1440 30C1200 75 960 5 720 30C480 55 240 5 0 30L0 80Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ===== AI SMART COOLERS ===== */}
      <section id="smart-coolers" className="bg-white py-10 lg:py-28" style={{ backgroundImage: 'radial-gradient(ellipse 50% 40% at 80% 50%, rgba(61,181,74,0.06) 0%, transparent 70%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#1a6b2a', background: '#D6F0DA', padding: '4px 10px', borderRadius: 4, display: 'inline-block', marginBottom: '1rem' }}>New Technology</div>
            <h2 className="font-black text-4xl mb-4" style={{ color: '#1B2A4A', letterSpacing: '-0.03em', lineHeight: 1.12 }}>AI Smart Coolers &amp;<br />Micro-Market Solutions</h2>
            <p style={{ color: '#3D4D5C', lineHeight: 1.7 }}>HAHA Smart Coolers are our most popular AI-powered solution, with over 100 units deployed throughout New England. We also offer additional smart cooler solutions, including USI Spectra and Vendera, to ensure every customer has the right fit for their business.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {/* HAHA Pro */}
            <Link href="/smart-coolers" className="group rounded-2xl overflow-hidden transition-shadow duration-300" style={{ background: '#fff', border: '1px solid rgba(27,42,74,0.08)', boxShadow: '0 2px 12px rgba(27,42,74,0.06)' }}>
              <div className="relative overflow-hidden" style={{ aspectRatio: '4/3', background: '#F4F6F8' }}>
                <Image src="/static-assets/MoreVendingMachinesandContent/Pro Details.png" alt="HAHA Pro AI Smart Cooler" fill sizes="(max-width: 767px) 90vw, (max-width: 1023px) 45vw, 23vw" className="object-contain p-4" style={{ mixBlendMode: 'multiply' }} />
                <div className="absolute top-3 left-3"><span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', background: '#1B2A4A', color: '#fff', padding: '4px 10px', borderRadius: 4 }}>Best Seller</span></div>
              </div>
              <div className="p-5">
                <div className="text-xs font-medium uppercase tracking-wide mb-1" style={{ color: '#6B7280' }}>HAHA AI Smart Cooler</div>
                <h3 className="font-bold text-lg mb-1" style={{ color: '#1B2A4A', letterSpacing: '-0.01em' }}>HAHA Pro</h3>
                <p className="text-sm mb-4" style={{ color: '#3D4D5C', lineHeight: 1.6 }}>Full-size AI cooler with computer vision checkout, cashless payments, and remote management.</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs" style={{ color: '#6B7280' }}>Starting at</div>
                    <div className="font-black text-xl" style={{ color: '#1B2A4A', letterSpacing: '-0.02em' }}>$4,399</div>
                  </div>
                  <span className="px-4 py-2 rounded-lg text-sm font-bold text-white" style={{ background: '#3DB54A' }}>View Details</span>
                </div>
              </div>
            </Link>

            {/* Spectra Pro */}
            <Link href="/smart-coolers" className="group rounded-2xl overflow-hidden border transition-shadow duration-300" style={{ background: '#fff', border: '1px solid rgba(27,42,74,0.08)', boxShadow: '0 2px 12px rgba(27,42,74,0.06)' }}>
              <div className="relative overflow-hidden" style={{ aspectRatio: '4/3', background: '#F4F6F8' }}>
                <Image src="/static-assets/vvs_product_catalog/images/spectra-pro-2.webp" alt="USI Spectra Pro AI smart cooler" fill sizes="(max-width: 767px) 90vw, (max-width: 1023px) 45vw, 23vw" className="object-contain p-4" />
                <div className="absolute top-3 left-3"><span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', background: '#3DB54A', color: '#fff', padding: '4px 10px', borderRadius: 4 }}>5-Year Warranty</span></div>
              </div>
              <div className="p-5">
                <div className="text-xs font-medium uppercase tracking-wide mb-1" style={{ color: '#6B7280' }}>USI Spectra Series</div>
                <h3 className="font-bold text-lg mb-1" style={{ color: '#1B2A4A', letterSpacing: '-0.01em' }}>Spectra Pro Smart Cooler</h3>
                <p className="text-sm mb-4" style={{ color: '#3D4D5C', lineHeight: 1.6 }}>TrueAI™ computer vision, 32&quot; embedded ad screen, cashless payments, and cloud monitoring.</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs" style={{ color: '#6B7280' }}>Starting at</div>
                    <div className="font-black text-xl" style={{ color: '#1B2A4A', letterSpacing: '-0.02em' }}>$6,495</div>
                  </div>
                  <span className="px-4 py-2 rounded-lg text-sm font-bold text-white" style={{ background: '#3DB54A' }}>Get a Quote</span>
                </div>
              </div>
            </Link>

            {/* Vendera LC-510 */}
            <Link href="/smart-coolers" className="group rounded-2xl overflow-hidden transition-shadow duration-300" style={{ background: '#fff', border: '1px solid rgba(27,42,74,0.08)', boxShadow: '0 2px 12px rgba(27,42,74,0.06)' }}>
              <div className="relative overflow-hidden" style={{ aspectRatio: '4/3', background: '#F4F6F8' }}>
                <Image src="/static-assets/vvs_product_catalog/images/vendera-lc510-2.png" alt="Vendera LC-510 AI smart cooler" fill sizes="(max-width: 767px) 90vw, (max-width: 1023px) 45vw, 23vw" className="object-contain p-4" />
                <div className="absolute top-3 left-3"><span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', background: '#1B2A4A', color: '#fff', padding: '4px 10px', borderRadius: 4 }}>Entry-Level AI</span></div>
              </div>
              <div className="p-5">
                <div className="text-xs font-medium uppercase tracking-wide mb-1" style={{ color: '#6B7280' }}>Vendera Smart Cooler</div>
                <h3 className="font-bold text-lg mb-1" style={{ color: '#1B2A4A', letterSpacing: '-0.01em' }}>Vendera LC-510</h3>
                <p className="text-sm mb-4" style={{ color: '#3D4D5C', lineHeight: 1.6 }}>110V plug-and-play AI smart cooler. 6 shelves, up to 400 products, cellular connectivity.</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs" style={{ color: '#6B7280' }}>Starting at</div>
                    <div className="font-black text-xl" style={{ color: '#1B2A4A', letterSpacing: '-0.02em' }}>$3,800</div>
                  </div>
                  <span className="px-4 py-2 rounded-lg text-sm font-bold text-white" style={{ background: '#3DB54A' }}>Get a Quote</span>
                </div>
              </div>
            </Link>

            {/* CTA card */}
            <div className="rounded-2xl overflow-hidden" style={{ background: '#1B2A4A' }}>
              <div className="p-8 h-full flex flex-col justify-between" style={{ minHeight: 320 }}>
                <div>
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#fff', background: 'rgba(61,181,74,0.25)', border: '1px solid rgba(61,181,74,0.4)', padding: '4px 12px', borderRadius: 4, display: 'inline-block', marginBottom: '1rem' }}>Free Consultation</div>
                  <h3 className="font-bold text-white text-xl mb-3">Not sure which smart cooler fits your location?</h3>
                  <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>Our experts will assess your location, recommend the right solution, and walk you through ROI projections. All at zero cost to you.</p>
                </div>
                <div className="space-y-3">
                  <Link href="#contact" className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white w-full" style={{ background: '#3DB54A' }}>Book Free Consultation</Link>
                  <a href="tel:4132823776" className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm w-full" style={{ border: '1.5px solid rgba(255,255,255,0.3)', color: '#fff' }}>Call (413) 282-3776</a>
                </div>
              </div>
            </div>
          </div>

          {/* Feature strip */}
          <div className="rounded-2xl p-6 lg:p-8" style={{ background: '#F4F6F8', border: '1px solid rgba(27,42,74,0.06)' }}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: 'AI Product Recognition', sub: 'Instant checkout, no barcode scanning needed' },
                { label: 'Cashless Payments', sub: 'Card, tap, and mobile pay ready out of the box' },
                { label: 'Real-Time Analytics', sub: 'Remote inventory, sales data, and alerts 24/7' },
                { label: 'Rapid ROI', sub: 'Operators report profitability within 60 days' },
              ].map(f => (
                <div key={f.label} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: '#D6F0DA' }}>
                    <svg className="w-5 h-5" style={{ color: '#3DB54A' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <div>
                    <div className="font-bold text-sm" style={{ color: '#1B2A4A' }}>{f.label}</div>
                    <div className="text-xs mt-0.5" style={{ color: '#6B7280', lineHeight: 1.5 }}>{f.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== VENDING MACHINES ===== */}
      <section id="equipment" className="bg-white py-10 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <div className="max-w-xl">
              <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#1a6b2a', background: '#D6F0DA', padding: '4px 10px', borderRadius: 4, display: 'inline-block', marginBottom: '1rem' }}>Equipment Catalog</div>
              <h2 className="font-black text-4xl mb-3" style={{ color: '#1B2A4A', letterSpacing: '-0.03em', lineHeight: 1.12 }}>Premium Vending Machines</h2>
              <p style={{ color: '#3D4D5C', lineHeight: 1.7 }}>We carry the best vending brands in the USA: USI Evoke series, AMS, and more. Every machine selected for operator reliability and profitability.</p>
            </div>
            <Link href="/vending-machines" className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-colors duration-200" style={{ border: '1.5px solid #1B2A4A', color: '#1B2A4A' }}>View All Equipment</Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { img: 'usi-evoke-6-snack-vending-machine-2.jpg', cat: 'Snack Machine', name: 'USI Evoke 6', desc: '733-item capacity. Industry-leading reliability for high-volume locations.', price: '$6,316+', href: '/vending-machines' },
              { img: 'usi-evoke-st5-combo-vending-machine-2.jpg', cat: 'Combo Machine', name: 'USI Evoke ST5 Combo', desc: 'Snack + cold beverages in one unit. Perfect for smaller footprints.', price: 'Contact Us', href: '/vending-machines' },
              { img: 'ams-39-snack-vending-machine-2.jpg', cat: 'Snack Machine', name: 'AMS 39 Snack', desc: 'Rugged and dependable operator favorite. Built for long-term reliability.', price: '$4,300+', href: '/vending-machines' },
              { img: 'summit-5000-cold-drink-vending-machine-2.jpg', cat: 'Beverage Machine', name: 'Cold Beverage Unit', desc: 'High-capacity cold drink vending for offices, factories, and schools.', price: 'Contact Us', href: '/vending-machines' },
            ].map(m => (
              <Link key={m.name} href={m.href} className="group rounded-2xl overflow-hidden transition-shadow duration-300" style={{ background: '#fff', border: '1px solid rgba(27,42,74,0.08)', boxShadow: '0 2px 12px rgba(27,42,74,0.06)' }}>
                <div className="relative overflow-hidden" style={{ aspectRatio: '3/4', background: '#F4F6F8' }}>
                  <Image src={`/static-assets/vvs_product_catalog/images/${m.img}`} alt={m.name} fill sizes="(max-width: 639px) 90vw, (max-width: 1023px) 45vw, 23vw" className="object-contain p-3 group-hover:scale-105 transition-transform duration-500" style={{ mixBlendMode: 'multiply' }} />
                </div>
                <div className="p-4">
                  <div className="text-xs font-medium uppercase tracking-wide mb-0.5" style={{ color: '#6B7280' }}>{m.cat}</div>
                  <h3 className="font-bold text-base mb-1" style={{ color: '#1B2A4A' }}>{m.name}</h3>
                  <p className="text-xs mb-3" style={{ color: '#3D4D5C', lineHeight: 1.5 }}>{m.desc}</p>
                  <div className="flex items-center justify-between">
                    <div className="font-black text-lg" style={{ color: '#1B2A4A', letterSpacing: '-0.02em' }}>{m.price}</div>
                    <span className="font-bold text-xs flex items-center gap-1" style={{ color: '#3DB54A' }}>
                      Request Info
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-3 text-sm" style={{ color: '#6B7280' }}>
            <svg className="w-4 h-4 flex-shrink-0" style={{ color: '#3DB54A' }} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
            Equipment is not purchased online. Contact us for pricing, availability, and a free consultation.
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="py-10 lg:py-28" style={{ background: '#F4F6F8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#1a6b2a', background: '#D6F0DA', padding: '4px 10px', borderRadius: 4, display: 'inline-block', marginBottom: '1rem' }}>What We Do</div>
            <h2 className="font-black text-4xl mb-4" style={{ color: '#1B2A4A', letterSpacing: '-0.03em', lineHeight: 1.12 }}>Three Ways VVS Helps You Win</h2>
            <p style={{ color: '#3D4D5C', lineHeight: 1.7 }}>From your first machine to a full fleet, we equip, place, and support vending operators across the Northeast.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                badge: '01', title: 'Equipment Sales',
                desc: 'We sell and support the best vending machine and smart cooler brands in the USA, including USI Evoke, AMS, and CoolBlu. Every machine chosen for reliability, capacity, and operator profitability.',
                items: ['AI Smart Coolers & Micro-Markets', 'New & Certified Pre-Owned Machines', 'USI Evoke, AMS & CoolBlu Brands'],
                cta: 'Shop Equipment', highlight: false,
              },
              {
                badge: '02', title: 'Location Services',
                desc: 'Finding the right location is the most important factor in vending profitability. VVS leverages 15+ years of Northeast placement experience to connect operators with high-traffic, high-revenue accounts. No-cost consultation.',
                items: ['High-traffic account matching', 'Offices, factories, schools & more', 'Free consultation, zero cost'],
                cta: 'Get Placed', highlight: true,
              },
              {
                badge: '03', title: 'Service & Support',
                desc: 'Downtime costs money. VVS provides ongoing service, technical support, and parts access to keep your equipment at peak performance, whether you have one machine or a full fleet.',
                items: ['Parts sourcing & replacement', 'Technical support & service requests', 'Smart cooler tech integration'],
                cta: 'Get Support', highlight: false,
              },
            ].map((s, idx) => (
              <div key={s.badge} className="p-8" style={{ background: '#fff', borderRadius: 12, border: '1px solid rgba(27,42,74,0.08)', borderTop: s.highlight ? '3px solid #3DB54A' : undefined, boxShadow: '0 1px 2px rgba(27,42,74,0.06),0 4px 12px rgba(27,42,74,0.08),0 16px 32px rgba(27,42,74,0.06)', transition: 'box-shadow 0.3s cubic-bezier(0.34,1.56,0.64,1),transform 0.3s cubic-bezier(0.34,1.56,0.64,1)' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: '#D6F0DA' }}>
                  {idx === 0 && <svg className="w-6 h-6" style={{ color: '#3DB54A' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>}
                  {idx === 1 && <svg className="w-6 h-6" style={{ color: '#3DB54A' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                  {idx === 2 && <svg className="w-6 h-6" style={{ color: '#3DB54A' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                </div>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#1a6b2a', background: '#D6F0DA', padding: '4px 10px', borderRadius: 4, display: 'inline-block', marginBottom: '0.75rem' }}>{s.badge}</div>
                <h3 className="font-bold text-xl mb-3" style={{ color: '#1B2A4A', letterSpacing: '-0.01em' }}>{s.title}</h3>
                <p className="text-sm mb-5" style={{ color: '#3D4D5C', lineHeight: 1.7 }}>{s.desc}</p>
                <ul className="space-y-2 mb-6">
                  {s.items.map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm" style={{ color: '#3D4D5C' }}>
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="#contact" className="inline-flex items-center gap-2 font-bold text-white text-sm" style={{ padding: '10px 20px', borderRadius: 10, background: 'rgba(61,181,74,0.88)', backdropFilter: 'blur(14px) saturate(200%)', WebkitBackdropFilter: 'blur(14px) saturate(200%)', border: '1px solid rgba(255,255,255,0.28)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.35),0 4px 16px rgba(0,0,0,0.18),0 0 24px rgba(61,181,74,0.28)' }}>{s.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ENTREPRENEUR CTA ===== */}
      <section className="py-10 lg:py-28 relative overflow-hidden" style={{ background: '#1B2A4A' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: 'absolute', top: -200, right: -200, width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle,rgba(61,181,74,0.1) 0%,transparent 65%)' }} />
          <div style={{ position: 'absolute', bottom: -100, left: -100, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle,rgba(36,53,96,0.7) 0%,transparent 65%)' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#fff', background: 'rgba(61,181,74,0.25)', border: '1px solid rgba(61,181,74,0.4)', padding: '4px 12px', borderRadius: 4, display: 'inline-block', marginBottom: '1.25rem' }}>Become a Vending Entrepreneur</div>
              <h2 className="font-black text-white mb-5" style={{ fontSize: 'clamp(2rem,4vw,3rem)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                Vending machines make money<br />
                <span style={{ color: '#3DB54A' }}>while you sleep.</span>
              </h2>
              <p className="text-lg mb-8" style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.7 }}>
                Low start-up costs, flexible schedule, and a proven path to passive income. VVS walks you through every step, from picking the right machine to landing your first high-traffic location.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div className="font-black text-2xl mb-0.5" style={{ color: '#3DB54A', letterSpacing: '-0.02em' }}>$2,499</div>
                  <div className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>Entry point for a smart cooler</div>
                </div>
                <div className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div className="font-black text-2xl mb-0.5" style={{ color: '#3DB54A', letterSpacing: '-0.02em' }}>60 Days</div>
                  <div className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>Average time to first profit</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white" style={{ background: '#3DB54A' }}>Start Your Vending Business</Link>
                <Link href="/reviews" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold" style={{ border: '1.5px solid rgba(255,255,255,0.3)', color: '#fff' }}>Read Success Stories</Link>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { n: '1', title: 'Free Consultation', desc: 'We assess your goals, budget, and target area at no cost. Zero pressure.' },
                { n: '2', title: 'Choose Your Equipment', desc: 'Select the right machine for your location type: smart cooler, snack, combo, or beverage.' },
                { n: '3', title: 'Secure a High-Traffic Location', desc: 'We tap our 15+ year Northeast network to find you a profitable placement fast.' },
                { n: '4', title: 'Start Earning', desc: 'Your machine goes live. We stay in your corner with ongoing support, parts, and guidance.' },
              ].map(step => (
                <div key={step.n} className="rounded-xl p-5 flex items-start gap-4" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm text-white" style={{ background: '#3DB54A' }}>{step.n}</div>
                  <div>
                    <div className="font-bold text-white mb-1">{step.title}</div>
                    <div className="text-sm" style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section id="testimonials" className="py-10 lg:py-28" style={{ background: '#1B2A4A' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <a href="https://share.google/zldlNjs6a3Lq2OWP1" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mb-6 px-5 py-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}>
              <GoogleIcon size={22} />
              <div className="text-left">
                <div className="text-white font-bold text-sm">Visit Our Google Profile</div>
                <div className="flex items-center gap-1 mt-0.5">
                  <Stars />
                  <span className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>5.0 · 10 reviews</span>
                </div>
              </div>
            </a>
            <h2 className="font-black text-white mb-3" style={{ fontSize: 'clamp(1.75rem,3vw,2.25rem)', letterSpacing: '-0.03em' }}>What Our Customers Are Saying</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)' }}>Real Google reviews from real operators and businesses across the Northeast.</p>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="py-10 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#1a6b2a', background: '#D6F0DA', padding: '4px 10px', borderRadius: 4, display: 'inline-block', marginBottom: '1.25rem' }}>Get In Touch</div>
              <h2 className="font-black text-4xl mb-5" style={{ color: '#1B2A4A', letterSpacing: '-0.03em', lineHeight: 1.12 }}>Ready to Start Your<br />Vending Journey?</h2>
              <p className="text-base mb-8" style={{ color: '#3D4D5C', lineHeight: 1.7 }}>Whether you&apos;re buying your first machine, scaling a fleet, or looking to place vending in your facility, our team is ready. Consultations are always free and we respond fast.</p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: '#D6F0DA' }}>
                    <svg className="w-5 h-5" style={{ color: '#3DB54A' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <div className="text-xs font-medium uppercase tracking-wide" style={{ color: '#6B7280' }}>Phone</div>
                    <a href="tel:4132823776" className="font-bold text-lg" style={{ color: '#1B2A4A' }}>(413) 282-3776</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: '#D6F0DA' }}>
                    <svg className="w-5 h-5" style={{ color: '#3DB54A' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <div className="text-xs font-medium uppercase tracking-wide" style={{ color: '#6B7280' }}>Email</div>
                    <a href="mailto:info@vitalvendingsales.com" className="font-bold text-lg" style={{ color: '#1B2A4A' }}>info@vitalvendingsales.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: '#D6F0DA' }}>
                    <svg className="w-5 h-5" style={{ color: '#3DB54A' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <div className="text-xs font-medium uppercase tracking-wide" style={{ color: '#6B7280' }}>Location</div>
                    <div className="font-bold text-base" style={{ color: '#1B2A4A' }}>15 Dana Way, Ludlow, MA 01056</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a href="https://share.google/zldlNjs6a3Lq2OWP1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-semibold transition-colors duration-200" style={{ borderColor: '#e5e7eb', color: '#3D4D5C' }}>
                  <GoogleIcon size={16} />
                  Google
                </a>
                <a href="https://www.facebook.com/vitalvendingsales" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-semibold transition-colors duration-200" style={{ borderColor: '#e5e7eb', color: '#3D4D5C' }}>
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                  Facebook
                </a>
                <a href="https://instagram.com/vitalvendingsales" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-semibold transition-colors duration-200" style={{ borderColor: '#e5e7eb', color: '#3D4D5C' }}>
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                  Instagram
                </a>
                <a href="https://tiktok.com/@vitalvending" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-semibold transition-colors duration-200" style={{ borderColor: '#e5e7eb', color: '#3D4D5C' }}>
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.05a8.16 8.16 0 004.77 1.52V7.12a4.85 4.85 0 01-1-.43z" /></svg>
                  TikTok
                </a>
              </div>
            </div>
            <div className="rounded-2xl p-8 lg:p-10" style={{ background: '#F4F6F8', border: '1px solid rgba(27,42,74,0.06)', boxShadow: '0 4px 24px rgba(27,42,74,0.08)' }}>
              <h3 className="font-bold text-xl mb-1" style={{ color: '#1B2A4A', letterSpacing: '-0.01em' }}>Book a Free Consultation</h3>
              <p className="text-sm mb-6" style={{ color: '#6B7280' }}>We&apos;ll respond within 1 business day. Zero pressure, zero cost.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
