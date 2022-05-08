



import { Routes, Route } from "react-router-dom";


import { Footer } from "./Footer";
import { LandingPage } from "./landingPage";
import { ProductDetail } from "./ProductDetail";
import { Cart } from "./pages/Cart";
import { CartPage } from "./CartPage";
import { KitchenDetail } from "./KitchenDetail";
import { LaptopDetail } from "./LaptopDetail";
import { ScienceDetail } from "./ScienceDetail";
import { MobileDetail } from "./MobileDetail";
import { CycleDetail } from "./CycleDetail";
import { Navbar } from "./Navbar";
import { Category } from "./allCatagory";
import { SignInPage } from "./auth";
import {Shipping} from "./Shipping"
import {Confirm} from "./Confirm"
export const AllRoutes=()=>{

    return(
        <div>
        
        


<Routes>
        
        <Route path="/catagorys" element={<Category />}></Route>
        
        <Route path="/product/:id" element={<ProductDetail />}></Route>
        <Route path="/productDetails/cart/:id" element={<Cart />}></Route>
        <Route path='/cartPage' element={<CartPage />}></Route>
        <Route path='/KitchenDetail/:id' element={<KitchenDetail />}></Route>
        <Route path='/LaptopDetail/:id' element={<LaptopDetail />}></Route>
        <Route path='/ScienceDetail/:id' element={<ScienceDetail />}></Route>
        <Route path='/MobileDetail/:id' element={<MobileDetail />}></Route>
        <Route path="/CycleDetail/:id" element={<CycleDetail />}></Route>

      </Routes>
     <Footer></Footer>
        
        </div>
    )
}