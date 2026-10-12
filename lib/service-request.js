// Service Request lead submission — routes through our own API endpoint so the
// GHL inbound webhook URL stays server-side (see app/api/service-request-lead).

export async function submitServiceRequestLead(fields) {
  return fetch('/api/service-request-lead', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(fields),
  });
}

// Silent parallel backup email via Web3Forms — never blocks the success state,
// never falls back to anything disruptive. Purely a safety copy in case the
// GHL webhook is ever down. Includes photo attachments.
export async function submitServiceRequestBackupEmail(formElement, subject, message) {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
  if (!accessKey) return;
  const data = new FormData(formElement);
  data.append('access_key', accessKey);
  data.append('subject', subject);
  data.append('message', message);
  return fetch('https://api.web3forms.com/submit', { method: 'POST', body: data }).catch(() => {});
}

// Uploads a photo file straight to Cloudinary (unsigned upload) and returns the
// resulting secure URL, or null if the upload failed.
export async function uploadServiceRequestPhoto(file) {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
  if (!cloudName || !uploadPreset || !file) return null;

  const data = new FormData();
  data.append('file', file);
  data.append('upload_preset', uploadPreset);

  try {
    const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
      method: 'POST',
      body: data,
    });
    const json = await res.json();
    return json.secure_url || null;
  } catch {
    return null;
  }
}
