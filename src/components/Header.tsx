import { Search, Menu, X, Eye } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import { useScrollPosition } from '../hooks/useScrollPosition';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const scrollPosition = useScrollPosition();
  const isTransparent = scrollPosition < 100;

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isTransparent 
          ? 'bg-transparent' 
          : 'bg-white/80 backdrop-blur-md shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <Eye className="h-8 w-8 text-black group-hover:scale-110 transition-transform" />
              <span className="text-2xl font-bold text-black">VisionPress</span>
            </Link>
          </div>

          <div className="hidden md:block flex-1 px-8">
            <div className="relative group">
              <input
                type="text"
                placeholder="Search news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 pr-4 rounded-full border border-gray-200 
                focus:outline-none focus:border-black bg-white/90 backdrop-blur-sm
                transition-all duration-300 group-hover:shadow-md"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="hidden md:block">
            <Navigation />
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm">
          <Navigation />
          <div className="px-4 py-3">
            <input
              type="text"
              placeholder="Search news..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-full border border-gray-200 
              focus:outline-none focus:border-black"
            />
          </div>
        </div>
      )}
    </header>
  );
}