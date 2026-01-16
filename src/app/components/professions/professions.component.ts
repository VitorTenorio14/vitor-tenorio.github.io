import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-professions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './professions.component.html',
})
export class ProfessionsComponent {
  translationService = inject(TranslationService);

  // Getter para experiências traduzidas
  get experiences() {
    const lang = this.translationService.currentLanguage();
    return [
      {
        title: lang === 'pt' 
          ? 'Analista de Sistemas Junior' 
          : 'Junior Systems Analyst',
        company: 'CYTEI Tecnologia',
        period: lang === 'pt' ? 'Ago 2024 - Presente' : 'Aug 2024 - Present',
        location: 'Brasília, DF',
        description: lang === 'pt'
          ? 'Analista e Desenvolvedor de Sistemas responsável por projetar, integrar e manter soluções de software, hardware e redes, assegurando alta disponibilidade, desempenho e alinhamento com as necessidades do negócio.'
          : 'Systems Analyst and Developer responsible for designing, integrating, and maintaining software, hardware, and network solutions, ensuring high availability, performance, and alignment with business needs.',
        technologies: ['Angular', 'Node.js', 'PostgreSQL', 'AWS', 'Azure', 'Docker', 'GO', 'Jira', 'Git & Gitlab'],
        achievements: lang === 'pt'
          ? [
              'Planejo e executo planos de testes (unitário, integração, aceitação), preparo documentação técnica e manuais de uso.',
              'Desenvolvo, reviso e mantenho código aplicando boas práticas, testes automatizados para entregas seguras e contínuas.',
              'Proponho e implemento melhorias contínuas que aumentam disponibilidade, reduzem custos operacionais e melhoram a experiência do usuário.',
              'Atuo em ambientes ágeis (Scrum/Kanban) e colaboro com times de produto, QA e operações.',
              'Lidero sessões de Daily e ajudo no refinamento do Backlog, aplicando conceitos de engenharia de software para garantir entregas dentro dos prazos planejados.'
            ]
          : [
              'Plan and execute testing plans (unit, integration, acceptance), prepare technical documentation and user manuals.',
              'Develop, review, and maintain code applying best practices and automated tests for safe and continuous deliveries.',
              'Propose and implement continuous improvements that increase availability, reduce operational costs, and improve user experience.',
              'Work in agile environments (Scrum/Kanban) and collaborate with product, QA, and operations teams.',
              'Lead Daily sessions and assist in Backlog refinement, applying software engineering concepts to ensure deliveries within planned deadlines.'
            ]
      },
      {
        title: lang === 'pt'
          ? 'Estagiário de tecnologia'
          : 'Technology Intern',
        company: 'CYTEI Tecnologia',
        period: lang === 'pt' ? 'Dez 2023 - Jul 2024' : 'Dec 2023 - Jul 2024',
        location: 'Brasília, DF',
        description: lang === 'pt'
          ? 'Atuação híbrida no ciclo de vida de desenvolvimento de software, unindo a implementação técnica de funcionalidades Full-Stack ao suporte estratégico na gestão de projetos e controle de fluxos ágeis.'
          : 'Hybrid role in the software development lifecycle, combining technical implementation of Full-Stack features with strategic support in project management and agile workflow control.',
        technologies: ['React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'Scrum/Kanban', 'Trello'],
        achievements: lang === 'pt'
          ? [
              'Desenvolvi e documentei módulos de integração Backend consumindo APIs REST, assegurando a padronização e escalabilidade do código.',
              'Otimizei o fluxo de trabalho da equipe no Trello, mapeando processos e reduzindo gargalos de comunicação entre stakeholders e desenvolvedores.',
              'Liderei sessões de Daily e ajudei no refinamento do Backlog, aplicando conceitos de engenharia de software para garantir entregas dentro dos prazos planejados.'
            ]
          : [
              'Developed and documented Backend integration modules consuming REST APIs, ensuring code standardization and scalability.',
              'Optimized team workflow in Trello, mapping processes and reducing communication bottlenecks between stakeholders and developers.',
              'Led Daily sessions and assisted in Backlog refinement, applying software engineering concepts to ensure deliveries within planned deadlines.'
            ]
      },
      {
        title: lang === 'pt'
          ? 'Técnico de Informática'
          : 'IT Technician',
        company: 'Expert Informática',
        period: lang === 'pt' ? 'Set 2021 - Mar 2024' : 'Sep 2021 - Mar 2024',
        location: 'Brasília, DF',
        description: lang === 'pt'
          ? 'Atuação estratégica em suporte de Nível 1 e 2, com foco em manutenção preventiva/corretiva de hardware e administração de infraestrutura de redes locais (LAN/WLAN). Especialista em configuração de rede e sistemas.'
          : 'Strategic Level 1 and 2 support role, focusing on preventive/corrective hardware maintenance and administration of local network infrastructure (LAN/WLAN). Network and systems configuration specialist.',
        technologies: lang === 'pt'
          ? ['Manutenção de Hardware', 'Redes LAN/WLAN', 'Sistemas Operacionais', 'Suporte Técnico']
          : ['Hardware Maintenance', 'LAN/WLAN Networks', 'Operating Systems', 'Technical Support'],
        achievements: lang === 'pt'
          ? [
              'Implementei infraestrutura de rede e suporte técnico para operação empresarial ou doméstica.',
              'Automatizei rotinas de backup e monitoramento de ativos via scripts, reduzindo o tempo de operação manual e riscos de perda de dados em 60%.',
              'Gerenciei o ciclo de vida de ativos de hardware e projetos de infraestrutura utilizando metodologias ágeis para entrega de metas de suporte.'
            ]
          : [
              'Implemented network infrastructure and technical support for business or residential operations.',
              'Automated backup and asset monitoring routines via scripts, reducing manual operation time and data loss risks by 60%.',
              'Managed hardware asset lifecycle and infrastructure projects using agile methodologies for support goal delivery.'
            ]
      }
    ];
  }

  // Método para trackBy
  trackByIndex(index: number): number {
    return index;
  }
}