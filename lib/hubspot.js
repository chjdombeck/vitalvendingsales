const PORTAL_ID = '47628103';
const FORM_GUID = '8df960c9-8dc5-4742-8dfe-2133e1c7f88e';

export async function submitToHubSpot(fields) {
  return fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_GUID}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      fields: Object.entries(fields)
        .filter(([, value]) => value)
        .map(([name, value]) => ({ name, value })),
      context: {
        pageUri: typeof window !== 'undefined' ? window.location.href : '',
        pageName: typeof document !== 'undefined' ? document.title : '',
      },
    }),
  });
}
