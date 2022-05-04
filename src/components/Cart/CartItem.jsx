import styles from "./CartItem.module.css";
import { Card } from "../UI/Card";

export const CartItem = () => {
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
            <div>
            <p>Global Version MI 11 Ultra 6.3 inch Smartphone</p>
            <p>Color:Gold</p>
            <p>Size:8G 512GB</p>
            <p>In Stock:P-1000</p>
          </div>
          </div>
          
          <div >
            <p className={styles.boldText}>$100.30</p>
          </div>
          <div className={styles.increDecreButton}>
            <button className={styles.buttonIncrement}>-</button>
            <span className={styles.buttonIncrement}>0</span>
            <button className={styles.buttonIncrement}>+</button>
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
