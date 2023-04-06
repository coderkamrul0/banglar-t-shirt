import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";


const Home = () => {

    const products = useLoaderData();

    const [cart,setCart] = useState([]);

    const handleAddToCart = (tshirt) =>{
        const exists = cart.find(ts => ts._id === tshirt._id);
        if(exists){
            toast.warning('Item Already Added')
        }else{
            toast.success("Item Successfully Added")
            const newCart =[...cart, tshirt];
            setCart(newCart);
        }
    }
    const handleRemoveFromCart = (id) =>{
        const remaining = cart.filter(tshirt => tshirt._id !== id)
        setCart(remaining)
    }

    return (
        <div className='home-container'>
            <div className='t-shirts-container'>
                {
                    products.map(product=> <TShirt product={product} key={product._id} handleAddToCart={handleAddToCart}></TShirt>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Home;