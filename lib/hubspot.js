const PORTAL_ID = '47628103';
const FORM_GUID = '8df960c9-8dc5-4742-8dfe-2133e1c7f88e';

function getCookie(name) {
  if (typeof document === 'undefined') return undefined;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : undefined;
}

export async function submitToHubSpot(fields, formGuid = FORM_GUID) {
  const hutk = getCookie('hubspotutk');
  return fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${formGuid}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      fields: Object.entries(fields)
        .filter(([, value]) => value)
        .map(([name, value]) => ({ name, value })),
      context: {
        pageUri: typeof window !== 'undefined' ? window.location.href : '',
        pageName: typeof document !== 'undefined' ? document.title : '',
        ...(hutk ? { hutk } : {}),
      },
    }),
  });
}
