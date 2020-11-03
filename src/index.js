import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ShopOnlineContextProvider} from "./Context";

ReactDOM.render(
    <ShopOnlineContextProvider>
    <App />
    </ShopOnlineContextProvider>,
  document.getElementById('root')
);


