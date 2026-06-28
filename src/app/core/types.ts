export interface NewsItem {
  id: string;
  category: string;
  title: string;
  summary: string;
  author: string;
  timestamp: Date;
  image: string;
  isFeatured?: boolean;
}

export interface MarketData {
  symbol: string;
  name: string;
  value: number;
  changePercent: number;
}
