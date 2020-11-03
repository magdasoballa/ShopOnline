import React, {useContext, useState} from 'react'
import {ShopOnlineContext} from "../Context";
import '../styles/header.scss'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

export const Header = () => {
    const {searchTerm,setSearchTerm,submitInput,handleKeyPress} = useContext(ShopOnlineContext)




    return (
        <div className='header'>
            <h1 className='main-title'>NaturalShop.com</h1>
            <div className='find-product'>
            <input id='input' type='text' placeholder='find what you need' value={searchTerm} onChange={e=>setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
            />
            <ArrowForwardIcon onClick={submitInput} className='icon'/>
            </div>
        </div>
    )
}