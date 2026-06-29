import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-latest-news',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './latest-news.component.html'
})
export class LatestNewsComponent {
  @Input() news: any[] = [];
}
