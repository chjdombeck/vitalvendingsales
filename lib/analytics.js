// Fires a Google Analytics 4 event via gtag.js (loaded in app/layout.js).
// Safe to call anywhere, including before gtag has loaded or on the server.
export function trackEvent(name, params = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', name, params);
}
