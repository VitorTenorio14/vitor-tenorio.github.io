import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero.component.html'
})
export class HeroComponent {
  private translationService = inject(TranslationService);

  get hero() {
    return this.translationService.translations().hero;
  }
}
