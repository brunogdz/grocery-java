import React, { useState, useEffect } from 'react';
import OrderList from '../../components/OrderList';
import OrderSummary from '../../components/OrderSummary';

const OrderPage = ({ confirmedOrders, setConfirmedOrders }) => {
  const [order, setOrder] = useState([]);

  const addToOrder = (product) => {
    setOrder((prevOrder) => [...prevOrder, product]);
  };

  const removeFromOrder = (product) => {
    setOrder((prevOrder) => {
      const index = prevOrder.findIndex((item) => item.id === product.id);
      if (index !== -1) {
        const newOrder = [...prevOrder];
        newOrder.splice(index, 1);
        return newOrder;
      }
      return prevOrder;
    });
  };

  const confirmOrder = () => {
    const newOrder = {
      id: confirmedOrders.length + 1,
      items: order,
    };
    setConfirmedOrders([...confirmedOrders, newOrder]);
    setOrder([]);

    console.log(confirmedOrders)
  };

  useEffect(() => {
    console.log('Confirmed Orders Updated:', confirmedOrders);
  }, [confirmedOrders]);

  

  return (
    <div>
      <h1>Order Products</h1>
      <OrderList order={order} addToOrder={addToOrder} removeFromOrder={removeFromOrder} />
      <OrderSummary order={order} />
      <button onClick={confirmOrder} disabled={order.length === 0}>
        Confirm Order
      </button>
    </div>
  );
};

export default OrderPage;
