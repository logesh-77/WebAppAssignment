import React from 'react';
import Navbar from './components/Navbar';
import Products from './components/Products';
import CartContainer from './components/CartContainer';
import { AppProvider } from './context/Context';
import './sass/all.scss';

function App() {
  return (
    <main>
      <AppProvider>
        <Navbar />
        <Products />
        <CartContainer />
      </AppProvider>
    </main>
  );
}

export default App;
