import axios from "axios";

const fields = ["name", "email", "phone", "service", "subject", "message"] as const;
const formSubmitUrl = "https://formsubmit.co/ajax/jhorman_nieto97@hotmail.com";

type ContactField = (typeof fields)[number];

function isFormSubmitSuccess(value: unknown): boolean {
  if (typeof value !== "object" || value === null || !("success" in value)) return false;
  return value.success === true || value.success === "true";
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Datos inválidos." }, { status: 400 });
  }

  if (typeof body !== "object" || body === null) {
    return Response.json({ error: "Datos inválidos." }, { status: 400 });
  }

  const input = body as Record<string, unknown>;
  if (typeof input._honey === "string" && input._honey.trim()) {
    return Response.json({ ok: true });
  }

  const data = {} as Record<ContactField, string>;
  for (const field of fields) {
    const value = input[field];
    if (typeof value !== "string" || !value.trim()) {
      return Response.json({ error: "Completa todos los campos." }, { status: 400 });
    }
    data[field] = value.trim();
  }

  if (
    data.name.length > 120 ||
    data.email.length > 254 ||
    data.phone.length > 40 ||
    data.service.length > 80 ||
    data.subject.length > 160 ||
    data.message.length > 5000 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)
  ) {
    return Response.json({ error: "Revisa los datos del formulario." }, { status: 400 });
  }

  try {
    const response = await axios.post<unknown>(formSubmitUrl, {
      ...data,
      _subject: `Contacto web: ${data.subject}`,
      _template: "table",
      _url: "https://jhorman.com/contact",
    }, {
      headers: { Accept: "application/json" },
      timeout: 12000,
      validateStatus: () => true,
    });
    if (response.status < 200 || response.status >= 300 || !isFormSubmitSuccess(response.data)) {
      return Response.json({ error: "El servicio de correo no está disponible." }, { status: 502 });
    }
    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "El servicio de correo no está disponible." }, { status: 502 });
  }
}
