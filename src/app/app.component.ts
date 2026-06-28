import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MarketTickerComponent } from './components/market-ticker/market-ticker.component';
import { HeroArticleComponent } from './components/hero-article/hero-article.component';
import { NewsGridComponent } from './components/news-grid/news-grid.component';
import { LatestNewsComponent } from './components/latest-news/latest-news.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    MarketTickerComponent,
    HeroArticleComponent,
    NewsGridComponent,
    LatestNewsComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'angular-vitrina';
}
