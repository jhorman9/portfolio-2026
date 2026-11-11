export interface PortfolioProject {
  id: number;
  slug: string;
  title: string;
  category: string;
  discipline?: string;
  image: string;
  description: string;
  client: string;
  date: string;
  location: string;
  technologies: string[];
  fullDescription: string;
  features: string[];
  liveUrl: string;
  githubUrl: string;
}

export interface Brand {
  name: string;
  logo: string;
  url: string;
}

export interface Service {
  number: string;
  icon: string;
  title: string;
  description: string;
  items: string[];
  href: string | null;
}

export interface ToolGroup {
  title: string;
  tools: string[];
}

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
}
