"use client";
import emailjs from "emailjs-com";
import { useEffect, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

const initial = { name: "", email: "", subject: "", phone: "", message: "", service: "", template: "nicolas react" };
const interests = ["Desarrollo web", "Aplicación móvil", "Ecommerce", "Marketing y publicidad", "Fotografía", "Producción audiovisual", "Gestión de redes sociales", "Otro"];

export default function ContactForm() {
  const [data, setData] = useState(initial);
  const [code, setCode] = useState<number | null>(null);
  const [answer, setAnswer] = useState("");
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setCode(Math.floor(1000 + Math.random() * 9000)), 0);
    return () => clearTimeout(timer);
  }, []);
  const change = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setData((current) => ({ ...current, [event.target.name]: event.target.value }));
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (code === null || Number(answer) !== code) { setStatus("El código de seguridad no coincide."); return; }
    setBusy(true);
    setStatus("");
    try {
      const payload = { ...data, message: `Servicio de interés: ${data.service}\n\n${data.message}` };
      await emailjs.send("service_gsps4gw", "template_evezi69", payload, "Q3pccdLZhU-mZT7tQ");
      setData(initial);
      setAnswer("");
      setCode(Math.floor(1000 + Math.random() * 9000));
      setStatus("Tu mensaje ha sido enviado. Me pondré en contacto contigo pronto.");
    } catch {
      setStatus("No se pudo enviar el mensaje. Inténtalo de nuevo o escríbeme por correo.");
    } finally { setBusy(false); }
  };
  return <form id="contactForm" onSubmit={submit} className="site-contact-form">
    <div className="form-row"><label>Nombre<input type="text" name="name" value={data.name} onChange={change} autoComplete="name" required /></label><label>Correo electrónico<input type="email" name="email" value={data.email} onChange={change} autoComplete="email" required /></label></div>
    <div className="form-row"><label>Teléfono<input type="tel" name="phone" value={data.phone} onChange={change} autoComplete="tel" required /></label><label>Servicio de interés<select name="service" value={data.service} onChange={change} required><option value="">Selecciona un servicio</option>{interests.map((interest) => <option key={interest} value={interest}>{interest}</option>)}</select></label></div>
    <label>Asunto<input type="text" name="subject" value={data.subject} onChange={change} required /></label>
    <label>Cuéntame sobre tu proyecto<textarea name="message" value={data.message} onChange={change} rows={5} required /></label>
    <label className="captcha-label">Código de seguridad: <strong>{code ?? "…"}</strong><input type="text" inputMode="numeric" pattern="[0-9]{4}" value={answer} onChange={(event) => setAnswer(event.target.value)} aria-label="Ingresa el código de seguridad" required /></label>
    {status && <p className="form-status" role="status">{status}</p>}
    <button type="submit" className="button button-primary" disabled={busy}>{busy ? "Enviando…" : "Enviar mensaje ↗"}</button>
  </form>;
}
