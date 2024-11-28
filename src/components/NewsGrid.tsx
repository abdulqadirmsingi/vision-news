import { Article } from '../types';
import ArticleCard from './ArticleCard';
import { mockArticles } from '../data/mockArticles';

export default function NewsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {mockArticles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}