import { Skill } from './skill.model';
import { Project } from './project.model';
import { Social } from './social.model';

/**
 * Informações pessoais exibidas no portfolio
 */
export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  email: string;
  phone?: string;
  location?: string;
  profileImage: string;
  aboutImage?: string;
  aboutText: string;
  cvUrl?: string;
}

/**
 * Item de navegação do header
 */
export interface NavItem {
  label: string;
  sectionId: string;
}

/**
 * Estrutura completa do portfolio
 */
export interface PortfolioData {
  personalInfo: PersonalInfo;
  socials: Social[];
  skills: Skill[];
  projects: Project[];
  navigation: NavItem[];
}
