import { Category } from '../types';
import { mockArticles } from '../data/mockArticles';

export default function CategoryHighlights() {
  const categories: Category[] = ['world', 'technology', 'health'];
  
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-8">Category Highlights</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((category) => {
          const categoryArticles = mockArticles.filter(a => a.category === category).slice(0, 1);
          return (
            <div key={category} className="space-y-4">
              <h3 className="text-xl font-semibold capitalize">{category}</h3>
              {categoryArticles.map((article) => (
                <div
                  key={article.id}
                  className="group cursor-pointer"
                >
                  <div className="aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-lg">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="font-semibold group-hover:text-gray-600 line-clamp-2 mb-2">
                    {article.title}
                  </h4>
                  <p className="text-gray-600 text-sm line-clamp-2">{article.excerpt}</p>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
}