import { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts, blogCategories } from '../data/blog';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts[0];
  const recentPosts = filteredPosts.slice(1);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Blog BettaKing
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
              Tips, panduan, dan informasi terbaru seputar dunia ikan cupang
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Cari artikel..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <i className="ri-search-line absolute left-4 top-4 text-gray-400 text-lg"></i>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {blogCategories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Post */}
        {selectedCategory === 'All' && !searchTerm && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Artikel Unggulan</h2>
            <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                    <span className="text-gray-500 text-sm ml-4">{featuredPost.readTime}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <i className="ri-user-line text-blue-600"></i>
                      </div>
                      <span className="text-sm text-gray-600">{featuredPost.author}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-sm text-gray-500">{featuredPost.date}</span>
                    </div>
                    <Link 
                      to={`/blog/${featuredPost.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Baca Selengkapnya
                      <i className="ri-arrow-right-line ml-2"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </div>
        )}

        {/* Results Info */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {selectedCategory === 'All' && !searchTerm ? 'Artikel Terbaru' : 'Hasil Pencarian'}
          </h2>
          <p className="text-gray-600">
            {filteredPosts.length === 0 
              ? 'Tidak ada artikel yang ditemukan'
              : `Menampilkan ${filteredPosts.length} artikel`
            }
            {selectedCategory !== 'All' && ` dalam kategori ${selectedCategory}`}
            {searchTerm && ` untuk "${searchTerm}"`}
          </p>
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map(post => (
              <article key={post.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white bg-opacity-90 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                    <span className="text-gray-400 mx-2">•</span>
                    <span className="text-gray-500 text-sm">{post.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                        <i className="ri-user-line text-gray-600 text-sm"></i>
                      </div>
                      <span className="text-sm text-gray-600">{post.author}</span>
                    </div>
                    
                    <Link 
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      Baca
                      <i className="ri-arrow-right-line ml-1"></i>
                    </Link>
                  </div>

                  {/* Tags */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <i className="ri-article-line text-6xl text-gray-300 mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Tidak ada artikel ditemukan
            </h3>
            <p className="text-gray-500 mb-6">
              Coba ubah kata kunci pencarian atau kategori yang dipilih
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Reset Filter
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;