import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addOrder } from '../../redux/slices/orderSlice';
import OrderList from '../../components/OrderList';
import OrderSummary from '../../components/OrderSummary';
import { useNavigate } from 'react-router-dom';

const OrderPage = () => {
  const [order, setOrder] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const confirmedOrders = useSelector((state) => state.orders.confirmedOrders);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      total: totalPrice,
    };
    console.log("Total price on confirm:", totalPrice);
    dispatch(addOrder(newOrder));
    setOrder([]);
    setTotalPrice(0);
  };

  return (
    <div>
      <h1>Order Products</h1>
      <OrderList order={order} addToOrder={addToOrder} removeFromOrder={removeFromOrder} />
      <OrderSummary order={order} setTotalPrice={setTotalPrice} />
      <button onClick={confirmOrder} disabled={order.length === 0}>
        Confirm Order
      </button>
      <button onClick={() => navigate('/orders')} style={{ marginTop: '10px' }}>
        View Confirmed Orders
      </button>
    </div>
  );
};

export default OrderPage;
