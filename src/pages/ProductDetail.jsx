import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <i className="ri-fish-line text-6xl text-gray-300 mb-4"></i>
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Produk tidak ditemukan</h2>
          <Link to="/catalog" className="text-blue-600 hover:text-blue-700">
            Kembali ke katalog
          </Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    // Success message
    alert(`${quantity} ${product.name} berhasil ditambahkan ke keranjang!`);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate('/cart');
  };

  const relatedProducts = products.filter(p => 
    p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
            <li><i className="ri-arrow-right-s-line"></i></li>
            <li><Link to="/catalog" className="hover:text-blue-600">Katalog</Link></li>
            <li><i className="ri-arrow-right-s-line"></i></li>
            <li className="text-gray-900">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-xl">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              {product.featured && (
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </div>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              <p className="text-xl text-gray-600">
                {product.description}
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-3xl lg:text-4xl font-bold text-blue-600">
                {formatPrice(product.price)}
              </span>
              <div className="flex items-center space-x-2">
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                  product.stock > 5 ? 'bg-green-100 text-green-600' : 
                  product.stock > 0 ? 'bg-yellow-100 text-yellow-600' : 
                  'bg-red-100 text-red-600'
                }`}>
                  {product.stock > 0 ? `Stock: ${product.stock}` : 'Habis'}
                </div>
              </div>
            </div>

            {/* Product Specs */}
            <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="text-center">
                <i className="ri-award-line text-2xl text-blue-600 mb-2"></i>
                <div className="font-semibold text-gray-900">{product.care_level}</div>
                <div className="text-sm text-gray-500">Care Level</div>
              </div>
              <div className="text-center">
                <i className="ri-ruler-line text-2xl text-blue-600 mb-2"></i>
                <div className="font-semibold text-gray-900">{product.size}</div>
                <div className="text-sm text-gray-500">Ukuran</div>
              </div>
              <div className="text-center">
                <i className="ri-heart-pulse-line text-2xl text-blue-600 mb-2"></i>
                <div className="font-semibold text-gray-900">{product.lifespan}</div>
                <div className="text-sm text-gray-500">Lifespan</div>
              </div>
              <div className="text-center">
                <i className="ri-emotion-line text-2xl text-blue-600 mb-2"></i>
                <div className="font-semibold text-gray-900">{product.temperament}</div>
                <div className="text-sm text-gray-500">Temperament</div>
              </div>
            </div>

            {/* Quantity & Actions */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label className="font-medium text-gray-700">Jumlah:</label>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 hover:bg-gray-100 transition-colors"
                  >
                    <i className="ri-subtract-line"></i>
                  </button>
                  <span className="px-4 py-2 min-w-[60px] text-center">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="px-3 py-2 hover:bg-gray-100 transition-colors"
                    disabled={quantity >= product.stock}
                  >
                    <i className="ri-add-line"></i>
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                  className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  <i className="ri-shopping-cart-line mr-2"></i>
                  Tambah ke Keranjang
                </button>
                <button 
                  onClick={handleBuyNow}
                  disabled={product.stock === 0}
                  className="flex-1 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  <i className="ri-flashlight-line mr-2"></i>
                  Beli Sekarang
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex space-x-8">
            {[
              { id: 'description', label: 'Deskripsi', icon: 'ri-file-text-line' },
              { id: 'care', label: 'Panduan Perawatan', icon: 'ri-heart-line' },
              { id: 'shipping', label: 'Pengiriman', icon: 'ri-truck-line' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <i className={`${tab.icon} mr-2`}></i>
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="mb-12">
          {activeTab === 'description' && (
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-4">Deskripsi Produk</h3>
              <p className="text-gray-600 leading-relaxed">
                {product.detailed_description}
              </p>
            </div>
          )}

          {activeTab === 'care' && (
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-4">Panduan Perawatan</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Setup Aquarium</h4>
                  <p className="text-blue-800">Minimal 10 liter untuk 1 ekor cupang. Gunakan filter dengan aliran lembut dan heater untuk menjaga suhu 26-28°C.</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">Pemberian Pakan</h4>
                  <p className="text-green-800">Beri makan 2-3 kali sehari dengan porsi yang habis dalam 2-3 menit. Variasikan antara pelet, bloodworm, dan artemia.</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">Kualitas Air</h4>
                  <p className="text-yellow-800">Ganti 25-30% air setiap minggu. Jaga pH 6.5-7.5 dan gunakan water conditioner untuk menghilangkan klorin.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'shipping' && (
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-4">Informasi Pengiriman</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <i className="ri-truck-line text-2xl text-blue-600 mt-1"></i>
                  <div>
                    <h4 className="font-semibold">Pengiriman Khusus Ikan Hidup</h4>
                    <p className="text-gray-600">Kami menggunakan packaging khusus dengan oksigen dan isolasi suhu untuk menjamin ikan sampai dengan selamat.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <i className="ri-time-line text-2xl text-green-600 mt-1"></i>
                  <div>
                    <h4 className="font-semibold">Estimasi Pengiriman</h4>
                    <p className="text-gray-600">1-2 hari untuk Jabodetabek, 2-3 hari untuk luar kota dengan kurir khusus ikan hidup.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <i className="ri-shield-check-line text-2xl text-purple-600 mt-1"></i>
                  <div>
                    <h4 className="font-semibold">Garansi Hidup</h4>
                    <p className="text-gray-600">Garansi 100% hidup sampai tujuan. Jika ikan tidak selamat, kami akan mengganti atau refund penuh.</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Produk Sejenis</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(product => (
                <div key={product.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <Link to={`/product/${product.id}`}>
                    <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
                  </Link>
                  <div className="p-4">
                    <Link to={`/product/${product.id}`}>
                      <h4 className="font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors line-clamp-2">
                        {product.name}
                      </h4>
                    </Link>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-blue-600">
                        {formatPrice(product.price)}
                      </span>
                      <Link 
                        to={`/product/${product.id}`}
                        className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                      >
                        Lihat Detail
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;