export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  imageUrl: string;
  date: string;
  author: string;
  readTime?: string;
  relatedArticles?: string[];
}

export type Category = 'all' | 'world' | 'technology' | 'health' | 'business' | 'entertainment';

export interface HeaderProps {
  isTransparent: boolean;
}