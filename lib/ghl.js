// Go High Level lead submission — routes through our own API endpoint so the
// GHL inbound webhook URL stays server-side (see app/api/ghl-lead).

export async function submitToGHLLead(fields) {
  return fetch('/api/ghl-lead', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(fields),
  });
}
