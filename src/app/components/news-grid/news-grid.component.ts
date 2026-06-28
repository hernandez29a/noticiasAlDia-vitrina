import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { newsArticles } from '../../core/data';

@Component({
  selector: 'app-news-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-grid.component.html'
})
export class NewsGridComponent {
  articles = newsArticles.filter(n => !n.isFeatured);
}
