import React, { useState } from 'react';

const OrdersListPage = ({ confirmedOrders }) => {
  const [expandedOrderId, setExpandedOrderId] = useState(null);

  const toggleExpandOrder = (id) => {
    setExpandedOrderId(expandedOrderId === id ? null : id);
  };

  return (
    <div>
      <h1>Confirmed Orders</h1>
      {confirmedOrders.length === 0 ? (
        <p>No orders have been confirmed yet.</p>
      ) : (
        confirmedOrders.map((order) => (
          <div key={order.id}>
            <button onClick={() => toggleExpandOrder(order.id)}>
              Order #{order.id}
            </button>
            {expandedOrderId === order.id && (
              <div>
                <ul>
                  {order.items.map((item, index) => (
                    <li key={index}>
                      {item.name} - ${(item.price / 100).toFixed(2)}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default OrdersListPage;
