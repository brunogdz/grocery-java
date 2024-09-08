import React, { useState, useEffect } from 'react';
import OrderList from '../../components/OrderList';
import OrderSummary from '../../components/OrderSummary';

const OrderPage = () => {
  const [order, setOrder] = useState([]);
  const [confirmedOrders, setConfirmedOrders] = useState([]);

  const addToOrder = (product) => {
    setOrder((prevOrder) => [...prevOrder, product]);
  };

  const confirmOrder = () => {
    const newOrder = {
      id: confirmedOrders.length + 1,
      items: order,
    };
    setConfirmedOrders([...confirmedOrders, newOrder]);
    setOrder([]);
  };

  return (
    <div>
      <h1>Order Products</h1>
      <OrderList setOrder={setOrder} order={order} addToOrder={addToOrder} />
      <OrderSummary order={order} />
      <button onClick={confirmOrder} disabled={order.length === 0}>
        Confirm Order
      </button>
    </div>
  );
};

export default OrderPage;
