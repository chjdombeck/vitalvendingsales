'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { isBlackFridayActive, isBlackFridayLive } from '@/lib/promo';

const DISMISS_KEY = 'vvs-bf-2026-dismissed';
const SPRING = 'cubic-bezier(0.34, 1.56, 0.64, 1)';

export default function BlackFridayPromo() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [live, setLive] = useState(true);

  useEffect(() => {
    if (!isBlackFridayActive()) return;
    setLive(isBlackFridayLive());
    if (pathname === '/black-friday') return;
    try {
      if (localStorage.getItem(DISMISS_KEY)) return;
    } catch {}
    setMounted(true);
    const t = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(t);
  }, [pathname]);

  function dismiss() {
    setVisible(false);
    try { localStorage.setItem(DISMISS_KEY, '1'); } catch {}
    setTimeout(() => setMounted(false), 400);
  }

  if (!mounted || pathname === '/black-friday') return null;

  return (
    <aside
      role="dialog"
      aria-label="Black Friday deals"
      className="fixed z-[60] bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:w-[360px]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.97)',
        transition: `opacity 300ms ease, transform 500ms ${SPRING}`,
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <div
        className="relative overflow-hidden rounded-2xl bg-white"
        style={{
          backgroundImage: 'radial-gradient(ellipse 70% 55% at 100% 0%, rgba(61,181,74,0.12) 0%, transparent 65%)',
          border: '1px solid rgba(27,42,74,0.08)',
          boxShadow: '0 24px 48px rgba(18,30,53,0.22), 0 8px 16px rgba(18,30,53,0.12), 0 0 0 1px rgba(61,181,74,0.15)',
        }}
      >
        <div style={{ height: 5, background: 'linear-gradient(90deg, #1B2A4A 0%, #1B2A4A 30%, #3DB54A 30%, #7ee08a 100%)' }} />

        <button
          type="button"
          onClick={dismiss}
          aria-label="Close Black Friday promo"
          className="absolute top-3.5 right-3 w-8 h-8 flex items-center justify-center rounded-full text-[#6B7280] hover:text-[#1B2A4A] hover:bg-[#F4F6F8] active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3DB54A]"
          style={{ transition: 'transform 150ms ease' }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-5 pr-12">
          <div className="flex items-center gap-2 mb-2.5">
            <span className="inline-block rounded-md px-2 py-0.5 text-[0.7rem] font-extrabold tracking-[0.12em] uppercase text-white" style={{ background: '#1B2A4A' }}>
              Black Friday
            </span>
            <span className="text-[0.75rem] font-bold tracking-wide" style={{ color: '#2e9439' }}>Nov 20 to 30</span>
          </div>

          <p className="font-black mb-2" style={{ color: '#1B2A4A', fontSize: '1.3rem', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
            {live ? 'Smart cooler deals are here' : 'Smart cooler deals start Nov 20'}{' '}<span aria-hidden="true">🎁</span>
          </p>
          <ul className="text-[0.85rem] mb-4 space-y-1.5" style={{ color: '#3D4D5C', lineHeight: 1.5 }}>
            <li className="flex gap-2">
              <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="#3DB54A" strokeWidth="3" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              <span><strong style={{ color: '#1B2A4A' }}>HAHA coolers</strong> from $2,749 plus a free extended warranty</span>
            </li>
            <li className="flex gap-2">
              <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="#3DB54A" strokeWidth="3" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              <span><strong style={{ color: '#1B2A4A' }}>Spectra coolers</strong> save $214.95 per cooler</span>
            </li>
          </ul>

          <Link
            href="/black-friday"
            onClick={() => setVisible(false)}
            className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 font-bold text-[0.9rem] text-white hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B2A4A] focus-visible:ring-offset-2"
            style={{
              background: '#3DB54A',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3), 0 6px 18px rgba(61,181,74,0.35)',
              transition: `transform 250ms ${SPRING}`,
            }}
          >
            {live ? 'See the deals' : 'Preview the deals'}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 12h12" />
            </svg>
          </Link>
        </div>
      </div>
    </aside>
  );
}
