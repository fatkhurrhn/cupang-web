import { useState } from 'react';
import { useOrders } from '../../context/OrderContext';
import Layout from '../Layout';

const Customers = () => {
  const { orders } = useOrders();
  const [searchTerm, setSearchTerm] = useState('');

  // Extract unique customers from orders
  const customers = orders.reduce((acc, order) => {
    const existingCustomer = acc.find(c => c.email === order.customerInfo.email);

    if (existingCustomer) {
      existingCustomer.totalOrders += 1;
      existingCustomer.totalSpent += order.total;
      existingCustomer.lastOrder = new Date(order.date) > new Date(existingCustomer.lastOrder)
        ? order.date
        : existingCustomer.lastOrder;
    } else {
      acc.push({
        id: order.customerInfo.email,
        name: order.customerInfo.name,
        email: order.customerInfo.email,
        phone: order.customerInfo.phone,
        address: `${order.customerInfo.address}, ${order.customerInfo.city}`,
        totalOrders: 1,
        totalSpent: order.total,
        lastOrder: order.date,
        joinDate: order.date,
        status: 'Active'
      });
    }
    return acc;
  }, []);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.phone.includes(searchTerm)
  );

  const totalCustomers = customers.length;
  const totalRevenue = customers.reduce((sum, customer) => sum + customer.totalSpent, 0);
  const averageOrderValue = totalRevenue / customers.reduce((sum, customer) => sum + customer.totalOrders, 0) || 0;

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Customer Management</h1>
          <div className="mt-4 md:mt-0 flex space-x-2">
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center">
              <i className="ri-download-line mr-2"></i>
              Export Customers
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
              <i className="ri-mail-line mr-2"></i>
              Send Newsletter
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="bg-blue-100 rounded-md p-3 mr-4">
                <i className="ri-user-line text-2xl text-blue-600"></i>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Total Customers</p>
                <p className="text-2xl font-bold text-gray-900">{totalCustomers}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="bg-green-100 rounded-md p-3 mr-4">
                <i className="ri-money-dollar-circle-line text-2xl text-green-600"></i>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                <p className="text-2xl font-bold text-gray-900">{formatPrice(totalRevenue)}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="bg-purple-100 rounded-md p-3 mr-4">
                <i className="ri-shopping-cart-line text-2xl text-purple-600"></i>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Avg Order Value</p>
                <p className="text-2xl font-bold text-gray-900">{formatPrice(averageOrderValue)}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="bg-yellow-100 rounded-md p-3 mr-4">
                <i className="ri-user-heart-line text-2xl text-yellow-600"></i>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Active Customers</p>
                <p className="text-2xl font-bold text-gray-900">{customers.filter(c => c.status === 'Active').length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="max-w-md">
            <label className="block text-sm font-medium text-gray-700 mb-2">Search Customers</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Search by name, email, or phone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <i className="ri-search-line absolute left-3 top-3 text-gray-400"></i>
            </div>
          </div>
        </div>

        {/* Customers Table */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">
              Customers ({filteredCustomers.length})
            </h3>
          </div>

          {filteredCustomers.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Customer
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contact
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Orders
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Total Spent
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Last Order
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
                  {filteredCustomers.map((customer) => (
                    <tr key={customer.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                            <span className="text-blue-600 font-medium text-sm">
                              {customer.name.charAt(0).toUpperCase()}
                            </span>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {customer.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              Joined {new Date(customer.joinDate).toLocaleDateString('id-ID')}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm text-gray-900">{customer.email}</div>
                          <div className="text-sm text-gray-500">{customer.phone}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {customer.totalOrders} orders
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {formatPrice(customer.totalSpent)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {new Date(customer.lastOrder).toLocaleDateString('id-ID', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric'
                        })}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {customer.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button
                            className="text-blue-600 hover:text-blue-900"
                            title="View Customer Details"
                          >
                            <i className="ri-eye-line"></i>
                          </button>
                          <button
                            className="text-green-600 hover:text-green-900"
                            title="Send WhatsApp Message"
                            onClick={() => {
                              const message = `Halo ${customer.name}, terima kasih telah menjadi pelanggan setia BettaKing!`;
                              window.open(`https://wa.me/${customer.phone.replace(/^0/, '62')}?text=${encodeURIComponent(message)}`, '_blank');
                            }}
                          >
                            <i className="ri-whatsapp-line"></i>
                          </button>
                          <button
                            className="text-purple-600 hover:text-purple-900"
                            title="Send Email"
                            onClick={() => {
                              window.open(`mailto:${customer.email}?subject=Thank you for choosing BettaKing`, '_blank');
                            }}
                          >
                            <i className="ri-mail-line"></i>
                          </button>
                          <button
                            className="text-gray-600 hover:text-gray-900"
                            title="Edit Customer"
                          >
                            <i className="ri-edit-line"></i>
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
              <i className="ri-user-line text-6xl text-gray-300 mb-4"></i>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No customers found</h3>
              <p className="text-gray-500">
                {searchTerm
                  ? 'Try adjusting your search criteria'
                  : 'Customers will appear here when they make their first purchase'
                }
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Customers;