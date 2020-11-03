import React, {useContext} from 'react'
import './styles/app.scss';
import {Header} from './components/Header'
import {ProductList} from "./components/ProductList";
import {Cart} from "./components/Cart";
import {ShopOnlineContext} from "./Context";

const App = () => {
    const {data} = useContext(ShopOnlineContext)


    return (
        <>
            <Header/>
            <div className="main-content-container">
                <ProductList data={data}/>
                <Cart/>
            </div>
            </>
    );
}

export default App;
