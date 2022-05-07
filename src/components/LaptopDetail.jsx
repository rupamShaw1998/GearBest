

import axios from "axios"
import { useParams } from "react-router-dom"
import {useState ,useEffect} from 'react'
import '../styles/ProductDetails.css'
import {Counter} from './Counter'
import {Icons} from './Icons'
import {Link} from 'react-router-dom'
 

export const LaptopDetail = () => {
  const [product,setProduct] = useState([])
    
    let {id} = useParams()
 
    useEffect(() => {
      axios.get(`http://localhost:7005/laptop/${id}`).then(({data})=>{
          setProduct(data)
  })
  },[])
console.log(product)
  const setData=()=>{
    fetch(`http://localhost:7005/addtocart`,{
    method:'POST',
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(product)
  })
   localStorage.setItem('addtocart',JSON.stringify(product))
  }

  const setOrder=()=>{
    fetch(`http://localhost:7005/placeorder`,{
    method:'POST',
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(product)
  })
   localStorage.setItem('placeorder',JSON.stringify(product))

  }
    return (
      <div className="product_details">
          <div className="flex_container">
              <div className="flex_image">
                 <img className="product_image" src={product.imgUrl}/>
              </div>
              <div className="about_product">
                 <h3 className="product_name">{product.title}</h3>
                <div className="flash_sale">
                  <div>
                  <h1>FLASH SALE</h1>
                  </div>
                  <p>10 sold</p>
                </div>
                <span>
                  <p className="product">Price  : </p>
                  <h2 className="product_price"> ${product.price}</h2>
                  <p> $ {(product.price*1.2).toFixed(2)} </p>
                </span>
                <div className="shipping">
                 <p className="product">Shipping : </p>
                 <p>FREE SHIPPING to United States Via Priority Line </p>
                  </div>
                  <p>Ship between: May 09 - May 13, Estimated Shipping Time: 7-30 business days 
                  </p>
                  <div className="color">
                   <p className="product"> Color : </p>
                   <div>Blue</div>
                   <div>Grey</div>
                   <div>Black</div>
                  </div>
                  <div className="qty">
                  <p className="product">QTY : </p>
                  <div>
                 <Counter />
                  </div>
                  <p>in stock</p>
                  </div>

                
               
              </div>
          
             
          </div>
          <div className="cart">
          <div className="socialmedia">
            <Icons />
            </div>
          <div className="cartbtn">
            <Link id="linkbutton" to={`/productDetails/cart/${product._id}`}>
          <button className="linkbtn" onClick={setData}>Add To Cart</button>
          </Link>
          <Link id="linkbutton" to={`/shipping`}>
          <button className="linkbtn" onClick={setOrder}>Buy Now</button>
          </Link>
           <button>PayPal</button>
           </div>
           </div>
      </div>
    );
  };