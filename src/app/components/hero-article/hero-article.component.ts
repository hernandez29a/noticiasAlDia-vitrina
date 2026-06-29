import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero-article',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hero-article.component.html'
})
export class HeroArticleComponent {
  @Input() article: any;
}
