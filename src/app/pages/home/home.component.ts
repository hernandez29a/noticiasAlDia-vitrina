import { Component, inject, OnInit, signal } from '@angular/core';
import { HeroArticleComponent } from '../../components/hero-article/hero-article.component';
import { NewsGridComponent } from '../../components/news-grid/news-grid.component';
import { LatestNewsComponent } from '../../components/latest-news/latest-news.component';
import { NewsService } from '../../services/news.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HeroArticleComponent, NewsGridComponent, LatestNewsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  private newsService = inject(NewsService);
  
  newsList = signal<any[]>([]);
  featuredArticle = signal<any>(null);
  gridNews = signal<any[]>([]);
  latestNews = signal<any[]>([]);
  isLoading = signal<boolean>(true);

  ngOnInit() {
    this.newsService.getPublicNews(1, 20).subscribe({
      next: (res) => {
        const data = res.data;
        this.newsList.set(data);
        if (data.length > 0) {
          this.featuredArticle.set(data[0]);
          this.latestNews.set(data.slice(1, 6));
          this.gridNews.set(data.slice(6));
        }
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Error fetching news', err);
        this.isLoading.set(false);
      }
    });
  }
}
