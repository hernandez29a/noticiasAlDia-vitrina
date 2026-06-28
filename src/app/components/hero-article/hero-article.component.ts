import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { newsArticles } from '../../core/data';

@Component({
  selector: 'app-hero-article',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-article.component.html'
})
export class HeroArticleComponent {
  article = newsArticles.find(n => n.isFeatured);
}
