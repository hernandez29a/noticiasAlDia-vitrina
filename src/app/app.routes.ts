import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent) },
  { path: ':slug', loadComponent: () => import('./pages/article/article.component').then(c => c.ArticleComponent) }
];
