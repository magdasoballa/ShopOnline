import React, {createContext, useEffect, useState} from 'react'
import {products} from "./products";


export const ShopOnlineContext = createContext()

export const ShopOnlineContextProvider = (props, product) => {
    const [data, setData] = useState([])
    const [productsCost] = useState(0)
    const [finalCost, setFinalCost] = useState(0);
    const [totalCost, setTotalCost] = useState(0);
    const [finalShipping, setFinalShipping] = useState(15.9);
    const [productList] = useState({})
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const submitInput = () => {
        const results = products.filter((product) =>
            product.name.toLowerCase() == searchTerm
        );
        if (results.length === 0) {
            alert('no products found')
        } else {
            setSearchResults(results)
        }
        if (searchResults.length >= 1) {
            const newArray = [...searchResults, ...results]
            setSearchResults(newArray)
        }
        setSearchTerm('')
    }


    useEffect(() => {
        setData(products)
    }, []);

    const calculateFinalPrice = (sumOfPrices, id) => {
        productList[id] = sumOfPrices;
        let currentPrice = 0;
        for (const idProduct in productList) {
            currentPrice += productList[idProduct];
        }

        setFinalCost(Number(currentPrice))
        if (currentPrice >= 100) {
            setFinalShipping(0)
        } else {
            setFinalShipping(15.90)
        }
    }


    const updateCart = () => {
        const newShipping = finalShipping
        const newCost = finalCost
        const result = Number(newShipping + newCost)
        setTotalCost(result)
        if(searchResults.length === 0){
            setTotalCost(0)
            setFinalCost(0)
        }
    }

    const removeItem = (id,cost) => {
        const newResults =searchResults.filter(el => el.id !== id )
        setSearchResults(newResults)

        const oldFinal = finalCost
        const newFinal=oldFinal - cost
        setFinalCost(Number(newFinal))


        const oldTotal = totalCost
        const newTotal = oldTotal - cost
        setTotalCost(Number(newTotal))
    }

    const handleKeyPress = e => {
        console.log(e)
        if (e.key === 'Enter') {
            console.log('dupa')

            submitInput()
        }
    }

    return (
        <ShopOnlineContext.Provider value={{
            data,
            productsCost,
            finalCost,
            calculateFinalPrice,
            finalShipping,
            updateCart,
            totalCost,
            setSearchTerm,
            searchTerm,
            searchResults,
            submitInput,
            removeItem,
            handleKeyPress
        }}
        >
            {props.children}
        </ShopOnlineContext.Provider>
    )
}