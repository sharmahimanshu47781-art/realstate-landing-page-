export interface HeroData {
  badgeText: string;
  trendingText: string;
  title: {
    prefix: string;
    highlight: string;
    suffix: string;
  };
  description: string;
  priceInfo: {
    label: string;
    value: string;
  };
  image: {
    url: string;
    alt: string;
  };
}
