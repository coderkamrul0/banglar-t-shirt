import React from 'react';
import './TShirt.css'
const TShirt = ({product,handleAddToCart}) => {
    const {price,picture,name,gender} = product;
    return (
        <div>
            <div className="t-shirt">
                <img src={picture} alt="" />
                <h4>{name}</h4>
                <p>Price: ${price}</p>
                <button onClick={()=>handleAddToCart(product)}>Buy Now</button>
            </div>
        </div>
    );
};

export default TShirt;