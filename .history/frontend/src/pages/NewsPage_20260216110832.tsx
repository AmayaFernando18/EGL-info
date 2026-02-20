import { useState } from 'react';
import { mockNews } from '../mocks/news';
import Card from '../components/Card';
import { Search, Filter, TrendingUp, Clock, User } from 'lucide-react';

export default function NewsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(mockNews.map(n => n.category)))];

  const filteredNews = mockNews.filter(news => {
    const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         news.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || news.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Featured news (most recent)
  const featuredNews = mockNews[0];
  const regularNews = filteredNews.slice(selectedCategory === 'All' && !searchTerm ? 1 : 0);

  return (
    <div className="min-h-screen bg-base">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-primary to-accent text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-3">News & Announcements</h1>
          <p className="text-gray-100 text-lg">Stay updated with the latest news and developments at GenCo</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Featured News - Only show when no filters applied */}
        {!searchTerm && selectedCategory === 'All' && (
          <div className="mb-10">
            <div className="flex items-center space-x-2 mb-4">
              <TrendingUp className="h-5 w-5 text-accent" />
              <h2 className="text-2xl font-bold text-secondary">Featured Story</h2>
            </div>
            <Card hover className="overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <div className="grid md:grid-cols-2 gap-6">
                {featuredNews.imageUrl && (
                  <div className="relative h-64 md:h-full rounded-lg overflow-hidden">
                    <img
                      src={featuredNews.imageUrl}
                      alt={featuredNews.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 bg-accent text-white text-sm font-bold rounded-full shadow-lg">
                        Featured
                      </span>
                    </div>
                  </div>
                )}
                <div className="flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-3 w-fit">
                    {featuredNews.category}
                  </span>
                  <h2 className="text-3xl font-bold text-secondary mb-4 hover:text-primary transition-colors">
                    {featuredNews.title}
                  </h2>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">{featuredNews.excerpt}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span className="font-medium">{featuredNews.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{new Date(featuredNews.publishedAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <button className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-accent transition-colors w-fit shadow-soft">
                    Read Full Story →
                  </button>
                </div>
              </div>
            </Card>
          </div>
        )}

      {/* Filters */}
      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search news..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
          />
        </div>
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="pl-10 pr-8 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none appearance-none bg-white min-w-[200px]"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredNews.map((news) => (
          <Card key={news.id} hover>
            {news.imageUrl && (
              <img
                src={news.imageUrl}
                alt={news.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            )}
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3">
              {news.category}
            </span>
            <h2 className="text-xl font-bold text-secondary mb-3 hover:text-primary transition-colors">
              {news.title}
            </h2>
            <p className="text-gray-600 mb-4">{news.excerpt}</p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>{news.author}</span>
              <span>{new Date(news.publishedAt).toLocaleDateString()}</span>
            </div>
          </Card>
        ))}
      </div>

      {filteredNews.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No news found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}
