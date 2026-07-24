// Go High Level lead submission — routes through our own API endpoints so the
// GHL inbound webhook URLs stay server-side (see app/api/ghl-lead and
// app/api/ghl-summit). Not wired into any form yet — see submitToHubSpot
// call sites for where to swap this in when we cut over.

export async function submitToGHLLead(fields) {
  return fetch('/api/ghl-lead', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(fields),
  });
}

export async function submitToGHLSummit(fields) {
  return fetch('/api/ghl-summit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(fields),
  });
}
