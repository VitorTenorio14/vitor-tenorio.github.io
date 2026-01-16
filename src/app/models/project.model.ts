export interface ProjectTranslation {
  title: string;
  description: string;
}

export interface Project {
  id: string;
   title?: string;      
  description?: string;
  translations: {
    pt: ProjectTranslation;
    en: ProjectTranslation;
  };
  image: string;
  technologies: string[];
  links?: {
    github?: string;
    demo?: string;
    live?: string;
  };
  featured?: boolean;
  date?: string;
}