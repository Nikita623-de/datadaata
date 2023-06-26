import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ProductStore from './store/ProductStore';
import DiskStore from './store/DiskStore';
export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Context.Provider value={{ product: new ProductStore(), disk: new DiskStore() }}>
      <App />
    </Context.Provider>
  </BrowserRouter>,
);
