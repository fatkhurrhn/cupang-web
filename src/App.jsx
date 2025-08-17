import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { OrderProvider } from './context/OrderContext';

// Frontend Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Education from './pages/Education';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import OrderHistory from './pages/OrderHistory';
import About from './pages/About';
import Contact from './pages/Contact';

// Admin Components
import AdminDashboard from './admin/pages/Dashboard';
import AdminProducts from './admin/pages/Products';
import AdminOrders from './admin/pages/Orders';
import AdminBlog from './admin/pages/Blog';
import AdminCustomers from './admin/pages/Customers';

function App() {
  return (
    <CartProvider>
      <OrderProvider>
        <div className="min-h-screen bg-white">
          <Routes>
            {/* Frontend Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/education" element={<Education />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/orders" element={<OrderHistory />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Admin Routes */}
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/products" element={<AdminProducts />} />
              <Route path="/admin/orders" element={<AdminOrders />} />
              <Route path="/admin/blog" element={<AdminBlog />} />
              <Route path="/admin/customers" element={<AdminCustomers />} />
          </Routes>
        </div>
      </OrderProvider>
    </CartProvider>
  );
}

export default App;