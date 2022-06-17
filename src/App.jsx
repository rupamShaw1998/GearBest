import { useState } from 'react';
import logo from './logo.svg'; 
import './App.css';
import { Footer} from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { LandingPage } from './components/landingPage';
import { Routes, Route } from "react-router-dom";
import { ProductDetail } from "./components/ProductDetail";
import { Cart } from "./components/pages/Cart";
import { Category } from './components/allCatagory';
import { CartPage } from './components/CartPage';
import { KitchenDetail } from "./components/KitchenDetail";
import { LaptopDetail } from "./components/LaptopDetail";
import { ScienceDetail } from "./components/ScienceDetail";
import { MobileDetail } from "./components/MobileDetail";
import { CycleDetail } from "./components/CycleDetail";
import { SignInPage } from './components/auth';
//import { AllRoutes } from './components/allRoutes';
import {useDispatch, useSelector} from "react-redux"
import {Protected} from "./components/PrivateCounter"


function App() {
  const [sig,setSig]=useState(false)
  const status = useSelector((store)=>{
    return store.isLogin.isLogin
  })

 // console.log(status)

  return (
    <div className="App">
      <Navbar />
    
      <Routes>
        <Route path='/auth' element={<SignInPage/>}></Route>
         <Route path="/catagorys" element={<Protected><Category /></Protected>}></Route>
         <Route path="/" element={<LandingPage />}></Route>
         <Route path="/product/:id" element={<Protected><ProductDetail /></Protected>}></Route>
         <Route path="/productDetails/cart/:id" element={<Protected><Cart /></Protected>}></Route>
         <Route path='/cartPage' element={<Protected><CartPage /></Protected>}></Route>
         <Route path='/KitchenDetail/:id' element={<Protected><KitchenDetail /></Protected>}></Route>
         <Route path='/LaptopDetail/:id' element={<Protected><LaptopDetail /></Protected>}></Route>
         <Route path='/ScienceDetail/:id' element={<Protected><ScienceDetail /></Protected>}></Route>
       <Route path='/MobileDetail/:id' element={<Protected><MobileDetail /></Protected>}></Route>
        <Route path="/CycleDetail/:id" element={<Protected><CycleDetail /></Protected>}></Route>
     </Routes>
     <Footer></Footer>
      
   
    </div>
  );
}

export default App;

//<Navbar />
// <Routes>
//         <Route path="/catagorys" element={<Category />}></Route>
//         <Route path="" element={<LandingPage />}></Route>
//         <Route path="/product/:id" element={<ProductDetail />}></Route>
//         <Route path="/productDetails/cart/:id" element={<Cart />}></Route>
//         <Route path='/cartPage' element={<CartPage />}></Route>
//         <Route path='/KitchenDetail/:id' element={<KitchenDetail />}></Route>
//         <Route path='/LaptopDetail/:id' element={<LaptopDetail />}></Route>
//         <Route path='/ScienceDetail/:id' element={<ScienceDetail />}></Route>
//         <Route path='/MobileDetail/:id' element={<MobileDetail />}></Route>
//         <Route path="/CycleDetail/:id" element={<CycleDetail />}></Route>
//       </Routes>
//      <Footer></Footer>