import React from 'react'
import { useCart } from '../context/CartContext';
import './css/cart.css'; 

const Cart = () => {
    const {cartItems, remove, removeAll} = useCart();
    var total = 0;

    cartItems.map((item) => {
        total = total + item.price;
    })

    return (
        <div className='cart-container'>

            <marquee><h1>Cart Items</h1></marquee>

            <button onClick={removeAll} className='remove-all-btn'>Remove All</button>

            {cartItems.map((item) => (

                <div className='cart-item' key={item.id}>

                    <div className="cart-img">
                        <img src={item.image} alt={item.name} className='item-image'/>
                        <p className='item-name'>{item.name}</p>
                    </div>

                    <div className='quantity-control'>

                        <button className='quantity-btn' >+</button>
                        <button className='quantity-btn' >{item.amount}</button>
                        <button className='quantity-btn' >-</button>
                    </div>

                    <div className='item-details'>
                        <span className='item-price'>₹ {item.price}</span>
                        <button onClick={() => remove(item)} className='remove-btn'>Remove</button>
                    </div>
                </div>
            ))}
            <div className='total'>
                <span className='total-label'>Total :  </span>
                <span className='total-price'> ₹ {total===0 ? 'No Items' : total}</span>
            </div>
        </div>
    );
}

export default Cart;
