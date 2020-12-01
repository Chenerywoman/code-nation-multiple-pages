import React from 'react';
import './Product.css';
import Border from './Border';

const Product = (props) => {
    return (
        <div className="product">
            <h1>{props.name}</h1>
            <h4>Price: £{props.price}</h4>
            <button onClick={props.addBasket}>Add to Basket</button>
        </div>
    )
}

export default Border(Product)
