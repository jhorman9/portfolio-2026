export interface ServiceDetail {
  slug: string;
  title: string;
  category: string;
  eyebrow: string;
  summary: string;
  introduction: string;
  includes: { title: string; description: string }[];
  approach: string[];
  related: string[];
}

export const servicePages: ServiceDetail[] = [
  {
    slug: "desarrollo-software",
    title: "Desarrollo de software",
    category: "Development",
    eyebrow: "WEB · APLICACIONES · ECOMMERCE",
    summary: "Productos digitales claros, funcionales y preparados para crecer.",
    introduction: "Trabajo en sitios web, aplicaciones y soluciones a medida con atención a la experiencia de usuario, el rendimiento y una base técnica mantenible. El alcance se define según las necesidades de cada proyecto.",
    includes: [
      { title: "Sitios web con React y Next.js", description: "Interfaces a medida, componentes reutilizables y experiencias responsive para distintos dispositivos." },
      { title: "Aplicaciones móviles", description: "Desarrollo de interfaces y funcionalidades móviles con React Native." },
      { title: "WordPress personalizado", description: "Sitios administrables adaptados a los contenidos y necesidades del negocio." },
      { title: "Ecommerce y WooCommerce", description: "Tiendas digitales con catálogo, estructura de compra y administración de productos." },
      { title: "Soluciones web a medida", description: "Funcionalidades e integraciones definidas alrededor de un problema concreto." },
      { title: "Soporte y mantenimiento", description: "Ajustes, mejoras y acompañamiento técnico después del lanzamiento." },
    ],
    approach: ["Entender los objetivos, usuarios y alcance del producto.", "Definir la estructura y desarrollar una experiencia usable en cada pantalla.", "Revisar funcionamiento, rendimiento y necesidades de mantenimiento."],
    related: ["marketing-digital", "fotografia"],
  },
  {
    slug: "marketing-digital",
    title: "Marketing digital",
    category: "Marketing",
    eyebrow: "ESTRATEGIA · CAMPAÑAS · CONTENIDO",
    summary: "Una estrategia digital conectada con las personas y los canales adecuados.",
    introduction: "Combino planificación, contenido y publicidad digital para dar coherencia a la presencia de una marca. Cada acción parte de sus objetivos, audiencia y recursos disponibles.",
    includes: [
      { title: "Estrategia digital", description: "Definición de objetivos, canales, mensajes y prioridades para orientar las acciones." },
      { title: "Planificación de contenido", description: "Organización de temas, formatos y publicaciones para Facebook e Instagram." },
      { title: "Publicidad en Meta", description: "Campañas en Facebook e Instagram mediante Meta Ads, con audiencias y seguimiento definidos." },
      { title: "Presencia en redes sociales", description: "Gestión de publicaciones y coordinación de contenido visual y audiovisual." },
      { title: "Seguimiento", description: "Revisión de resultados disponibles para ajustar mensajes, contenido y campañas." },
    ],
    approach: ["Identificar objetivos, públicos y canales prioritarios.", "Preparar mensajes, contenido y campañas acordes al alcance.", "Revisar los datos disponibles y ajustar las acciones."],
    related: ["meta-ads", "redes-sociales", "fotografia"],
  },
  {
    slug: "meta-ads",
    title: "Meta Ads",
    category: "Marketing",
    eyebrow: "FACEBOOK · INSTAGRAM · PUBLICIDAD",
    summary: "Campañas publicitarias planificadas para llegar a audiencias relevantes.",
    introduction: "Apoyo la configuración, administración y optimización de campañas en Facebook e Instagram. El trabajo se adapta al objetivo publicitario, los recursos creativos y los datos que tenga disponibles cada negocio.",
    includes: [
      { title: "Configuración de Meta Business Suite", description: "Organización de los activos y ajustes necesarios para administrar la presencia y la publicidad." },
      { title: "Estructura de campañas", description: "Preparación de campañas, conjuntos de anuncios y anuncios según el objetivo definido." },
      { title: "Segmentación de audiencias", description: "Selección de públicos y ubicaciones en función de la oferta y el alcance de la campaña." },
      { title: "Creatividad publicitaria", description: "Coordinación de textos, imágenes o video para comunicar la propuesta con claridad." },
      { title: "Seguimiento y optimización", description: "Revisión de métricas disponibles y ajustes durante la ejecución." },
    ],
    approach: ["Acordar objetivo, presupuesto y activos disponibles.", "Configurar la campaña y revisar anuncios antes de publicarlos.", "Dar seguimiento a las métricas y proponer ajustes basados en los datos."],
    related: ["marketing-digital", "fotografia", "video"],
  },
  {
    slug: "fotografia",
    title: "Fotografía comercial",
    category: "Creative",
    eyebrow: "PRODUCTO · GASTRONOMÍA · CONTENIDO",
    summary: "Imágenes pensadas para mostrar cada producto, espacio o idea con intención.",
    introduction: "Desarrollo contenido fotográfico para comunicación comercial y canales digitales, desde la planificación de las tomas hasta la edición final según el uso previsto.",
    includes: [
      { title: "Fotografía de productos", description: "Imágenes que muestran detalles, características y presentación del producto." },
      { title: "Fotografía gastronómica", description: "Contenido visual para menús, redes sociales y comunicación de propuestas gastronómicas." },
      { title: "Fotografía comercial", description: "Imágenes para sitios web, piezas publicitarias y presencia de marca." },
      { title: "Edición y retoque", description: "Selección y ajustes de las imágenes para el formato y canal acordados." },
    ],
    approach: ["Definir el objetivo, estilo y uso de las imágenes.", "Planificar y producir las tomas necesarias.", "Seleccionar, editar y preparar el material para sus canales."],
    related: ["video", "marketing-digital"],
  },
  {
    slug: "video",
    title: "Video y producción audiovisual",
    category: "Creative",
    eyebrow: "REELS · EDICIÓN · CAMPAÑAS",
    summary: "Contenido en movimiento para contar ideas y conectar con la audiencia.",
    introduction: "Creo y edito piezas audiovisuales para redes sociales y campañas digitales, adaptando el mensaje, el ritmo y el formato al canal donde se publicará.",
    includes: [
      { title: "Edición de video", description: "Montaje y ajustes de piezas audiovisuales a partir del material disponible." },
      { title: "Reels para Instagram y Facebook", description: "Contenido vertical breve pensado para el lenguaje de estas plataformas." },
      { title: "Producción audiovisual", description: "Planificación y creación de contenido en video de acuerdo con el proyecto." },
      { title: "Contenido para campañas", description: "Piezas audiovisuales orientadas a una idea, oferta o mensaje publicitario." },
    ],
    approach: ["Definir mensaje, formato y canal de publicación.", "Planificar y preparar el material audiovisual.", "Editar y revisar la pieza final para el uso acordado."],
    related: ["redes-sociales", "meta-ads", "fotografia"],
  },
  {
    slug: "redes-sociales",
    title: "Gestión de redes sociales",
    category: "Marketing & Creative",
    eyebrow: "FACEBOOK · INSTAGRAM · PUBLICACIONES",
    summary: "Una presencia social organizada, coherente y conectada con el contenido.",
    introduction: "Apoyo la planificación y administración de publicaciones en Facebook e Instagram, conectando el calendario de contenido con la comunicación visual y los objetivos de la marca.",
    includes: [
      { title: "Planificación de publicaciones", description: "Organización de temas, formatos y fechas para mantener una comunicación constante." },
      { title: "Administración de Facebook e Instagram", description: "Preparación y gestión de publicaciones en los canales acordados." },
      { title: "Contenido visual", description: "Coordinación de fotografías, piezas gráficas y video para cada publicación." },
      { title: "Seguimiento de contenido", description: "Revisión de las señales y métricas disponibles para orientar próximos contenidos." },
    ],
    approach: ["Conocer la marca, la audiencia y los canales activos.", "Organizar el contenido y preparar las publicaciones.", "Revisar lo publicado y ajustar la planificación."],
    related: ["marketing-digital", "fotografia", "video"],
  },
];

export function getServiceBySlug(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}
