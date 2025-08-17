// src/components/Sidebar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { name: 'Dashboard', href: '/admin', icon: 'ri-dashboard-line' },
  { name: 'Products', href: '/admin/products', icon: 'ri-folders-line' },
  { name: 'Orders', href: '/admin/orders', icon: 'ri-shopping-bag-line' },
  { name: 'Blog', href: '/admin/blog', icon: 'ri-article-line' },
  { name: 'Customers', href: '/admin/customers', icon: 'ri-user-line' },
];

export default function Sidebar({ onClose }) {
  const location = useLocation();

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-full flex flex-col shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-center h-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-700">
        <Link to="/admin" className="flex items-center space-x-2" onClick={onClose}>
          <span className="text-xl font-bold text-white">BettaFish Admin</span>
        </Link>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  to={item.href}
                  onClick={onClose}
                  className={`${
                    isActive
                      ? 'bg-gray-100 text-blue-700 font-medium'
                      : 'text-gray-600 hover:bg-gray-100'
                  } flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg transition-colors`}
                >
                  <i className={`${item.icon} text-lg`}></i>
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        <Link
          to="/"
          className="flex items-center px-3 py-2.5 text-sm text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <i className="ri-external-link-line text-lg mr-3"></i>
          View Store
        </Link>
      </div>
    </div>
  );
}