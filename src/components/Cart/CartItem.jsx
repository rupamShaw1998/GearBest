import styles from "./CartItem.module.css";
import { Card } from "../UI/Card";
import { useEffect, useState } from "react";
import axios from "axios"
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";

export const CartItem = () => {
  const [Quantity, setQuantity] = useState(0);
  
  const dispatch = useDispatch();
  // const cartData = useSelector((store)=>{
  //   return store.cart.cart
  // })

  // console.log(cartData)
  
  const [data,setData] = useState([])
  //console.log(data)

  useEffect(() =>{
    axios.get("http://localhost:7005/addtocart").then(({data})=>{
      setData(data)
    })
  },[])

  // const [data,setdata] = useState([]);
  // console.log(data)
  // useEffect(() => {
  //   axios.get("http://localhost:7005/kitchen").then(({data})=>{
  //     setdata(data)
  //   })
  // },[])
  const  addQuantityHandler = (item,e)=>{
     console.log(item.price,e)
     setQuantity((prev)=>{
       return prev+1
     })
  }
  const  removeQuantityHandler = (item,e)=>{
    console.log(item._id,e)
    setQuantity((prev)=>{
      return prev-1
    })
 }
  return (
   <div>{data.map((e)=>{
     
     return <Card>
     <div className={`${styles.Container} ${styles.border}`}>
       <div className={styles.brandName}>
         <h4>GGSHM Store</h4>
       </div>
       <hr />
       <div className={`${styles.cartItem}`}>
         <div className={styles.ImageDiv}>
           <img
             src={e.imgUrl}
             alt=""
             srcset=""
           />
           <div className={styles.ContentDiv}>
             <p>{e.title}</p>
             <p>Color:Gold</p>
             <p>Size:8G 512GB</p>
             <p>In Stock:P-1000</p>
           </div>
         </div>

         <div>
           <p className={styles.boldText}>{`$${e.price}`}</p>
         </div>
         <div className={styles.increDecreButton}>
           <button
             className={styles.buttonIncrement}
             onClick={removeQuantityHandler.bind(e._id,e)}
           >
             -
           </button>
           <span className={styles.buttonIncrement}>{Quantity}</span>
           <button
             className={styles.buttonIncrement}
             onClick={addQuantityHandler.bind(e._id,e)}
           >
             +
           </button>
         </div>
         <div>
           <p className={styles.subtotal}>{`$${e.price}`}</p>
         </div>
         <div>
           <div>
             <a href="">Edit</a>
           </div>

           <div>
             <a href="">Favourits</a>
           </div>
           <div>
             <button>Delete</button>
           </div>
         </div>
       </div>
     </div>
   </Card>
   })}</div>
    
  );
};
