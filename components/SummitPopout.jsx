'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SummitPopout() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (pathname === '/smart-cooler-summit') return;
    if (sessionStorage.getItem('summitPopoutDismissed')) return;
    const showTimer = setTimeout(() => setVisible(true), 1800);
    return () => clearTimeout(showTimer);
  }, [pathname]);

  useEffect(() => {
    if (!visible) return;
    const raf = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(raf);
  }, [visible]);

  if (pathname === '/smart-cooler-summit' || !visible) return null;

  const dismiss = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setEntered(false);
    sessionStorage.setItem('summitPopoutDismissed', '1');
    setTimeout(() => setVisible(false), 250);
  };

  const CalendarIcon = ({ size = 17 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M8 2v4M16 2v4M3.5 9h17M5 4h14a1.5 1.5 0 011.5 1.5v13A1.5 1.5 0 0119 20H5a1.5 1.5 0 01-1.5-1.5v-13A1.5 1.5 0 015 4z" stroke="#3DB54A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
  );

  return (
    <div
      className="fixed z-50 bottom-3 right-3 sm:bottom-5 sm:right-5"
      style={{
        width: 'min(240px, calc(100vw - 24px))',
        opacity: entered ? 1 : 0,
        transform: entered ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.96)',
        transition: 'opacity 400ms cubic-bezier(0.34,1.56,0.64,1), transform 400ms cubic-bezier(0.34,1.56,0.64,1)',
      }}
    >
      <style>{`
        @keyframes summitPulse {
          0%, 100% { box-shadow: 0 6px 24px rgba(27,42,74,0.28), 0 0 0 0 rgba(61,181,74,0.35); }
          50% { box-shadow: 0 6px 24px rgba(27,42,74,0.28), 0 0 0 7px rgba(61,181,74,0); }
        }
        .summit-popout-card { animation: summitPulse 2.8s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .summit-popout-card { animation: none; }
        }
      `}</style>
      <Link
        href="/smart-cooler-summit"
        className="summit-popout-card block rounded-2xl overflow-hidden group"
        style={{ position: 'relative', background: 'linear-gradient(135deg, #1B2A4A 0%, #243560 100%)', border: '1px solid rgba(61,181,74,0.35)', textDecoration: 'none' }}
      >
        <button
          onClick={dismiss}
          aria-label="Dismiss summit announcement"
          className="absolute flex items-center justify-center rounded-full transition-colors duration-200"
          style={{ top: 4, right: 4, width: 40, height: 40, background: 'transparent', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.75)' }}
        >
          <span className="flex items-center justify-center rounded-full" style={{ width: 22, height: 22, background: 'rgba(255,255,255,0.14)' }}>
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
          </span>
        </button>

        {/* Compact mobile layout */}
        <div className="flex sm:hidden items-center gap-2.5 py-2.5 pl-3.5 pr-11">
          <div className="flex-shrink-0 rounded-lg flex items-center justify-center" style={{ width: 30, height: 30, background: 'rgba(61,181,74,0.22)', border: '1px solid rgba(61,181,74,0.4)' }}>
            <CalendarIcon size={15} />
          </div>
          <div className="min-w-0">
            <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#3DB54A' }}>Aug 8 Summit</div>
            <div className="font-bold text-white truncate" style={{ fontSize: '0.8rem', letterSpacing: '-0.01em' }}>Smart Cooler Summit</div>
          </div>
        </div>

        {/* Full desktop/tablet layout */}
        <div className="hidden sm:block p-4 pr-9">
          <div className="flex items-center gap-2 mb-2">
            <div className="flex-shrink-0 rounded-lg flex items-center justify-center" style={{ width: 34, height: 34, background: 'rgba(61,181,74,0.22)', border: '1px solid rgba(61,181,74,0.4)' }}>
              <CalendarIcon />
            </div>
            <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#3DB54A' }}>Saturday, August 8</div>
          </div>
          <h3 className="font-bold text-white mb-1" style={{ fontSize: '0.95rem', letterSpacing: '-0.01em', lineHeight: 1.25 }}>New England Smart Cooler Summit</h3>
          <p className="text-xs mb-3" style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.5 }}>Free, hands-on look at the leading AI smart cooler brands. Space is limited.</p>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold transition-transform duration-200 group-hover:translate-x-0.5" style={{ color: '#fff' }}>
            Learn more &amp; register
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 12h14m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </span>
        </div>
      </Link>
    </div>
  );
}
