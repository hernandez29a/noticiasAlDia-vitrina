import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  categories = ['Mercados', 'Empresas', 'Tecnología', 'Energía', 'Editoriales'];
}
