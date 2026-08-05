'use client';

export default function SuccessModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: 'rgba(27,42,74,0.55)' }}
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="success-modal-title"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full rounded-2xl bg-white text-center"
        style={{ maxWidth: 420, padding: '2.5rem 2rem', boxShadow: '0 20px 60px rgba(27,42,74,0.35)' }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute flex items-center justify-center rounded-full transition-colors duration-200"
          style={{ top: 12, right: 12, width: 32, height: 32, background: '#F4F6F8', border: 'none', cursor: 'pointer', color: '#6B7280' }}
        >
          <svg width="14" height="14" viewBox="0 0 12 12" fill="none"><path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
        </button>

        <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: '#D6F0DA' }}>
          <svg className="w-7 h-7" style={{ color: '#3DB54A' }} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
        </div>

        <h3 id="success-modal-title" className="font-black mb-2" style={{ color: '#1B2A4A', fontSize: '1.3rem', letterSpacing: '-0.02em' }}>
          We Received Your Information!
        </h3>
        <p style={{ color: '#3D4D5C', lineHeight: 1.7, fontSize: '0.95rem' }}>
          We&apos;ll get back to you shortly. Please check your email for more information.
        </p>

        <button
          onClick={onClose}
          className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white mt-6"
          style={{ background: '#3DB54A', border: 'none', cursor: 'pointer' }}
        >
          Got It
        </button>
      </div>
    </div>
  );
}
