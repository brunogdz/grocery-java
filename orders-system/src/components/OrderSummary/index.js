import React, { useState, useEffect } from 'react';

const fetchProductDetails = async (productId) => {
  try {
    const response = await fetch(`http://127.0.0.1:8081/products/${productId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch product details');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching product details:', error);
    return null;
  }
};

const OrderSummary = ({ order, setTotalPrice }) => {
  const [promotions, setPromotions] = useState({});

  useEffect(() => {
    const fetchPromotions = async () => {
      const uniqueProducts = [...new Set(order.map((item) => item.id))];
      const promotionsData = {};

      for (const productId of uniqueProducts) {
        const productDetails = await fetchProductDetails(productId);
        if (productDetails && productDetails.promotions) {
          promotionsData[productId] = productDetails.promotions;
        }
      }

      setPromotions(promotionsData);
    };

    fetchPromotions();
  }, [order]);

  const calculateSavings = (order) => {
    let totalSavings = 0;
    let totalPrice = 0;

    const itemGroups = order.reduce((acc, item) => {
      acc[item.id] = acc[item.id] ? acc[item.id] + 1 : 1;
      return acc;
    }, {});

    Object.entries(itemGroups).forEach(([productId, quantity]) => {
      const product = order.find((item) => item.id === productId);
      const itemPromotions = promotions[productId] || [];

      
      let effectivePrice = product.price * quantity;

      
      itemPromotions.forEach((promo) => {
        if (promo.type === 'QTY_BASED_PRICE_OVERRIDE' && quantity >= promo.required_qty) {
          
          const applicableSets = Math.floor(quantity / promo.required_qty);
          const remainder = quantity % promo.required_qty;

          effectivePrice = applicableSets * promo.price + remainder * product.price;
          totalSavings += (product.price * quantity) - effectivePrice;
        } else if (promo.type === 'BUY_X_GET_Y_FREE') {
          
          const requiredSets = Math.floor(quantity / (promo.required_qty + promo.free_qty));
          const chargeableItems = requiredSets * promo.required_qty + (quantity % (promo.required_qty + promo.free_qty));

          effectivePrice = chargeableItems * product.price;
          totalSavings += (product.price * quantity) - effectivePrice;
        } else if (promo.type === 'FLAT_PERCENT') {
          
          const discount = (product.price * promo.amount) / 100;
          totalSavings += discount * quantity;
          effectivePrice -= discount * quantity;
        }
      });
      
      totalPrice += effectivePrice;
    });
    setTotalPrice(totalPrice);
    return { totalPrice, totalSavings };
  };

  const { totalPrice, totalSavings } = calculateSavings(order);

  return (
    <div>
      <h2>Order Summary</h2>
      <p>Total Price: ${(totalPrice / 100).toFixed(2)}</p>
      <p>Total Savings: ${(totalSavings / 100).toFixed(2)}</p>
    </div>
  );
};

export default OrderSummary;
