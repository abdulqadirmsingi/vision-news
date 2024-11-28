import { useState } from 'react';
import { Category } from '../types';

export default function Navigation() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const categories: Category[] = ['all', 'world', 'technology', 'health', 'business', 'entertainment'];

  return (
    <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 px-4 md:px-0 py-2 md:py-0">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`capitalize ${
            activeCategory === category
              ? 'text-black font-semibold'
              : 'text-gray-600 hover:text-black'
          }`}
        >
          {category}
        </button>
      ))}
    </nav>
  );
}