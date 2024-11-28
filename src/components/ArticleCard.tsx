import { Link } from 'react-router-dom';
import { Article } from '../types';
import { Clock } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link to={`/article/${article.id}`} className="block">
      <article className="group cursor-pointer transform transition-all duration-300 hover:-translate-y-1">
        <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow-md group-hover:shadow-xl">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="mt-4">
          <span className="inline-block px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800 uppercase">
            {article.category}
          </span>
          <h3 className="mt-2 text-xl font-semibold group-hover:text-gray-600 line-clamp-2">
            {article.title}
          </h3>
          <p className="mt-2 text-gray-600 line-clamp-2">{article.excerpt}</p>
          <div className="mt-4 flex items-center text-sm text-gray-500">
            <span>{article.author}</span>
            <span className="mx-2">•</span>
            <time>{article.date}</time>
            {article.readTime && (
              <>
                <span className="mx-2">•</span>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {article.readTime}
                </div>
              </>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}