import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { getTotalItems } = useCart();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <i className="ri-fish-line text-2xl text-blue-600"></i>
            <span className="text-xl font-bold text-gray-900">BettaKing</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors ${isActive('/') ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Home
            </Link>
            <Link 
              to="/catalog" 
              className={`transition-colors ${isActive('/catalog') ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Katalog
            </Link>
            <Link 
              to="/education" 
              className={`transition-colors ${isActive('/education') ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Edukasi
            </Link>
            <Link 
              to="/blog" 
              className={`transition-colors ${isActive('/blog') ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Blog
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors ${isActive('/about') ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors ${isActive('/contact') ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Kontak
            </Link>
          </div>

          {/* Cart and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors">
              <i className="ri-shopping-cart-2-line text-xl"></i>
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>
            
            <Link to="/orders" className="hidden md:block p-2 text-gray-700 hover:text-blue-600 transition-colors">
              <i className="ri-history-line text-xl"></i>
            </Link>

            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <i className={`ri-${isOpen ? 'close' : 'menu'}-line text-xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className={`py-2 px-4 rounded transition-colors ${isActive('/') ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700 hover:bg-gray-50'}`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/catalog" 
                className={`py-2 px-4 rounded transition-colors ${isActive('/catalog') ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700 hover:bg-gray-50'}`}
                onClick={() => setIsOpen(false)}
              >
                Katalog
              </Link>
              <Link 
                to="/education" 
                className={`py-2 px-4 rounded transition-colors ${isActive('/education') ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700 hover:bg-gray-50'}`}
                onClick={() => setIsOpen(false)}
              >
                Edukasi
              </Link>
              <Link 
                to="/blog" 
                className={`py-2 px-4 rounded transition-colors ${isActive('/blog') ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700 hover:bg-gray-50'}`}
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/about" 
                className={`py-2 px-4 rounded transition-colors ${isActive('/about') ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700 hover:bg-gray-50'}`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`py-2 px-4 rounded transition-colors ${isActive('/contact') ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700 hover:bg-gray-50'}`}
                onClick={() => setIsOpen(false)}
              >
                Kontak
              </Link>
              <Link 
                to="/orders" 
                className={`py-2 px-4 rounded transition-colors ${isActive('/orders') ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700 hover:bg-gray-50'}`}
                onClick={() => setIsOpen(false)}
              >
                Riwayat Pesanan
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;