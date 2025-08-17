// src/components/Layout.jsx
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { useLocation, useNavigate } from "react-router-dom";

// Mapping judul halaman
const pageTitles = {
  "/admin": "Dashboard",
  "/admin/products": "Products",
  "/admin/orders": "Orders",
  "/admin/blog": "Blog",
  "/admin/customers": "Customers",
};

export default function Layout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  // Ambil judul dari path
  const currentTitle = pageTitles[location.pathname] || "Admin Panel";

  // Fungsi logout (contoh dengan Firebase)
  const handleLogout = async () => {
    try {
      // Jika pakai Firebase
      // const auth = getAuth(app);
      // await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      {/* Sidebar Desktop */}
      <div className="hidden md:block fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-200 z-40">
        <Sidebar />
      </div>

      {/* Konten Utama */}
      <div className="flex-1 flex flex-col md:ml-64">
        {/* Topbar */}
        <div className="flex items-center justify-between px-4 md:px-6 py-4 bg-white border-b border-gray-200 sticky top-0 z-30">
          {/* Tombol Menu (Mobile) */}
          <button
            className="md:hidden text-xl text-gray-700"
            onClick={() => setSidebarOpen(true)}
          >
            <i className="ri-menu-2-line"></i>
          </button>

          {/* Judul */}
          <h1 className="text-xl font-semibold text-gray-900">{currentTitle}</h1>

          {/* Profil & Logout */}
          <div className="flex items-center space-x-4">
            <span className="text-gray-700 flex items-center">
              <i className="ri-user-line mr-1"></i> Admin
            </span>
            <button
              onClick={() => setShowLogoutModal(true)}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-1 rounded-md text-sm flex items-center"
            >
              <i className="ri-logout-box-r-line mr-1"></i> Logout
            </button>
          </div>
        </div>

        {/* Main Content */}
        <main className="p-4 md:p-6 overflow-y-auto flex-1 bg-gray-50">
          {children}
        </main>
      </div>

      {/* Sidebar Mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={() => setSidebarOpen(false)}
          />
          {/* Sidebar */}
          <div className="relative z-50 w-64 h-full">
            <Sidebar onClose={() => setSidebarOpen(false)} />
          </div>
        </div>
      )}

      {/* Modal Logout */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-4">Konfirmasi Logout</h3>
            <p className="mb-6">Apakah Anda yakin ingin keluar dari panel admin?</p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Batal
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}