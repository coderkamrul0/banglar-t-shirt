import React from 'react';

const Cart = ({cart,handleRemoveFromCart}) => {

    let message;
    if(cart.length === 0){
        message = <p>Please add some products</p>
    }else{
        message = <p>Thanks for wasting your money</p>
    }

    return (
        <div>
            <h3>Order summary: {cart.length}</h3>
            
            {message}
            {cart.length > 2 ? <span>Buy More</span>: <span>Goribs</span>}

            {
                cart.map(tshirt =><p key={tshirt._id}>
                    {tshirt.name}
                    <button onClick={()=>handleRemoveFromCart(tshirt._id)} >x</button></p>)
            }
        </div>
    );
};

export default Cart;