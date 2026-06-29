import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MarketTickerComponent } from './components/market-ticker/market-ticker.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    MarketTickerComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'angular-vitrina';
}
