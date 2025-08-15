import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: 'ri-dashboard-line', current: location.pathname === '/admin' },
    { name: 'Products', href: '/admin/products', icon: 'ri-fish-line', current: location.pathname === '/admin/products' },
    { name: 'Orders', href: '/admin/orders', icon: 'ri-shopping-bag-line', current: location.pathname === '/admin/orders' },
    { name: 'Blog', href: '/admin/blog', icon: 'ri-article-line', current: location.pathname === '/admin/blog' },
    { name: 'Customers', href: '/admin/customers', icon: 'ri-user-line', current: location.pathname === '/admin/customers' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-center h-16 px-4 bg-gray-800">
          <Link to="/admin" className="flex items-center space-x-2">
            <i className="ri-fish-line text-2xl text-blue-400"></i>
            <span className="text-xl font-bold text-white">BettaKing Admin</span>
          </Link>
        </div>
        
        <nav className="mt-5 px-2">
          <div className="space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  item.current
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                } group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors`}
                onClick={() => setIsSidebarOpen(false)}
              >
                <i className={`${item.icon} text-lg mr-3`}></i>
                {item.name}
              </Link>
            ))}
          </div>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <Link
            to="/"
            className="flex items-center px-2 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white transition-colors"
          >
            <i className="ri-external-link-line text-lg mr-3"></i>
            View Store
          </Link>
        </div>
      </div>

      {/* Sidebar overlay for mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-gray-600 bg-opacity-75 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
          <button
            type="button"
            className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 lg:hidden"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <span className="sr-only">Open sidebar</span>
            <i className="ri-menu-line text-xl"></i>
          </button>
          <div className="flex-1 px-4 flex justify-between items-center">
            <h1 className="text-lg font-semibold text-gray-900">
              {navigation.find(nav => nav.current)?.name || 'Admin Panel'}
            </h1>
            <div className="ml-4 flex items-center md:ml-6">
              <div className="relative">
                <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  <i className="ri-notification-line text-xl"></i>
                </button>
              </div>
              <div className="ml-3 relative">
                <button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
                    <i className="ri-user-line text-gray-600"></i>
                  </div>
                  <span className="ml-2 text-gray-700 font-medium">Admin</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="flex-1">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;