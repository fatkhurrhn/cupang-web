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
import AdminLayout from './admin/AdminLayout';
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
            <Route path="/" element={
              <>
                <Navbar />
                <Home />
                <Footer />
              </>
            } />
            <Route path="/catalog" element={
              <>
                <Navbar />
                <Catalog />
                <Footer />
              </>
            } />
            <Route path="/product/:id" element={
              <>
                <Navbar />
                <ProductDetail />
                <Footer />
              </>
            } />
            <Route path="/cart" element={
              <>
                <Navbar />
                <Cart />
                <Footer />
              </>
            } />
            <Route path="/checkout" element={
              <>
                <Navbar />
                <Checkout />
                <Footer />
              </>
            } />
            <Route path="/education" element={
              <>
                <Navbar />
                <Education />
                <Footer />
              </>
            } />
            <Route path="/blog" element={
              <>
                <Navbar />
                <Blog />
                <Footer />
              </>
            } />
            <Route path="/blog/:id" element={
              <>
                <Navbar />
                <BlogPost />
                <Footer />
              </>
            } />
            <Route path="/orders" element={
              <>
                <Navbar />
                <OrderHistory />
                <Footer />
              </>
            } />
            <Route path="/about" element={
              <>
                <Navbar />
                <About />
                <Footer />
              </>
            } />
            <Route path="/contact" element={
              <>
                <Navbar />
                <Contact />
                <Footer />
              </>
            } />

            {/* Admin Routes */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="products" element={<AdminProducts />} />
              <Route path="orders" element={<AdminOrders />} />
              <Route path="blog" element={<AdminBlog />} />
              <Route path="customers" element={<AdminCustomers />} />
            </Route>
          </Routes>
        </div>
      </OrderProvider>
    </CartProvider>
  );
}

export default App;