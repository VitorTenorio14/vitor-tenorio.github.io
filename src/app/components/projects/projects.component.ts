import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio.service';
import { TranslationService } from '../../services/translation.service';
import { Project } from '../../models/project.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent {
  private readonly service = inject(PortfolioDataService);
  private readonly translationService = inject(TranslationService);

  readonly projects$: Observable<Project[]> = this.service.getProjects().pipe(
    map(projects => projects ?? [])
  );

  // 🔤 Traduções do módulo Projects
  get translations() {
    return this.translationService.translations()?.projects ?? {
      title: 'Projects',
      featured: 'Featured Project',
      technologies: 'Technologies',
      viewProject: 'View Project',
      viewCode: 'View Code',
      viewMore: 'View More'
    };
  }

  // 🌍 Idioma atual
  get currentLanguage() {
    return this.translationService.currentLanguage();
  }

  getProjectTitle(project: Project): string {
  return project.translations[this.currentLanguage]?.title
    ?? project.translations.pt.title;
}

getProjectDescription(project: Project): string {
  return project.translations[this.currentLanguage]?.description
    ?? project.translations.pt.description;
}

  // 🆔 trackBy correto - ajustar para aceitar tipo genérico
  trackById(index: number, item: Project): string {
    return item.id;
  }

  // 📝 Textos padrão (fallback)
  get noTitleMessage(): string {
    return this.currentLanguage === 'pt'
      ? 'Projeto sem título'
      : 'Untitled project';
  }

  get noDescriptionMessage(): string {
    return this.currentLanguage === 'pt'
      ? 'Sem descrição disponível'
      : 'No description available';
  }

  get noProjectsMessage(): string {
    return this.currentLanguage === 'pt'
      ? 'Nenhum projeto disponível no momento.'
      : 'No projects available at the moment.';
  }

  // 🔽 Adicionar propriedade faltante (se necessário)
  showMoreProjects = false;

  // Método para alternar (se for usar)
  toggleShowMore() {
    this.showMoreProjects = !this.showMoreProjects;
  }
}