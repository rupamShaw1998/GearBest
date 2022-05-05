import styles from "./CartItem.module.css";
import { Card } from "../UI/Card";
import { useEffect, useState } from "react";
import axios from "axios"

export const CartItem = () => {
  const [Quantity, setQuantity] = useState(0);

  const [data,setdata] = useState([]);
  console.log(data)
  useEffect(() => {
    axios.get("http://localhost:7005/kitchen").then(({data})=>{
      setdata(data)
    })
  },[])
  
  return (
   
    <Card>
      <div className={`${styles.Container} ${styles.border}`}>
        <div className={styles.brandName}>
          <h4>GGSHM Store</h4>
        </div>
        <hr />
        <div className={`${styles.cartItem}`}>
          <div className={styles.ImageDiv}>
            <img
              src="https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16499/goods_img-v5/3aef13f28d2e.jpg"
              alt=""
              srcset=""
            />
            <div className={styles.ContentDiv}>
              <p>Global Version MI 11 Ultra 6.3 inch Smartphone</p>
              <p>Color:Gold</p>
              <p>Size:8G 512GB</p>
              <p>In Stock:P-1000</p>
            </div>
          </div>

          <div>
            <p className={styles.boldText}>$100.30</p>
          </div>
          <div className={styles.increDecreButton}>
            <button
              className={styles.buttonIncrement}
              onClick={() => {
                setQuantity((prev) => {
                  return prev - 1;
                });
              }}
            >
              -
            </button>
            <span className={styles.buttonIncrement}>{Quantity}</span>
            <button
              className={styles.buttonIncrement}
              onClick={() => {
               { setQuantity((prev) => {
                  return prev + 1;
                })
                setSubtotal(Subtotal*Quantity)}
              }}
            >
              +
            </button>
          </div>
          <div>
            <p className={styles.subtotal}>$100.30</p>
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
  );
};
