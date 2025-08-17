import { products } from '../../data/products';
import { blogPosts } from '../../data/blog';
import { useOrders } from '../../context/OrderContext';
import AdminLayout from '../Layout';

const Dashboard = () => {
  const { orders } = useOrders();

  const stats = [
    {
      name: 'Total Products',
      value: products.length,
      icon: 'ri-fish-line',
      color: 'blue',
      change: '+2',
      changeType: 'positive'
    },
    {
      name: 'Total Orders',
      value: orders.length,
      icon: 'ri-shopping-bag-line',
      color: 'green',
      change: '+12%',
      changeType: 'positive'
    },
    {
      name: 'Blog Posts',
      value: blogPosts.length,
      icon: 'ri-article-line',
      color: 'purple',
      change: '+1',
      changeType: 'positive'
    },
    {
      name: 'Revenue',
      value: 'Rp 45.2M',
      icon: 'ri-money-dollar-circle-line',
      color: 'yellow',
      change: '+8.2%',
      changeType: 'positive'
    }
  ];

  const recentOrders = orders.slice(0, 5);
  const lowStockProducts = products.filter(p => p.stock <= 3);

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
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg p-6 text-white">
          <h1 className="text-2xl font-bold mb-2">Welcome to BettaKing Admin</h1>
          <p className="text-blue-100">Monitor and manage your betta fish store efficiently</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.name} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className={`bg-${stat.color}-100 rounded-md p-3`}>
                      <i className={`${stat.icon} text-2xl text-${stat.color}-600`}></i>
                    </div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        {stat.name}
                      </dt>
                      <dd className="text-lg font-medium text-gray-900">
                        {stat.value}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-5 py-3">
                <div className="text-sm">
                  <span className={`font-medium ${stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change}
                  </span>
                  <span className="text-gray-500"> from last month</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Orders */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Recent Orders</h3>
            </div>
            <div className="p-6">
              {recentOrders.length > 0 ? (
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <p className="font-medium text-gray-900">#{order.orderNumber}</p>
                          <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(order.status)}`}>
                            {order.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500">{order.customerInfo.name}</p>
                        <p className="text-sm font-medium text-blue-600">{formatPrice(order.total)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <i className="ri-shopping-bag-line text-4xl text-gray-300 mb-2"></i>
                  <p className="text-gray-500">No orders yet</p>
                </div>
              )}
            </div>
          </div>

          {/* Low Stock Products */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Low Stock Alert</h3>
            </div>
            <div className="p-6">
              {lowStockProducts.length > 0 ? (
                <div className="space-y-4">
                  {lowStockProducts.map((product) => (
                    <div key={product.id} className="flex items-center space-x-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900 truncate">{product.name}</p>
                        <p className="text-sm text-gray-500">{formatPrice(product.price)}</p>
                      </div>
                      <span className={`px-2 py-1 text-xs rounded-full font-medium ${product.stock === 0
                          ? 'bg-red-100 text-red-800'
                          : 'bg-yellow-100 text-yellow-800'
                        }`}>
                        {product.stock === 0 ? 'Out of Stock' : `${product.stock} left`}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <i className="ri-checkbox-circle-line text-4xl text-green-300 mb-2"></i>
                  <p className="text-gray-500">All products are well stocked</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <button className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors group">
              <div className="text-center">
                <i className="ri-add-line text-2xl text-gray-400 group-hover:text-blue-500 mb-2"></i>
                <p className="text-sm text-gray-600 group-hover:text-blue-600">Add Product</p>
              </div>
            </button>
            <button className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors group">
              <div className="text-center">
                <i className="ri-file-add-line text-2xl text-gray-400 group-hover:text-green-500 mb-2"></i>
                <p className="text-sm text-gray-600 group-hover:text-green-600">New Blog Post</p>
              </div>
            </button>
            <button className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-colors group">
              <div className="text-center">
                <i className="ri-user-add-line text-2xl text-gray-400 group-hover:text-purple-500 mb-2"></i>
                <p className="text-sm text-gray-600 group-hover:text-purple-600">Add Customer</p>
              </div>
            </button>
            <button className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-yellow-500 hover:bg-yellow-50 transition-colors group">
              <div className="text-center">
                <i className="ri-bar-chart-line text-2xl text-gray-400 group-hover:text-yellow-500 mb-2"></i>
                <p className="text-sm text-gray-600 group-hover:text-yellow-600">View Reports</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;