import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Skill, SkillCategory } from '../models/skill.model';
import { Project } from '../models/project.model';
import { Social } from '../models/social.model';
import { NavItem, PersonalInfo, PortfolioData } from '../models/portfolio.model';


  @Injectable({
    providedIn: 'root'
  })
  export class PortfolioDataService {
    
    /**
     * Informações pessoais
     */
    private personalInfo: PersonalInfo = {
      name: 'Sou, Vitor Tenorio',
      title: 'Desenvolvedor Full Stack',
      description: 'Desenvolvedor apaixonado por criar soluções inovadoras e eficientes. Especializado em desenvolvimento web moderno com foco em experiência do usuário.',
      email: 'vitortenorio14@hotmail.com',
      phone: '+55 (61) 99666-7222',
      location: 'Brasília, Brasil',
      profileImage: 'assets/images/profile.jpg',
      aboutImage: 'assets/images/about.jpg',
      aboutText: 'Sou um desenvolvedor full stack com experiência em criar aplicações web modernas e escaláveis. Com formação em Ciência da Computação e mais de 3 anos de experiência, tenho trabalhado com diversas tecnologias e frameworks. Minha paixão é transformar ideias em código limpo e eficiente, sempre buscando as melhores práticas e soluções inovadoras. Adoro aprender novas tecnologias e compartilhar conhecimento com a comunidade.',
      cvUrl: 'assets/cv.pdf'
    };

    /**
     * Redes sociais
     */
    private socials: Social[] = [
      {
        name: 'GitHub',
        url: 'https://github.com/VitorTenorio14',
        icon: '🐙',
        ariaLabel: 'Visite meu GitHub'
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/vitor-tenorio-7baba5276/',
        icon: '💼',
        ariaLabel: 'Conecte-se no LinkedIn'
      },
    ];

    /**
     * Habilidades técnicas
     */
    private skills: Skill[] = [
      // Frontend
      { name: 'Angular', icon: 'angular', category: SkillCategory.FRONTEND},
      { name: 'React', icon: 'react', category: SkillCategory.FRONTEND},
      { name: 'TypeScript', icon: 'typescript', category: SkillCategory.FRONTEND},
      { name: 'JavaScript', icon: 'javascript', category: SkillCategory.FRONTEND},
      { name: 'HTML5', icon: 'html5', category: SkillCategory.FRONTEND},
      { name: 'CSS3', icon: 'css3', category: SkillCategory.FRONTEND},
      { name: 'Tailwind CSS', icon: 'tailwind', category: SkillCategory.FRONTEND},
      
      // Backend
      { name: 'Node.js', icon: 'nodejs', category: SkillCategory.BACKEND},
      { name: 'Python', icon: 'python', category: SkillCategory.BACKEND},
      { name: 'Go (Golang)', icon: 'golang', category: SkillCategory.BACKEND},
      { name: 'PostgreSQL', icon: 'postgresql', category: SkillCategory.BACKEND},
      { name: 'MongoDB', icon: 'mongodb', category: SkillCategory.BACKEND},
            
      // DevOps
      { name: 'Docker', icon: 'docker', category: SkillCategory.DEVOPS},
      { name: 'Git', icon: 'git', category: SkillCategory.DEVOPS},
      { name: 'AWS', icon: 'aws', category: SkillCategory.DEVOPS},
      { name: 'Azure', icon: 'azure', category: SkillCategory.DEVOPS},
      { name: 'Kubernetes', icon: 'kubernetes', category: SkillCategory.DEVOPS},
      
      // Ferramentas
      { name: 'VS Code', icon: 'vscode', category: SkillCategory.TOOLS},
      { name: 'Figma', icon: 'figma', category: SkillCategory.TOOLS},
      { name: 'Postman', icon: 'postman', category: SkillCategory.TOOLS},
      { name: 'GitHub', icon: 'github', category: SkillCategory.TOOLS},
      { name: 'Jira', icon: 'jira', category: SkillCategory.TOOLS},
    ];

    /**
     * Projetos 
     */
    private projects: Project[] = [
  {
    id: '1',
    translations: {
      pt: {
        title: 'Calculadora de economia de energia',
        description: 'Projeto full-stack para calcular economia ao migrar para energia renovável.'
      },
      en: {
        title: 'Energy Savings Calculator',
        description: 'Full-stack project to calculate savings when migrating to renewable energy.'
      }
    },
    image: '/assets/images/cal.png',
    technologies: ['Angular', 'Tailwind CSS', 'Node.js', 'Express', 'TypeScript', 'SQLite', 'Vercel'],
    links: {
      demo: 'https://calculadora-economia-energia.vercel.app'
    },
    featured: true,
    date: '2026'
  },
  {
    id: '2',
    translations: {
      pt: {
        title: 'Gerador de senhas com CSS',
        description: 'Projeto em CSS de um gerador de senhas fortes com opções de personalização.'
      },
      en: {
        title: 'CSS Password Generator',
        description: 'CSS-based project for generating strong passwords with customization options.'
      }
    },
    image: '/assets/images/sen.png',
    technologies: ['CSS', 'JavaScript', 'HTML'],
    links: {
      github: 'https://github.com/VitorTenorio14/gerador_senhas'
    },
    featured: true,
    date: '2025'
  },
  {
    id: '3',
    translations: {
      pt: {
        title: 'Quicknotes',
        description: 'Sistema de gerenciamento de notas rápidas desenvolvido em Go, focado em performance e escalabilidade.'
      },
      en: {
        title: 'Quicknotes',
        description: 'Quick notes management system developed in Go, focused on performance and scalability.'
      }
    },
    image: '/assets/images/pgo.png',
    technologies: ['GO', 'Docker', 'PostgreSQL', 'REST API'],
    links: {
      github: 'https://github.com/seuusuario/weather',
      demo: 'https://demo-weather.com'
    },
    date: '2026'
  }
];

    /**
     * Itens de navegação
     */
    private navigation: NavItem[] = [
      { label: 'Início', sectionId: 'hero' },
      { label: 'Sobre', sectionId: 'about' },
      { label: 'Habilidades', sectionId: 'skills' },
      { label: 'Projetos', sectionId: 'projects' },
      { label: 'Formações', sectionId: 'education' },
      { label: 'Profissões', sectionId: 'professions' }
    ];

    /**
     * Retorna todos os dados do portfolio
     */
    getPortfolioData(): Observable<PortfolioData> {
      return of({
        personalInfo: this.personalInfo,
        socials: this.socials,
        skills: this.skills,
        projects: this.projects,
        navigation: this.navigation
      });
    }

    /**
     * Retorna apenas informações pessoais
     */
    getPersonalInfo(): Observable<PersonalInfo> {
      return of(this.personalInfo);
    }

    /**
     * Retorna apenas redes sociais
     */
    getSocials(): Observable<Social[]> {
      return of(this.socials);
    }

    /**
     * Retorna habilidades agrupadas por categoria
     */
    getSkillsByCategory(): Observable<Map<SkillCategory, Skill[]>> {
      const skillsMap = new Map<SkillCategory, Skill[]>();
      
      this.skills.forEach(skill => {
        if (!skillsMap.has(skill.category)) {
          skillsMap.set(skill.category, []);
        }
        skillsMap.get(skill.category)?.push(skill);
      });
      
      return of(skillsMap);
    }

    /**
     * Retorna projetos, com opção de filtrar apenas destacados
     */
    getProjects(featuredOnly: boolean = false): Observable<Project[]> {
      const projects = featuredOnly 
        ? this.projects.filter(p => p.featured)
        : this.projects;
      return of(projects);
    }

    /**
     * Retorna um projeto específico por ID
     */
    getProjectById(id: string): Observable<Project | undefined> {
      return of(this.projects.find(p => p.id === id));
    }

    
  }