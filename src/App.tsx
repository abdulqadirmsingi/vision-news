import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NewsGrid from './components/NewsGrid';
import ArticlePage from './components/ArticlePage';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import CategoryHighlights from './components/CategoryHighlights';
import NewsletterSection from './components/NewsletterSection';
import AboutPage from './pages/AboutPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <HeroSection />
              <CategoryHighlights />
              <h2 className="text-2xl font-bold mb-8">Latest News</h2>
              <NewsGrid />
              <NewsletterSection />
            </main>
          } />
          <Route path="/article/:id" element={<ArticlePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}