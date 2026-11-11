import type { Brand, ExperienceEntry, Service, ToolGroup } from "@/types";

export const brands: Brand[] = [
  { name: "The Color Bar Salon", logo: "/img/logo-aliados/the color bar salon panama.jpg", url: "https://www.instagram.com/thecolorbarsalon19/" },
  { name: "Cocolpan", logo: "/img/logo-aliados/cocolpan panama.jpg", url: "https://cocolpan.com/" },
  { name: "Azumi Panamá", logo: "/img/logo-aliados/azumi panama.jpg", url: "https://azumipty.com/" },
  { name: "Divino Pekado", logo: "/img/logo-aliados/divino pekado.jpg", url: "https://www.instagram.com/divinopekado/" },
  { name: "Utah Mechanical School", logo: "/img/logo-aliados/utah mechanical school estados unidos.jpg", url: "https://utahmechanicalschool.com/" },
  { name: "Aikikaird", logo: "/img/logo-aliados/aikikaird republica dominicana.jpg", url: "https://aikikaird.org/" },
  { name: "Web Innovator Studio", logo: "/img/logo-aliados/web innovator studio panama.jpg", url: "https://webinnovatorstudio.com/" },
];

export const services: Service[] = [
  { number: "01", icon: "⌘", title: "Desarrollo web & aplicaciones", description: "Productos digitales sólidos, rápidos y pensados para crecer.", items: ["Desarrollo con React y Next.js", "Aplicaciones móviles con React Native", "WordPress personalizado", "Ecommerce y WooCommerce", "Soluciones web a medida", "Soporte y mantenimiento"], href: "/service/desarrollo-software" },
  { number: "02", icon: "◎", title: "Marketing digital & publicidad", description: "Estrategia y campañas que conectan con la audiencia correcta.", items: ["Estrategias de marketing digital", "Gestión de Meta Ads", "Campañas en Facebook e Instagram", "Meta Business Suite", "Segmentación de audiencias", "Optimización y seguimiento"], href: "/service/marketing-digital" },
  { number: "03", icon: "◈", title: "Fotografía & contenido creativo", description: "Imágenes que expresan la personalidad de cada proyecto.", items: ["Fotografía comercial", "Fotografía de productos", "Fotografía gastronómica", "Creación de contenido visual", "Edición y retoque fotográfico"], href: "/service/fotografia" },
  { number: "04", icon: "▷", title: "Video & redes sociales", description: "Contenido audiovisual con intención y una presencia constante.", items: ["Edición de videos", "Reels para Instagram y Facebook", "Producción audiovisual", "Contenido para campañas", "Gestión de publicaciones", "Administración de Facebook e Instagram"], href: "/service/video" },
];

export const toolGroups: ToolGroup[] = [
  { title: "Development", tools: ["JavaScript", "TypeScript", "React", "React Native", "Next.js", "WordPress", "WooCommerce", "HTML y CSS"] },
  { title: "Marketing & Creative", tools: ["Meta Ads", "Meta Business Suite", "Facebook", "Instagram", "Fotografía comercial", "Edición de video", "Creación de contenido"] },
];

export const experience: ExperienceEntry[] = [
  { company: "Web Studio Panamá", role: "Full Stack Developer", period: "Marzo 2026 — Presente" },
  { company: "Alaz", role: "Frontend Developer", period: "Febrero 2025 — Enero 2026" },
  { company: "Web Studio Panamá", role: "Front-End Developer", period: "Enero 2022 — Febrero 2025" },
  { company: "Target Marketing", role: "Front-End WordPress", period: "Junio 2020 — Enero 2022" },
];
