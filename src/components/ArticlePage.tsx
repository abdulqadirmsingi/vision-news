import { useParams } from 'react-router-dom';
import { Clock, Share2, Bookmark } from 'lucide-react';
import { mockArticles } from '../data/mockArticles';

export default function ArticlePage() {
  const { id } = useParams();
  const article = mockArticles.find(a => a.id === id);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-4 animate-fade-in">
        <span className="inline-block px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800 uppercase">
          {article.category}
        </span>
        
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
          {article.title}
        </h1>

        <div className="flex items-center space-x-4 text-gray-600">
          <div className="flex items-center">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
              alt={article.author}
              className="h-10 w-10 rounded-full"
            />
            <span className="ml-2">{article.author}</span>
          </div>
          <span>•</span>
          <time>{article.date}</time>
          <span>•</span>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {article.readTime}
          </div>
        </div>

        <div className="flex space-x-4">
          <button className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
            <Share2 className="h-4 w-4" />
            <span>Share</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
            <Bookmark className="h-4 w-4" />
            <span>Save</span>
          </button>
        </div>

        <div className="aspect-w-16 aspect-h-9 mt-8">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="object-cover w-full h-full rounded-lg shadow-lg"
          />
        </div>

        <div className="prose prose-lg max-w-none mt-8">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h2>The Impact on Modern Society</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <blockquote>
            "Innovation distinguishes between a leader and a follower." - Steve Jobs
          </blockquote>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
        </div>
      </div>
    </article>
  );
}