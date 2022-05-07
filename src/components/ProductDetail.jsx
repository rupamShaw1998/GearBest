
import axios from "axios"
import { useParams } from "react-router-dom"
import {useState ,useEffect} from 'react'
import '../styles/ProductDetails.css'
import {Counter} from '../components/Counter'
import {Icons} from '../components/Icons'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";

// import {productData} from "../Redux/action"

 

export const ProductDetail = () => {
  const [product,setProduct] = useState([])
  const dispatch = useDispatch()
    
    let {id} = useParams()
 
    useEffect(() => {
      axios.get(`http://localhost:7005/all${id}`).then(({data})=>{
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
    return (
      <div className="product_details">
          <div className="flex_container">
              <div className="flex_image">
                 <img className="product_image" src={product.imgUrl}/>
              </div>
              <div className="about_product">
                 <h4 className="product_name">{product.title}</h4>
              
                 <p className="product_price">`Price : ${product.price}`</p>
                 <p className="product_shipping">` Shipping : `</p>
                 <p className="product_color">` Color : `</p>
                 <p className="product_size">`Size : `</p>
              </div>
             
          </div>
    
        
      </div>
    );
  };

