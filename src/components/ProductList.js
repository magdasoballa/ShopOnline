import React, {useContext} from 'react'
import {Product} from "./Product";
import '../styles/products.scss'
import {ShopOnlineContext} from "../Context";

export const ProductList = ({data}) => {
    const {searchResults} = useContext(ShopOnlineContext)


    return (
        <div className='products-list'>
            {searchResults && searchResults.map(product => <Product product={product} key={product.id}/>
            )
            }
        </div>
    )
}