import { Mail } from 'lucide-react';

export default function NewsletterSection() {
  return (
    <section className="bg-black text-white py-16 px-4 rounded-2xl mb-12 mt-12">
      <div className="max-w-4xl mx-auto text-center">
        <Mail className="w-12 h-12 mx-auto mb-6" />
        <h2 className="text-3xl font-bold mb-4">Stay Informed with VisionPress</h2>
        <p className="text-gray-400 mb-8">
          Get the latest news and updates delivered directly to your inbox.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-3 rounded-full bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
          />
          <button
            type="submit"
            className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-100 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}