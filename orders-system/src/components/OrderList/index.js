import React, { useState, useEffect } from 'react';

const OrderList = ({ addToOrder }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the backend API
    fetch('http://127.0.0.1:8081/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <h1>Order List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${(product.price / 100).toFixed(2)}
            <button onClick={() => addToOrder(product)}>Add to Order</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
