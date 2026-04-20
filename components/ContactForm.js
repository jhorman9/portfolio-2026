"use client";
import emailjs from "emailjs-com";
import { useEffect, useState } from "react";

const ContactForm = () => {
  const [code, setCode] = useState(0);
  useEffect(() => {
    setCode(Math.floor(Math.random() * 10000));
  }, []);

  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
    template: "nicolas react",
  });

  const { name, email, subject, phone, message, template } = mailData;
  const [error, setError] = useState(null);
  const [fieldError, setFieldError] = useState(null);
  const [codeError, setCodeError] = useState(null);
  const [codeValue, setCodeValue] = useState("");
  const onChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      name.length === 0 ||
      email.length === 0 ||
      subject.length === 0 ||
      phone.length === 0 ||
      message.length === 0
    ) {
      setFieldError(true);
      setError(true);
      clearError();
    } else {
      if (Number(code) === Number(codeValue)) {
        emailjs
          .send(
            "service_gsps4gw", // service id
            "template_evezi69", // template id
            mailData,
            "Q3pccdLZhU-mZT7tQ" // public api
          )
          .then(
            (response) => {
              setError(false);
              clearError();
              setFieldError(false);
              setMailData({
                name: "",
                email: "",
                message: "",
                phone: "",
                subject: "",
                template: "nicolas react",
              });
              setCode("");
            },
            (err) => {
              console.log(err.text);
            }
          );
      } else {
        setCodeError(true);
        setTimeout(() => {
          setCodeError(null);
        }, 2000);
      }
    }
  };

  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };

  return (
    <form id="contactForm" onSubmit={(e) => onSubmit(e)}>
      <div
        className="error_box"
        id="empty-form"
        style={{ display: error ? "block" : "none" }}
      >
        <p>Por favor, complete los campos requeridos.</p>
      </div>
      <div className="error_box" id="subject-alert">
        <p>Por favor, seleccione un asunto.</p>
      </div>
      <div
        className="error_box"
        id="security-alert"
        style={{ display: codeError ? "block" : "none" }}
      >
        <p>El código de seguridad no coincide.</p>
      </div>
      <div className="error_box" id="email-invalid">
        <p>Por favor, ingrese una dirección de correo electrónico válida. Ej. ejemplo@gmail.com</p>
      </div>
      <div className="error_box" id="phone-invalid">
        <p>Por favor, ingrese un número de teléfono válido. Ej. +998991774433</p>
      </div>
      <div className="error_box" id="error_mail">
        <p />
      </div>
      <div className="success_box" id="success_mail">
        <p>
          Su mensaje ha sido enviado. Nos pondremos en contacto con usted lo antes posible.
        </p>
      </div>
      <ul>
        <li className={fieldError && name.length === 0 ? "error" : ""}>
          <input
            type="text"
            placeholder="Nombre"
            name="name"
            onChange={(e) => onChange(e)}
            value={name}
            className="cf-form-control"
          />
          <span />
        </li>
        <li className={fieldError && email.length === 0 ? "error" : ""}>
          <input
            type="email"
            placeholder="Correo electrónico"
            name="email"
            onChange={(e) => onChange(e)}
            value={email}
            className="cf-form-control"
          />
          <span />
        </li>
        <li className={fieldError && subject.length === 0 ? "error" : ""}>
          <input
            type="text"
            placeholder="Asunto"
            name="subject"
            onChange={(e) => onChange(e)}
            value={subject}
            className="cf-form-control"
          />
          <span />
        </li>
        <li className={fieldError && phone.length === 0 ? "error" : ""}>
          <input
            type="number"
            placeholder="Teléfono"
            name="phone"
            onChange={(e) => onChange(e)}
            value={phone}
            className="cf-form-control"
          />
          <span />
        </li>
        <li
          id="text-area-w"
          className={fieldError && message.length === 0 ? "error" : ""}
        >
          <textarea
            placeholder="Escribe tu mensaje"
            name="message"
            onChange={(e) => onChange(e)}
            value={message}
            className="cf-form-control"
            defaultValue={""}
          />
        </li>
        <li
          id="enter_code"
          className={fieldError && message.length === 0 ? "error" : ""}
        >
          <span id="txtCaptchaSpan">{code}</span>
          <input
            type="number"
            className="cf-form-control"
            name="contact_question"
            id="txtInput"
            autoComplete="off"
            placeholder="Por favor, ingrese el código *"
            value={codeValue}
            onChange={(e) => setCodeValue(e.target.value)}
          />
          <input type="hidden" id="txtCaptcha" />
        </li>
      </ul>
      <div className="nicolas_sm_button">
        <button id="send_message" onSubmit={(e) => onSubmit(e)}>
          Enviar <img src="/img/header/arrow.webp" alt="arrow" />
        </button>
      </div>
    </form>
  );
};
export default ContactForm;
