import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/v1/public/news';

  getPublicNews(page: number = 1, limit: number = 10, category?: string): Observable<any> {
    let url = `${this.apiUrl}?page=${page}&limit=${limit}`;
    if (category) {
      url += `&category=${category}`;
    }
    return this.http.get<any>(url);
  }

  getNewsBySlug(slug: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${slug}`);
  }
}
