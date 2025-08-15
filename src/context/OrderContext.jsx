import { createContext, useContext, useState } from 'react';

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const addOrder = (orderData) => {
    const newOrder = {
      id: Date.now().toString(),
      date: new Date(),
      status: 'pending',
      ...orderData,
    };
    setOrders(prev => [newOrder, ...prev]);
    return newOrder;
  };

  const updateOrderStatus = (orderId, status) => {
    setOrders(prev => prev.map(order => 
      order.id === orderId ? { ...order, status } : order
    ));
  };

  return (
    <OrderContext.Provider value={{
      orders,
      addOrder,
      updateOrderStatus,
    }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrders must be used within an OrderProvider');
  }
  return context;
};