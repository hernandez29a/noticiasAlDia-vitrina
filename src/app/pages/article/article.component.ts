import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NewsService } from '../../services/news.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private newsService = inject(NewsService);
  private titleService = inject(Title);
  private metaService = inject(Meta);

  article = signal<any>(null);
  isLoading = signal<boolean>(true);

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      if (slug) {
        this.isLoading.set(true);
        this.newsService.getNewsBySlug(slug).subscribe({
          next: (res) => {
            this.article.set(res);
            this.setSeoTags(res);
            this.isLoading.set(false);
          },
          error: (err) => {
            console.error('Error fetching article', err);
            this.isLoading.set(false);
          }
        });
      }
    });
  }

  private setSeoTags(article: any) {
    if (!article) return;
    
    this.titleService.setTitle(`${article.title} - Vitrina`);
    
    this.metaService.updateTag({ name: 'description', content: article.title });
    this.metaService.updateTag({ property: 'og:title', content: article.title });
    this.metaService.updateTag({ property: 'og:description', content: article.title });
    if (article.cover_image_url) {
      this.metaService.updateTag({ property: 'og:image', content: article.cover_image_url });
    }
  }
}
