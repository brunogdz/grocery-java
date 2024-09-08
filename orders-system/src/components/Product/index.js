import React from 'react';
import './index.css'
import pizzaImage from '../../assets/pizza.jpg'
import burgerImage from '../../assets/burger.jpg';
import saladImage from '../../assets/salad.jpg';
import friesImage from '../../assets/fries.jpg';

const Product = ({ product, addToOrder, removeFromOrder, quantities, id, name }) => {
    const getImageById = (id) => {
        switch (id) {
            case 'Dwt5F7KAhi':
                return pizzaImage;
            case 'PWWe3w1SDU':
                return burgerImage;
            case 'C8GDyLrHJb':
                return saladImage;
            case '4MB7UfpTQs':
                return friesImage;
            default:
                return null;
        }
    };

    const productImage = getImageById(id);


    return (
        <div className="container">
            <h2 className='title'>{name}</h2>
            <img src={productImage} alt={product} className="product-image" />
            <div className='buttons'>
                <button onClick={() => removeFromOrder(product)} disabled={!quantities}>
                    -
                </button>
                <span>{quantities}</span>
                <button onClick={() => addToOrder(product)}>+</button>
            </div>
        </div>
    )
}

export default Product;