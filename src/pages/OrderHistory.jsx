import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useOrders } from '../context/OrderContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const OrderHistory = () => {
  const location = useLocation();
  const { orders } = useOrders();
  const [searchTerm, setSearchTerm] = useState('');

  // Check for success message from checkout
  const orderSuccess = location.state?.orderSuccess;
  const orderNumber = location.state?.orderNumber;

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'confirmed': return 'bg-blue-100 text-blue-800';
      case 'processing': return 'bg-purple-100 text-purple-800';
      case 'shipped': return 'bg-indigo-100 text-indigo-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending': return 'ri-time-line';
      case 'confirmed': return 'ri-check-line';
      case 'processing': return 'ri-settings-line';
      case 'shipped': return 'ri-truck-line';
      case 'delivered': return 'ri-checkbox-circle-line';
      case 'cancelled': return 'ri-close-circle-line';
      default: return 'ri-information-line';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'pending': return 'Menunggu Konfirmasi';
      case 'confirmed': return 'Dikonfirmasi';
      case 'processing': return 'Diproses';
      case 'shipped': return 'Dikirim';
      case 'delivered': return 'Diterima';
      case 'cancelled': return 'Dibatalkan';
      default: return status;
    }
  };

  const filteredOrders = orders.filter(order =>
    order.orderNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.customerInfo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <ScrollToTop />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Message */}
        {orderSuccess && (
          <div className="mb-8 bg-green-50 border border-green-200 rounded-lg p-6">
            <div className="flex items-center">
              <i className="ri-check-circle-line text-2xl text-green-600 mr-4"></i>
              <div>
                <h3 className="text-lg font-semibold text-green-800">Pesanan Berhasil!</h3>
                <p className="text-green-700">
                  Pesanan #{orderNumber} telah dikirim ke WhatsApp kami. Silakan tunggu konfirmasi dari tim kami.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Riwayat Pesanan</h1>
          <p className="text-gray-600">Lacak dan kelola pesanan Anda</p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <input
              type="text"
              placeholder="Cari nomor pesanan atau nama..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <i className="ri-search-line absolute left-4 top-4 text-gray-400 text-lg"></i>
          </div>
        </div>

        {/* Orders List */}
        {filteredOrders.length > 0 ? (
          <div className="space-y-6">
            {filteredOrders.map((order) => (
              <div key={order.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                {/* Order Header */}
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center space-x-4">
                      <h3 className="text-lg font-semibold text-gray-900">
                        #{order.orderNumber}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                        <i className={`${getStatusIcon(order.status)} mr-1`}></i>
                        {getStatusText(order.status)}
                      </span>
                    </div>
                    <div className="mt-2 sm:mt-0 text-sm text-gray-500">
                      {new Date(order.date).toLocaleDateString('id-ID', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </div>
                  </div>
                </div>

                {/* Order Content */}
                <div className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Order Items */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Item Pesanan</h4>
                      <div className="space-y-3">
                        {order.items.map((item) => (
                          <div key={item.id} className="flex items-center space-x-4">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <h5 className="font-medium text-gray-900 truncate">
                                {item.name}
                              </h5>
                              <p className="text-sm text-gray-500">
                                Qty: {item.quantity} • {formatPrice(item.price)}
                              </p>
                            </div>
                            <div className="text-sm font-bold text-gray-900">
                              {formatPrice(item.price * item.quantity)}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Customer & Summary */}
                    <div>
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Informasi Pelanggan</h4>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p><span className="font-medium">Nama:</span> {order.customerInfo.name}</p>
                          <p><span className="font-medium">Email:</span> {order.customerInfo.email}</p>
                          <p><span className="font-medium">Telepon:</span> {order.customerInfo.phone}</p>
                          <p><span className="font-medium">Alamat:</span> {order.customerInfo.address}, {order.customerInfo.city} {order.customerInfo.postalCode}</p>
                          {order.customerInfo.notes && (
                            <p><span className="font-medium">Catatan:</span> {order.customerInfo.notes}</p>
                          )}
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-3">Ringkasan Pembayaran</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Subtotal</span>
                            <span>{formatPrice(order.total)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Ongkos Kirim</span>
                            <span className="text-green-600 font-medium">Gratis</span>
                          </div>
                          <hr className="my-2" />
                          <div className="flex justify-between font-semibold">
                            <span>Total</span>
                            <span className="text-blue-600">{formatPrice(order.total)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-6 flex flex-wrap gap-3">
                    <button
                      onClick={() => {
                        const message = `Halo, saya ingin menanyakan status pesanan #${order.orderNumber}`;
                        window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(message)}`, '_blank');
                      }}
                      className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                    >
                      <i className="ri-whatsapp-line mr-1"></i>
                      Hubungi Via WhatsApp
                    </button>

                    {order.status === 'shipped' && (
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                        <i className="ri-truck-line mr-1"></i>
                        Lacak Pengiriman
                      </button>
                    )}

                    {order.status === 'pending' && (
                      <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm font-medium">
                        <i className="ri-close-line mr-1"></i>
                        Batalkan Pesanan
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <i className="ri-file-list-line text-6xl text-gray-300 mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              {searchTerm ? 'Tidak ada pesanan ditemukan' : 'Belum ada pesanan'}
            </h3>
            <p className="text-gray-500 mb-6">
              {searchTerm
                ? 'Coba ubah kata kunci pencarian Anda'
                : 'Pesanan Anda akan muncul di sini setelah melakukan pembelian'
              }
            </p>
            {!searchTerm && (
              <a
                href="/catalog"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium inline-flex items-center"
              >
                <i className="ri-shopping-bag-line mr-2"></i>
                Mulai Berbelanja
              </a>
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default OrderHistory;