import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <i className="ri-fish-line text-2xl text-blue-400"></i>
              <span className="text-xl font-bold">BettaKing</span>
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              Toko online terpercaya untuk ikan cupang berkualitas tinggi. 
              Kami menyediakan berbagai jenis cupang hias dengan kualitas terbaik 
              dan pelayanan yang memuaskan.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <i className="ri-facebook-fill text-xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <i className="ri-instagram-line text-xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <i className="ri-youtube-line text-xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <i className="ri-whatsapp-line text-xl"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/catalog" className="text-gray-300 hover:text-white transition-colors">Katalog</Link></li>
              <li><Link to="/education" className="text-gray-300 hover:text-white transition-colors">Edukasi</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Kontak</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link to="/orders" className="text-gray-300 hover:text-white transition-colors">Lacak Pesanan</Link></li>
              <li><Link to="/cart" className="text-gray-300 hover:text-white transition-colors">Keranjang</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Kebijakan Return</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 BettaKing. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;