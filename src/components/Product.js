import React, {useCallback, useContext, useState} from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {ShopOnlineContext} from "../Context";


export const Product = ({product}) => {
    const [description, setDescription] = useState(false)
    const [numOfProducts, setNumOfProducts] = useState(0)
    const {calculateFinalPrice,removeItem} = useContext(ShopOnlineContext)



    const addToCart = () => {
        setNumOfProducts(numOfProducts + 1)
    }

    const removeFromCart = () => {
        numOfProducts >= 1 && (
            setNumOfProducts(numOfProducts - 1))

    }


    const finalResult = () => {
       const price = numOfProducts * product.price
        return price
    }




    return (
        <div className='product'>
            <div className='product-name-and-button'>
            <h3 className='product-name'>{product.name}</h3>
            <button onClick={()=>removeItem(product.id,finalResult())}>x</button>
            </div>
            <img alt={product.name} src={product.image}/>
            <div className='product-data'>
                <p>Price:{product.price}$</p>
                <p>{product.capacity}</p>
            </div>
            <div className="product-buttons">
                <button className='more-info-btn' onClick={() => setDescription(!description)}>More info</button>
                <div className='add-to-cart-btns'>
                    <button onClick={removeFromCart}>-</button>
                    <button>{numOfProducts}</button>
                    <button onClick={addToCart}>+</button>
                    <ShoppingCartIcon className='cart-icon' onClick={() => calculateFinalPrice(finalResult(),product.id)}/>

                </div>
            </div>
            {description && <p className='description'>{product.description}</p>}
        </div>
    )

}