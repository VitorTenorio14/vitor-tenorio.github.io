import { Injectable, signal, computed } from '@angular/core';

export type Language = 'pt' | 'en';

export interface Translations {
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    education: string;
    experience: string;
  };
  hero: {
    greeting: string;
    roles: string[];
    description: string;
    cta: string;
  };
  about: {
    title: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
  };
  skills: {
    title: string;
    categories: {
      frontend: string;
      backend: string;
      devops: string;
      tools: string;
    };
  };
  projects: {
    title: string;
    featured: string;
    technologies: string;
    viewProject: string;
    viewCode: string;
    viewMore: string;
  };
  education: {
    title: string;
    education: string;
    degree: string;
    institution: string;
    period: string;
    description: string;
    skills: string;
  };
  experience: {
    sectionTitle: string;
    subtitle: string;
    achievements: string;
    technologies: string;
    location: string;
    period: string;
    description: string;
    company: string;
    position: string;
  };
  theme: {
    light: string;
    dark: string;
  };
  footer: {
    name: string;
    about: string;
    skills: string;
    projects: string;
    education: string;
    experience: string;
    rights: string;
  };
  common: {
    loading: string;
    error: string;
    success: string;
    seeMore: string;
    contact: string;
    downloadCV: string;
  };
  menu: string;
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  // 🔒 Estado interno
  private readonly language = signal<Language>(this.getInitialLanguage());

  // 🌍 Todas as traduções (imutável)
  private readonly translationsMap: Record<Language, Translations> =
    this.getTranslations();

  // 🌍 API pública
  readonly currentLanguage = computed(() => this.language());

  /** 🔑 Traduções reativas */
  readonly translations = computed<Translations>(() => {
    return this.translationsMap[this.language()];
  });

  /** 🔑 Alias semântico (para usar no HTML: translation.current.xxx) */
  get current(): Translations {
    return this.translations();
  }

  toggleLanguage(): void {
    const newLang: Language = this.language() === 'pt' ? 'en' : 'pt';
    this.setLanguage(newLang);
  }

  setLanguage(lang: Language): void {
    this.language.set(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
  }

  private getInitialLanguage(): Language {
    const saved = localStorage.getItem('language') as Language | null;
    if (saved === 'pt' || saved === 'en') return saved;

    const browserLang = navigator.language.split('-')[0];
    return browserLang === 'pt' || browserLang === 'en' ? browserLang : 'pt';
  }

  private getTranslations(): Record<Language, Translations> {
    return {
      pt: {
        nav: {
          home: 'Home',
          about: 'Sobre',
          skills: 'Skills',
          projects: 'Projetos',
          education: 'Formações',
          experience: 'Experiência'
        },
        hero: {
          greeting: 'Olá, seja bem-vindo(a)!',
          roles: ['Desenvolvedor de Software', 'Analista de Sistemas', 'Gerente de Projetos'],
          description:
            'Analista de sistemas e Gerente de Projetos com expertise em liderar o desenvolvimento ' +
            'de soluções tecnológicas de ponta a ponta — desde análise de viabilidade e arquitetura ' +
            'até entrega final — assegurando performance, escalabilidade e governança de excelência.',
          cta: 'Ver Projetos'
        },
        about: {
            title: 'Sobre Mim',
            paragraph1:
              'Sou Analista de Sistemas e Gerente de Projetos, formado em Análise e Desenvolvimento de Sistemas, com paixão por tecnologia, inovação e entrega de soluções que geram valor real.',

            paragraph2:
              'Analista de Sistemas e Gerente de Projetos com sólida experiência na liderança de equipes técnicas, organização de demandas, acompanhamento de entregas e organização de projetos que atendem aos objetivos do negócio com eficiência, clareza e qualidade.',

            paragraph3:
              'Atuo como desenvolvedor fullstack, com forte domínio em frontend (Angular, TypeScript, Chart.js) e backend (Node.js e Go), sempre focado em criar aplicações escaláveis, responsivas, seguras e com ótima experiência para o usuário.'
          },
        skills: {
          title: 'Habilidades',
          categories: {
            frontend: 'Frontend',
            backend: 'Backend',
            devops: 'DevOps & Cloud',
            tools: 'Ferramentas'
          }
        },
        projects: {
          title: 'Projetos',
          featured: 'Projeto em Destaque',
          technologies: 'Tecnologias',
          viewProject: 'Ver Projeto',
          viewCode: 'Ver Código',
          viewMore: 'Ver Mais'
        },
        education: {
          title: 'Formação Acadêmica',
          education: 'Formações Acadêmicas',
          degree: 'Curso',
          institution: 'Instituição',
          period: 'Período',
          description: 'Descrição',
          skills: 'Competências Desenvolvidas'
        },
        experience: {
        sectionTitle: 'Experiência Profissional',
        subtitle: 'Minha jornada profissional e contribuições significativas em cada posição',
        achievements: 'Realizações',
        technologies: 'Tecnologias',
        location: 'Localização',
        period: 'Período',
        description: 'Descrição',
        company: 'Empresa',
        position: 'Cargo'
        },
        theme: {
          light: 'Modo Claro',
          dark: 'Modo Escuro'
        },
        footer: {
          name: 'Vitor Tenorio',
          about: 'Sobre',
          skills: 'Skills',
          projects: 'Projetos',
          education: 'Formações',
          experience: 'Experiência',
          rights: 'Todos os direitos reservados'
        },
        common: {
          loading: 'Carregando...',
          error: 'Ocorreu um erro',
          success: 'Sucesso!',
          seeMore: 'Ver Mais',
          contact: 'Contato',
          downloadCV: 'Baixar CV'
        },
        menu: 'Menu'
      },

      en: {
        nav: {
          home: 'Home',
          about: 'About',
          skills: 'Skills',
          projects: 'Projects',
          education: 'Education',
          experience: 'Experience'
        },
        hero: {
          greeting: 'Hello, welcome!',
          roles: ['Software Engineer', 'Systems Analyst', 'Project Manager'],
          description:
            'Systems Analyst and Project Manager with expertise in leading the development ' +
            'of end-to-end technological solutions — from feasibility analysis and architecture ' +
            'to final delivery — ensuring performance, scalability, and governance excellence.',
          cta: 'View Projects'
        },
        about: {
  title: 'About Me',
  paragraph1:
    'I am a Systems Analyst and Project Manager, graduated in Systems Analysis and Development, with a passion for technology, innovation, and delivering solutions that generate real value.',

  paragraph2:
    'Systems Analyst and Project Manager with solid experience leading technical teams, organizing demands, monitoring deliveries, and managing projects that meet business objectives with efficiency, clarity, and quality.',

  paragraph3:
    'I work as a fullstack developer, with strong expertise in frontend (Angular, TypeScript, Chart.js) and backend (Node.js and Go), always focused on building scalable, responsive, secure applications with an excellent user experience.'
},
        skills: {
          title: 'Skills',
          categories: {
            frontend: 'Frontend',
            backend: 'Backend',
            devops: 'DevOps & Cloud',
            tools: 'Tools'
          }
        },
        projects: {
          title: 'Projects',
          featured: 'Featured Project',
          technologies: 'Technologies',
          viewProject: 'View Project',
          viewCode: 'View Code',
          viewMore: 'View More'
        },
        education: {
          title: 'Education & Certifications',
          education: 'Academic Education',
          degree: 'Degree',
          institution: 'Institution',
          period: 'Period',
          description: 'Description',
          skills: 'Developed Skills'
        },
        experience: {
        sectionTitle: 'Professional Experience',
        subtitle: 'My professional journey and significant contributions in each position',
        achievements: 'Achievements',
        technologies: 'Technologies',
        location: 'Location',
        period: 'Period',
        description: 'Description',
        company: 'Company',
        position: 'Position'
        },
        theme: {
          light: 'Light Mode',
          dark: 'Dark Mode'
        },
        footer: {
          name: 'Vitor Tenorio',
          about: 'About',
          skills: 'Skills',
          projects: 'Projects',
          education: 'Education',
          experience: 'Experience',
          rights: 'All rights reserved'
        },
        common: {
          loading: 'Loading...',
          error: 'An error occurred',
          success: 'Success!',
          seeMore: 'See More',
          contact: 'Contact',
          downloadCV: 'Download CV'
        },
        menu: 'Menu'
      }
    };
  }
}
