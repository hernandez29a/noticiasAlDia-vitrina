import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { initialMarketData } from '../../core/data';

@Component({
  selector: 'app-market-ticker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './market-ticker.component.html'
})
export class MarketTickerComponent {
  marketData = initialMarketData;
}
