"use client";

import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const interests = [
  "Desarrollo web",
  "Aplicación móvil",
  "Ecommerce",
  "Marketing y publicidad",
  "Fotografía",
  "Producción audiovisual",
  "Gestión de redes sociales",
  "Otro",
];

type ContactValues = {
  name: string;
  email: string;
  phone: string;
  service: string;
  subject: string;
  message: string;
  _honey: string;
};

const required = (label: string) => ({
  required: `Ingresa ${label}.`,
  validate: (value: string) => value.trim().length > 0 || `Ingresa ${label}.`,
});

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({ mode: "onBlur", defaultValues: { service: "", _honey: "" } });

  const submit = handleSubmit(async (values) => {
    setSent(false);
    try {
      const response = await axios.post<{ ok: boolean }>("/api/contact", values);
      if (!response.data.ok) throw new Error("No se pudo enviar el mensaje.");
      reset();
      setSent(true);
    } catch {
      setError("root.server", { type: "server", message: "No se pudo enviar el mensaje." });
    }
  });

  return (
    <form id="contactForm" className="site-contact-form" onSubmit={submit} noValidate>
      <div className="form-honeypot" aria-hidden="true">
        <label>Deja este campo vacío<input type="text" tabIndex={-1} autoComplete="off" {...register("_honey")} /></label>
      </div>
      <div className="form-row">
        <label>Nombre
          <input type="text" autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? "contact-name-error" : undefined} {...register("name", { ...required("tu nombre"), maxLength: { value: 120, message: "Máximo 120 caracteres." } })} />
          {errors.name && <span id="contact-name-error" className="form-field-error" role="alert">{errors.name.message}</span>}
        </label>
        <label>Correo electrónico
          <input type="email" autoComplete="email" aria-invalid={!!errors.email} aria-describedby={errors.email ? "contact-email-error" : undefined} {...register("email", { ...required("tu correo electrónico"), pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Ingresa un correo válido." }, maxLength: { value: 254, message: "Máximo 254 caracteres." } })} />
          {errors.email && <span id="contact-email-error" className="form-field-error" role="alert">{errors.email.message}</span>}
        </label>
      </div>
      <div className="form-row">
        <label>Teléfono
          <input type="tel" autoComplete="tel" aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "contact-phone-error" : undefined} {...register("phone", { ...required("tu teléfono"), maxLength: { value: 40, message: "Máximo 40 caracteres." } })} />
          {errors.phone && <span id="contact-phone-error" className="form-field-error" role="alert">{errors.phone.message}</span>}
        </label>
        <label>Servicio de interés
          <select aria-invalid={!!errors.service} aria-describedby={errors.service ? "contact-service-error" : undefined} {...register("service", { required: "Selecciona un servicio." })}>
            <option value="" disabled>Selecciona un servicio</option>
            {interests.map((interest) => <option key={interest} value={interest}>{interest}</option>)}
          </select>
          {errors.service && <span id="contact-service-error" className="form-field-error" role="alert">{errors.service.message}</span>}
        </label>
      </div>
      <label>Asunto
        <input type="text" aria-invalid={!!errors.subject} aria-describedby={errors.subject ? "contact-subject-error" : undefined} {...register("subject", { ...required("el asunto"), maxLength: { value: 160, message: "Máximo 160 caracteres." } })} />
        {errors.subject && <span id="contact-subject-error" className="form-field-error" role="alert">{errors.subject.message}</span>}
      </label>
      <label>Cuéntame sobre tu proyecto
        <textarea rows={5} aria-invalid={!!errors.message} aria-describedby={errors.message ? "contact-message-error" : undefined} {...register("message", { ...required("tu mensaje"), maxLength: { value: 5000, message: "Máximo 5000 caracteres." } })} />
        {errors.message && <span id="contact-message-error" className="form-field-error" role="alert">{errors.message.message}</span>}
      </label>
      {sent && <p className="form-status" role="status">Tu mensaje fue recibido. Me pondré en contacto contigo pronto.</p>}
      {errors.root?.server && (
        <p className="form-status form-status-error" role="alert">
          No se pudo enviar el mensaje. Escríbeme por <a href="https://wa.me/50765961547" target="_blank" rel="noopener noreferrer">WhatsApp</a> o haz clic en mi <a href="mailto:softwaredeveloper@jhorman.com">correo</a>.
        </p>
      )}
      <button type="submit" className="button button-primary" disabled={isSubmitting}>{isSubmitting ? "Enviando…" : "Enviar mensaje ↗"}</button>
    </form>
  );
}
