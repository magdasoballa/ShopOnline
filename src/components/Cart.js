import React, {useContext} from 'react'
import {ShopOnlineContext} from "../Context";
import '../styles/cart.scss'

export const Cart = () => {
    const{finalCost,finalShipping,updateCart,totalCost}=useContext(ShopOnlineContext)


    return (
        <div className='cart'>
            <div className="cart-content">
            <h3>Shipping cost: {finalShipping}</h3>
            <h3>Products cost: {finalCost.toFixed(2)} $</h3>
            <button onClick={updateCart}>Calculate</button>
            <h2>Total:{totalCost.toFixed(2)}</h2>

            </div>
        </div>
    )
}