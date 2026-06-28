import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { latestNews } from '../../core/data';

@Component({
  selector: 'app-latest-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './latest-news.component.html'
})
export class LatestNewsComponent {
  latest = latestNews;
}
