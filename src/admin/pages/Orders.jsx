import { useState } from 'react';
import { useOrders } from '../../context/OrderContext';

const Orders = () => {
  const { orders, updateOrderStatus } = useOrders();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

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

  const getStatusText = (status) => {
    switch (status) {
      case 'pending': return 'Pending';
      case 'confirmed': return 'Confirmed';
      case 'processing': return 'Processing';
      case 'shipped': return 'Shipped';
      case 'delivered': return 'Delivered';
      case 'cancelled': return 'Cancelled';
      default: return status;
    }
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = 
      order.orderNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customerInfo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customerInfo.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = filterStatus === 'all' || order.status === filterStatus;
    
    return matchesSearch && matchesStatus;
  });

  const handleStatusChange = (orderId, newStatus) => {
    updateOrderStatus(orderId, newStatus);
  };

  const orderStatusCounts = {
    total: orders.length,
    pending: orders.filter(o => o.status === 'pending').length,
    confirmed: orders.filter(o => o.status === 'confirmed').length,
    processing: orders.filter(o => o.status === 'processing').length,
    shipped: orders.filter(o => o.status === 'shipped').length,
    delivered: orders.filter(o => o.status === 'delivered').length,
  };

  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Order Management</h1>
        <div className="mt-4 md:mt-0 flex space-x-2">
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center">
            <i className="ri-download-line mr-2"></i>
            Export Orders
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">{orderStatusCounts.total}</p>
            <p className="text-sm text-gray-600">Total Orders</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-center">
            <p className="text-2xl font-bold text-yellow-600">{orderStatusCounts.pending}</p>
            <p className="text-sm text-gray-600">Pending</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-600">{orderStatusCounts.confirmed}</p>
            <p className="text-sm text-gray-600">Confirmed</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-center">
            <p className="text-2xl font-bold text-purple-600">{orderStatusCounts.processing}</p>
            <p className="text-sm text-gray-600">Processing</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-center">
            <p className="text-2xl font-bold text-indigo-600">{orderStatusCounts.shipped}</p>
            <p className="text-sm text-gray-600">Shipped</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">{formatPrice(totalRevenue)}</p>
            <p className="text-sm text-gray-600">Revenue</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Search Orders</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Search by order number, customer name, or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <i className="ri-search-line absolute left-3 top-3 text-gray-400"></i>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Status</label>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="processing">Processing</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">
            Orders ({filteredOrders.length})
          </h3>
        </div>
        
        {filteredOrders.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Items
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          #{order.orderNumber}
                        </div>
                        <div className="text-sm text-gray-500">
                          {new Date(order.date).toLocaleDateString('id-ID', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric'
                          })}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {order.customerInfo.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {order.customerInfo.email}
                        </div>
                        <div className="text-sm text-gray-500">
                          {order.customerInfo.phone}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {order.items.reduce((sum, item) => sum + item.quantity, 0)} items
                      </div>
                      <div className="text-sm text-gray-500">
                        {order.items.slice(0, 2).map(item => item.name).join(', ')}
                        {order.items.length > 2 && '...'}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {formatPrice(order.total)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <select
                        value={order.status}
                        onChange={(e) => handleStatusChange(order.id, e.target.value)}
                        className={`text-xs font-medium px-2 py-1 rounded-full border-0 ${getStatusColor(order.status)}`}
                      >
                        <option value="pending">Pending</option>
                        <option value="confirmed">Confirmed</option>
                        <option value="processing">Processing</option>
                        <option value="shipped">Shipped</option>
                        <option value="delivered">Delivered</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button 
                          className="text-blue-600 hover:text-blue-900"
                          title="View Details"
                        >
                          <i className="ri-eye-line"></i>
                        </button>
                        <button 
                          className="text-green-600 hover:text-green-900"
                          title="Send WhatsApp Message"
                          onClick={() => {
                            const message = `Update pesanan #${order.orderNumber}: Status pesanan Anda telah diupdate menjadi ${getStatusText(order.status)}`;
                            window.open(`https://wa.me/${order.customerInfo.phone.replace(/^0/, '62')}?text=${encodeURIComponent(message)}`, '_blank');
                          }}
                        >
                          <i className="ri-whatsapp-line"></i>
                        </button>
                        <button 
                          className="text-purple-600 hover:text-purple-900"
                          title="Print Invoice"
                        >
                          <i className="ri-printer-line"></i>
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
            <i className="ri-shopping-bag-line text-6xl text-gray-300 mb-4"></i>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No orders found</h3>
            <p className="text-gray-500">
              {searchTerm || filterStatus !== 'all' 
                ? 'Try adjusting your search or filter criteria'
                : 'Orders will appear here when customers make purchases'
              }
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;