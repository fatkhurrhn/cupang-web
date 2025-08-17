import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const Cart = () => {
  const { items, updateQuantity, removeFromCart, getTotalPrice, getTotalItems } = useCart();

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar/>
        <ScrollToTop/>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <i className="ri-shopping-cart-line text-6xl text-gray-300 mb-4"></i>
            <h2 className="text-2xl font-bold text-gray-700 mb-2">Keranjang Belanja Kosong</h2>
            <p className="text-gray-500 mb-6">Belum ada produk yang ditambahkan ke keranjang</p>
            <Link 
              to="/catalog"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium inline-flex items-center"
            >
              <i className="ri-shopping-bag-line mr-2"></i>
              Mulai Berbelanja
            </Link>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar/>
      <ScrollToTop/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 mt-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Keranjang Belanja</h1>
          <p className="text-gray-600">{getTotalItems()} item dalam keranjang</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Item Pesanan</h2>
              </div>
              
              <div className="divide-y divide-gray-200">
                {items.map((item) => (
                  <div key={item.id} className="p-6">
                    <div className="flex items-start space-x-4">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <Link 
                          to={`/product/${item.id}`}
                          className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors"
                        >
                          {item.name}
                        </Link>
                        <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                          {item.description}
                        </p>
                        <div className="flex items-center mt-2">
                          <span className="text-lg font-bold text-blue-600">
                            {formatPrice(item.price)}
                          </span>
                          <span className="text-sm text-gray-500 ml-2">per ekor</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end space-y-2">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                          title="Hapus item"
                        >
                          <i className="ri-delete-bin-line text-lg"></i>
                        </button>
                        
                        <div className="flex items-center border border-gray-300 rounded-lg">
                          <button 
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            className="px-3 py-1 hover:bg-gray-100 transition-colors"
                          >
                            <i className="ri-subtract-line"></i>
                          </button>
                          <span className="px-4 py-1 min-w-[50px] text-center">{item.quantity}</span>
                          <button 
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            className="px-3 py-1 hover:bg-gray-100 transition-colors"
                          >
                            <i className="ri-add-line"></i>
                          </button>
                        </div>
                        
                        <div className="text-lg font-bold text-gray-900">
                          {formatPrice(item.price * item.quantity)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Ringkasan Pesanan</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal ({getTotalItems()} item)</span>
                  <span className="font-medium">{formatPrice(getTotalPrice())}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Ongkos Kirim</span>
                  <span className="font-medium text-green-600">Gratis</span>
                </div>
                <hr className="my-3" />
                <div className="flex justify-between text-lg">
                  <span className="font-semibold">Total</span>
                  <span className="font-bold text-blue-600">{formatPrice(getTotalPrice())}</span>
                </div>
              </div>

              <Link 
                to="/checkout"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center block"
              >
                <i className="ri-secure-payment-line mr-2"></i>
                Lanjut ke Checkout
              </Link>
              
              <Link 
                to="/catalog"
                className="w-full bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium text-center block mt-3"
              >
                <i className="ri-arrow-left-line mr-2"></i>
                Lanjut Belanja
              </Link>

              {/* Features */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <i className="ri-truck-line text-green-500 mr-2"></i>
                    <span>Gratis ongkir untuk seluruh Indonesia</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <i className="ri-shield-check-line text-blue-500 mr-2"></i>
                    <span>Garansi hidup 100%</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <i className="ri-customer-service-line text-purple-500 mr-2"></i>
                    <span>Customer support 24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Cart;