import { useState } from 'react';
import { blogPosts } from '../../data/blog';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = filterCategory === 'All' || post.category === filterCategory;
    
    return matchesSearch && matchesCategory;
  });

  const categories = ['All', 'Care Guide', 'Species Guide', 'Setup Guide', 'Health', 'Breeding', 'News'];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Blog Management</h1>
        <button className="mt-4 md:mt-0 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
          <i className="ri-add-line mr-2"></i>
          New Blog Post
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="bg-blue-100 rounded-md p-3 mr-4">
              <i className="ri-article-line text-2xl text-blue-600"></i>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Total Posts</p>
              <p className="text-2xl font-bold text-gray-900">{blogPosts.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="bg-green-100 rounded-md p-3 mr-4">
              <i className="ri-eye-line text-2xl text-green-600"></i>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Total Views</p>
              <p className="text-2xl font-bold text-gray-900">12.5K</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="bg-purple-100 rounded-md p-3 mr-4">
              <i className="ri-bookmark-line text-2xl text-purple-600"></i>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Categories</p>
              <p className="text-2xl font-bold text-gray-900">{categories.length - 1}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="bg-yellow-100 rounded-md p-3 mr-4">
              <i className="ri-chat-1-line text-2xl text-yellow-600"></i>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Comments</p>
              <p className="text-2xl font-bold text-gray-900">248</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Search Posts</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Search by title, content, or author..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <i className="ri-search-line absolute left-3 top-3 text-gray-400"></i>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Category</label>
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Blog Posts Table */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">
            Blog Posts ({filteredPosts.length})
          </h3>
        </div>
        
        {filteredPosts.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Post
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Author
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Read Time
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredPosts.map((post) => (
                  <tr key={post.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="h-12 w-12 rounded-lg object-cover mr-4"
                        />
                        <div>
                          <div className="text-sm font-medium text-gray-900 max-w-xs truncate">
                            {post.title}
                          </div>
                          <div className="text-sm text-gray-500 max-w-xs truncate">
                            {post.excerpt}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {post.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {post.author}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {post.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {post.readTime}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button 
                          className="text-blue-600 hover:text-blue-900"
                          title="View Post"
                          onClick={() => window.open(`/blog/${post.id}`, '_blank')}
                        >
                          <i className="ri-eye-line"></i>
                        </button>
                        <button 
                          className="text-green-600 hover:text-green-900"
                          title="Edit Post"
                        >
                          <i className="ri-edit-line"></i>
                        </button>
                        <button 
                          className="text-purple-600 hover:text-purple-900"
                          title="Duplicate Post"
                        >
                          <i className="ri-file-copy-line"></i>
                        </button>
                        <button 
                          className="text-red-600 hover:text-red-900"
                          title="Delete Post"
                        >
                          <i className="ri-delete-bin-line"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-12">
            <i className="ri-article-line text-6xl text-gray-300 mb-4"></i>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No blog posts found</h3>
            <p className="text-gray-500 mb-6">
              {searchTerm || filterCategory !== 'All'
                ? 'Try adjusting your search or filter criteria'
                : 'Create your first blog post to get started'
              }
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <i className="ri-add-line mr-2"></i>
              Create First Post
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;