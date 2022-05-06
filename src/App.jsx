import { useState } from 'react';
import logo from './logo.svg'; 
import './App.css'
import {Footer} from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { LandingPage } from './components/landingPage';
import { Routes, Route } from "react-router-dom";
import { ProductDetail } from "./components/ProductDetail";
import { Cart } from "./components/pages/Cart";
import { Category } from './components/allCatagory';
import {CartPage} from './components/CartPage'

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/catagorys" element={<Category />}></Route>
        <Route path="" element={<LandingPage />}></Route>
        <Route path="/product/:id" element={<ProductDetail />}></Route>
        <Route path="/productDetails/cart/:id" element={<Cart />}></Route>
        <Route path='/cartPage' element={<CartPage />}></Route>
        <Route path='/KitchenDetail' element={<KitchenDetail />}></Route>
        <Route path='/LaptopDetail' element={<LaptopDetail />}></Route>
        <Route path='/ScienceDetail' element={<ScienceDetail />}></Route>
        <Route path='/MobileDetail' element={<MobileDetail />}></Route>
      </Routes>
     <Footer></Footer>

    </div>
  );
}

export default App;
