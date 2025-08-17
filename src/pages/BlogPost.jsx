import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blog';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <i className="ri-article-line text-6xl text-gray-300 mb-4"></i>
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Artikel tidak ditemukan</h2>
          <Link to="/blog" className="text-blue-600 hover:text-blue-700">
            Kembali ke blog
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts.filter(p => 
    p.id !== post.id && 
    (p.category === post.category || p.tags.some(tag => post.tags.includes(tag)))
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      <ScrollToTop/>
      {/* Breadcrumb */}
      <nav className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
            <li><i className="ri-arrow-right-s-line"></i></li>
            <li><Link to="/blog" className="hover:text-blue-600">Blog</Link></li>
            <li><i className="ri-arrow-right-s-line"></i></li>
            <li className="text-gray-900 truncate">{post.title}</li>
          </ol>
        </div>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center mb-4">
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
            <span className="text-gray-500 text-sm ml-4">{post.readTime}</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center space-x-4 text-gray-600 mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <i className="ri-user-line text-blue-600"></i>
              </div>
              <span className="font-medium">{post.author}</span>
            </div>
            <span>•</span>
            <span>{post.date}</span>
          </div>

          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-xl shadow-lg"
          />
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {post.excerpt}
          </p>
          
          <div 
            className="prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:hover:text-blue-700 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-li:text-gray-700"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* Tags */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Tags:</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span key={tag} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-blue-100 hover:text-blue-700 transition-colors cursor-pointer">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Share Section */}
        <div className="mb-12 p-6 bg-gray-50 rounded-xl">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Bagikan Artikel:</h3>
          <div className="flex space-x-4">
            <a 
              href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <i className="ri-facebook-fill"></i>
              <span>Facebook</span>
            </a>
            <a 
              href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${post.title}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition-colors"
            >
              <i className="ri-twitter-line"></i>
              <span>Twitter</span>
            </a>
            <a 
              href={`https://wa.me/?text=${post.title} ${window.location.href}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
            >
              <i className="ri-whatsapp-line"></i>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Artikel Terkait</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map(relatedPost => (
                <article key={relatedPost.id} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                  <img 
                    src={relatedPost.image} 
                    alt={relatedPost.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <div className="flex items-center mb-2">
                      <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-medium">
                        {relatedPost.category}
                      </span>
                      <span className="text-gray-500 text-xs ml-2">{relatedPost.readTime}</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      {relatedPost.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    <Link 
                      to={`/blog/${relatedPost.id}`}
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium inline-flex items-center"
                    >
                      Baca Selengkapnya
                      <i className="ri-arrow-right-line ml-1"></i>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-200">
          <Link 
            to="/blog"
            className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors"
          >
            <i className="ri-arrow-left-line mr-2"></i>
            Kembali ke Blog
          </Link>
          <Link 
            to="/catalog"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            <i className="ri-shopping-bag-line mr-2"></i>
            Lihat Produk
          </Link>
        </div>
      </article>
      <Footer/>
    </div>
  );
};

export default BlogPost;