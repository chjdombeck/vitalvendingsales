// Black Friday 2026 promo (Eastern time).
// Starts Nov 20, 2026 12:00 AM ET (05:00 UTC). Ends Nov 30, 2026 11:59 PM ET (Dec 1, 04:59 UTC).
export const BF_PROMO_START = Date.UTC(2026, 10, 20, 5, 0, 0);
export const BF_PROMO_END = Date.UTC(2026, 11, 1, 4, 59, 59);

// Promo UI (popup + nav link) shows from now until the sale ends.
export const isBlackFridayActive = () => Date.now() <= BF_PROMO_END;
// True once the sale has actually started.
export const isBlackFridayLive = () => Date.now() >= BF_PROMO_START && Date.now() <= BF_PROMO_END;
