import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearOrders } from '../../redux/slices/orderSlice';
import { useNavigate } from 'react-router-dom';
import './index.css'

const OrdersListPage = () => {
  const confirmedOrders = useSelector((state) => state.orders.confirmedOrders);
  const dispatch = useDispatch();
  const [expandedOrderId, setExpandedOrderId] = useState(null);
  const navigate = useNavigate();

  const toggleExpandOrder = (id) => {
    setExpandedOrderId(expandedOrderId === id ? null : id);
  };

  const handleClearOrders = () => {
    dispatch(clearOrders());
  };

  return (
    <div>
      <h1>Confirmed Orders</h1>
      <button onClick={handleClearOrders} disabled={confirmedOrders.length === 0}>
        Clear All Orders
      </button>
      <button onClick={() => navigate('/')} style={{ marginTop: '10px' }}>
        Create a new order
      </button>
      <div className='order-container'>
        {confirmedOrders.length === 0 ? (
          <p>No orders have been confirmed yet.</p>
        ) : (
          confirmedOrders.map((order) => (
            <div className='order-details'>
              <div key={order.id}>
                <button onClick={() => toggleExpandOrder(order.id)}>
                  Order #{order.id}
                </button>
                {expandedOrderId === order.id && (
                  <div>
                    <ul>
                      {order.items.map((item, index) => (
                        <li key={index}>
                          {item.name}
                        </li>
                      ))}
                    </ul>
                    <p>
                    <strong>Total Price: </strong>$
                    {(order.total / 100).toFixed(2)}
                  </p>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default OrdersListPage;
