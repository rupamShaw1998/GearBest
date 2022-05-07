
import axios from "axios"
import {useState ,useEffect} from 'react'

import {Link} from "react-router-dom"


export const CartPage = () => {
  const [product,setProduct] = useState([])
    
 
  useEffect(() => {
    setData()
  }, [])

  const setData = () => {
    axios.get("http://localhost:7005/addtocart").then((res) => {
      setProduct(res.data);
      //  console.log(allprod);
    });
  };

    return (
    <div >
    
      
        {product.map((e)=>(
            <div>
        <img src={e.imgUrl} alt="" />
        <p>{e.title}</p>
        <p>{e.price}</p>
        </div>
        ))}
      
    </div>
  );
};
    