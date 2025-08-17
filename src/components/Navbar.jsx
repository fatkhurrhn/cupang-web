import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const { getTotalItems } = useCart();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Navbar Utama */}
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
              <Link to="/" className={`transition-colors ${isActive('/') ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}`}>
                Home
              </Link>
              <Link to="/catalog" className={`transition-colors ${isActive('/catalog') ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}`}>
                Katalog
              </Link>
              <Link to="/education" className={`transition-colors ${isActive('/education') ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}`}>
                Edukasi
              </Link>
              <Link to="/blog" className={`transition-colors ${isActive('/blog') ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}`}>
                Blog
              </Link>
              <Link to="/about" className={`transition-colors ${isActive('/about') ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}`}>
                About
              </Link>
              <Link to="/contact" className={`transition-colors ${isActive('/contact') ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}`}>
                Kontak
              </Link>
            </div>

            {/* Ikon: Cart & Orders */}
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

              {/* Tombol Hamburger (Mobile) */}
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <i className="ri-menu-line text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar Mobile (Slide dari kiri) */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={() => setIsSidebarOpen(false)}
          ></div>

          {/* Sidebar Slide dari Kiri */}
          <div
            className="absolute inset-y-0 left-0 w-64 bg-white shadow-xl transform translate-x-0 transition-transform duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Sidebar */}
            <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
              <Link
                to="/"
                className="flex items-center space-x-2"
                onClick={() => setIsSidebarOpen(false)}
              >
                <i className="ri-fish-line text-2xl text-blue-600"></i>
                <span className="text-lg font-bold text-gray-900">BettaKing</span>
              </Link>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                &times;
              </button>
            </div>

            {/* Menu Mobile */}
            <nav className="p-4">
              <div className="flex flex-col space-y-3">
                <Link
                  to="/"
                  className={`py-2.5 px-4 rounded-lg transition-colors ${
                    isActive('/') ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/catalog"
                  className={`py-2.5 px-4 rounded-lg transition-colors ${
                    isActive('/catalog') ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Katalog
                </Link>
                <Link
                  to="/education"
                  className={`py-2.5 px-4 rounded-lg transition-colors ${
                    isActive('/education') ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Edukasi
                </Link>
                <Link
                  to="/blog"
                  className={`py-2.5 px-4 rounded-lg transition-colors ${
                    isActive('/blog') ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  to="/about"
                  className={`py-2.5 px-4 rounded-lg transition-colors ${
                    isActive('/about') ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className={`py-2.5 px-4 rounded-lg transition-colors ${
                    isActive('/contact') ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Kontak
                </Link>
                <Link
                  to="/orders"
                  className={`py-2.5 px-4 rounded-lg transition-colors flex items-center gap-2 ${
                    isActive('/orders') ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <i className="ri-history-line text-lg"></i>
                  Riwayat Pesanan
                </Link>
              </div>
            </nav>

            {/* Cart di bagian bawah sidebar */}
            <div className="absolute bottom-4 left-4 right-4">
              <Link
                to="/cart"
                className="flex items-center gap-3 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                onClick={() => setIsSidebarOpen(false)}
              >
                <i className="ri-shopping-cart-2-line text-xl"></i>
                <span className="font-medium">Keranjang</span>
                {getTotalItems() > 0 && (
                  <span className="bg-white text-blue-600 text-xs rounded-full h-5 w-5 flex items-center justify-center ml-auto">
                    {getTotalItems()}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;