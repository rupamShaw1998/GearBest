
import axios from "axios"
import { useParams } from "react-router-dom"
import {useState ,useEffect} from 'react'


export const EmployeeDetails = () => {
    const  [product,setProduct] = useState([])
    
    const {id} = useParams()
    useEffect(()=> {
       axios.get(`http://localhost:8080/employee/${id}`).then(({data})=>{
           setProduct (data)
       })
    },[])
   
    return (
      <div className="product_details">
          <div className="flex_container">
              <div className="flex_image">
                 <img className="product_image" src={product.image}/>
              </div>
              <div className="about_product">
                 <h4 className="product_name">{product.name}</h4>
                 <p className="product_version">{product.version}</p>
                 <p className="product_price">`$Price : {product.price}`</p>
                 <p className="product_shipping">`$ Shipping : `</p>
                 <p className="product_color">`$ Color : `</p>
                 <p className="product_size">`$Size : `</p>
              </div>
             
          </div>
     
          
        
       
        <span className="user_salary">${product.salary}</span>
        <span className="tasks">
          <li className="task">{user.tasks}</li>
        </span>
        
      </div>
    );
  };

