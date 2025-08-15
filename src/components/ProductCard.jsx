import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
    
    // Show success message or animation
    const button = e.target;
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="ri-check-line"></i> Added!';
    button.disabled = true;
    
    setTimeout(() => {
      button.innerHTML = originalText;
      button.disabled = false;
    }, 1500);
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.featured && (
            <div className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
              Featured
            </div>
          )}
          <div className="absolute top-3 right-3 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full text-xs">
            Stock: {product.stock}
          </div>
        </div>
      </Link>

      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mb-3">
          <span className="text-xl font-bold text-blue-600">
            {formatPrice(product.price)}
          </span>
          <div className="flex items-center space-x-1 text-sm text-gray-500">
            <i className="ri-award-line"></i>
            <span>{product.care_level}</span>
          </div>
        </div>

        <div className="flex space-x-2">
          <Link 
            to={`/product/${product.id}`}
            className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors text-center text-sm font-medium"
          >
            Detail
          </Link>
          <button 
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            {product.stock === 0 ? 'Habis' : <><i className="ri-shopping-cart-line mr-1"></i>Cart</>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;