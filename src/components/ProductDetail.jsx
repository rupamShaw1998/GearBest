
import axios from "axios"
import { useParams } from "react-router-dom"
import {useState ,useEffect} from 'react'



export const ProductDetail = () => {
  const [product,setProduct] = useState([])
    
    let {id} = useParams()
 
    useEffect(() => {
      axios.get(`http://localhost:7005/all${id}`).then(({data})=>{
          setProduct(data)
  })
  },[])
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

