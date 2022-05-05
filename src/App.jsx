import { useState } from 'react';
import logo from './logo.svg';
import './App.css'
import {Footer} from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { LandingPage } from './components/landingPage';
import { Routes, Route } from "react-router-dom";
import { ProductDetail } from "./components/ProductDetail";
import { CollectionDetail } from "./components/CollectionDetail";

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="" element={<LandingPage />}></Route>
        <Route path="/product/:id" element={<ProductDetail />}></Route>
        <Route path="/collection/:id" element={<CollectionDetail />}></Route>
      </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
