import { TrendingUp, Flame } from 'lucide-react';
import { mockArticles } from '../data/mockArticles';

export default function HeroSection() {
  const featuredArticle = mockArticles[0];
  const trendingArticles = mockArticles.slice(1, 3);

  return (
    <section className="relative mb-12">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="relative group overflow-hidden rounded-xl">
            <img
              src={featuredArticle.imageUrl}
              alt={featuredArticle.title}
              className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 p-6 text-white">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-red-500 text-white mb-4">
                <Flame className="w-4 h-4 mr-1" />
                Breaking News
              </span>
              <h2 className="text-3xl font-bold mb-2 group-hover:text-gray-200 transition-colors">
                {featuredArticle.title}
              </h2>
              <p className="text-gray-200 mb-4">{featuredArticle.excerpt}</p>
              <div className="flex items-center text-sm text-gray-300">
                <span>{featuredArticle.author}</span>
                <span className="mx-2">•</span>
                <span>{featuredArticle.date}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center space-x-2 mb-4">
            <TrendingUp className="w-5 h-5 text-red-500" />
            <h3 className="text-xl font-semibold">Trending Now</h3>
          </div>
          {trendingArticles.map((article) => (
            <div
              key={article.id}
              className="group cursor-pointer bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
            >
              <span className="text-sm text-gray-500 mb-2 block">{article.category}</span>
              <h4 className="font-semibold group-hover:text-gray-600 mb-2">
                {article.title}
              </h4>
              <div className="flex items-center text-sm text-gray-500">
                <span>{article.author}</span>
                <span className="mx-2">•</span>
                <span>{article.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}