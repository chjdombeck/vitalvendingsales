export async function POST(request) {
  const webhookUrl = process.env.GHL_WEBHOOK_URL_MAIN;
  if (!webhookUrl) {
    return Response.json({ error: 'GHL_WEBHOOK_URL_MAIN not configured' }, { status: 503 });
  }

  const fields = await request.json();

  const res = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(fields),
  });

  if (!res.ok) {
    return Response.json({ error: 'GHL webhook rejected the submission' }, { status: 502 });
  }

  return Response.json({ ok: true });
}
