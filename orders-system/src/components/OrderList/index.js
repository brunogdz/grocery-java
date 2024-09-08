import React, { useState, useEffect } from 'react';
import Product from '../Product';
import './index.css'

const OrderList = ({ addToOrder, removeFromOrder, order }) => {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    fetch('http://127.0.0.1:8081/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  useEffect(() => {
    const qty = {};
    order.forEach((item) => {
      qty[item.id] = qty[item.id] ? qty[item.id] + 1 : 1;
    });
    setQuantities(qty);
  }, [order]);

  return (
    <div>
      <h1>Order List</h1>
      <div className='menu'>

        {products.map((product) => (
          <div>
            <Product key={product} id={product.id} product={product} quantities={quantities[product.id] || 0} name={product.name} addToOrder={addToOrder}
              removeFromOrder={removeFromOrder} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderList;
