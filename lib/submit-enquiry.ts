export type Enquiry = { name: string; phone: string; service: string; date: string; time: string; message: string };
export type SubmitResult = { ok: true } | { ok: false; reason: "not-configured" | "failed" };

/**
 * INTEGRATION POINT.
 * Set NEXT_PUBLIC_ENQUIRY_ENDPOINT to a URL that accepts a JSON POST (your own API route,
 * a form service, a CRM webhook, etc). Until then no data is sent anywhere and the form
 * tells the visitor to use WhatsApp instead.
 */
export async function submitEnquiry(data: Enquiry): Promise<SubmitResult> {
  const endpoint = process.env.NEXT_PUBLIC_ENQUIRY_ENDPOINT;
  if (!endpoint) return { ok: false, reason: "not-configured" };
  try {
    const res = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    return res.ok ? { ok: true } : { ok: false, reason: "failed" };
  } catch {
    return { ok: false, reason: "failed" };
  }
}
