import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-news-grid',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './news-grid.component.html'
})
export class NewsGridComponent {
  @Input() news: any[] = [];
}
