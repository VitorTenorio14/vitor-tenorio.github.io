import { Component, ChangeDetectionStrategy, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { PortfolioDataService } from '../../services/portfolio.service';
import { Skill, SkillCategory } from '../../models/skill.model';
import { getSkillIconPath } from './skills.icons';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './skills.component.html'
})
export class SkillsComponent implements OnInit {
  private readonly service = inject(PortfolioDataService);
  private translationService = inject(TranslationService);

  readonly skillsByCategory$: Observable<Map<SkillCategory, Skill[]>> =
    this.service.getSkillsByCategory();

  // Obter traduções
  get translations() {
    return this.translationService.translations();
  }

  // Obter categoria atual
  get currentLanguage() {
    return this.translationService.currentLanguage();
  }

  // Categories com labels traduzidos
  get categories(): SkillCategory[] {
    return [
      SkillCategory.FRONTEND,
      SkillCategory.BACKEND,
      SkillCategory.DEVOPS,
      SkillCategory.TOOLS
    ];
  }

  // Cache para ícones carregados
  private loadedIcons = new Set<string>();

  ngOnInit(): void {
    this.preloadImportantIcons();
  }

  /**
   * Retorna o caminho do ícone SVG
   */
  getIconPath(iconKey: string): string {
    const path = getSkillIconPath(iconKey);
    // Marca como carregado após um breve delay
    setTimeout(() => {
      this.loadedIcons.add(iconKey);
    }, 50);
    return path;
  }

  /**
   * Verifica se o ícone foi carregado
   */
  iconLoaded(iconKey: string): boolean {
    return this.loadedIcons.has(iconKey);
  }

  /**
   * Trata erro ao carregar imagem, mostrando ícone padrão
   */
  onImageError(event: Event, iconKey: string): void {
    const imgElement = event.target as HTMLImageElement;
    if (imgElement) {
      console.warn(`Ícone não carregado: ${iconKey}`);
      imgElement.src = getSkillIconPath('default');
      // Remove do cache de carregados
      this.loadedIcons.delete(iconKey);
    }
  }

  /**
   * Obtém as iniciais para fallback visual
   */
  getInitials(name: string): string {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .substring(0, 2);
  }

  /**
   * Retorna o rótulo traduzido para a categoria
   */
  getCategoryLabel(category: SkillCategory): string {
    const labels: Record<SkillCategory, string> = {
      [SkillCategory.FRONTEND]: this.translations?.skills?.categories?.frontend || 'Frontend',
      [SkillCategory.BACKEND]: this.translations?.skills?.categories?.backend || 'Backend',
      [SkillCategory.DEVOPS]: this.translations?.skills?.categories?.devops || 'DevOps & Cloud',
      [SkillCategory.TOOLS]: this.translations?.skills?.categories?.tools || 'Ferramentas'
    };
    return labels[category] || category.toString();
  }

  /**
   * Pré-carrega ícones importantes para melhor UX
   */
  private preloadImportantIcons(): void {
    const importantIcons = ['angular', 'react', 'typescript', 'javascript', 'html5', 'css3'];
    
    importantIcons.forEach(icon => {
      const img = new Image();
      img.src = getSkillIconPath(icon);
      img.onload = () => {
        this.loadedIcons.add(icon);
      };
      img.onerror = () => {
        console.warn(`Falha ao pré-carregar ícone: ${icon}`);
      };
    });
  }

  /**
   * TrackBy function para performance
   */
  trackByName(_: number, skill: Skill): string {
    return skill.name;
  }

  /**
   * TrackBy para categorias
   */
  trackByCategory(_: number, category: SkillCategory): string {
    return category;
  }
}