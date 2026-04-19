import Preloader from "@/layouts/Preloader";
import "@css/plugins.css";
import "@css/style.css";
import "./globals.css";

export const metadata = {
  title: "Jhorman Nieto P | Frontend Developer",
  description: "Desarrollador Frontend especializado en React, creando interfaces de usuario atractivas y funcionales. Con experiencia en diseño web, desarrollo de aplicaciones móviles y UI/UX. Apasionado por mejorar habilidades y conocimientos en el desarrollo web.",
  keywords: [
    "Jhorman Nieto P",
    "Jhorman Nieto",
    "Frontend Developer",
    "React Developer",
    "Desarrollador Frontend",
    "Desarrollador React",
    "Diseño Web",
    "Desarrollo de Aplicaciones Móviles",
    "UI/UX",
    "Desarrollo Web",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
