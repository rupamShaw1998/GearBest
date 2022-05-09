import React, { Fragment } from "react";
import { CheckoutSteps } from "./CheckoutSteps";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import "../styles/Confirm.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "../styles/CheckoutSteps.css"

export const Confirm = () => {

  const shippingInfo = useSelector((store) => store.shippingInfo.shippingInfo);


  const [user, setUser] = useState([]);
  const [placeOrder, setplaceOrder] = useState([]);

  const [handle, setHandle] = useState(false)

  const [sum, grandSum] = useState(0)

  const [text, setText] = useState("")


  useEffect(() => {
    axios.get(`http://localhost:7005/addAddress`).then(({ data }) => {
      console.log("dbdata", data);
      setUser(data);
    });
  }, []);
  useEffect(() => {
    axios.get(`https://morning-scrubland-78864.herokuapp.com/placeorder`).then(({ data }) => {
      console.log("placeorderdata", data);
      setplaceOrder(data);
    });
  }, []);

  let total = 0;

  placeOrder.map((item) => {
    total += (item.price)
  })

  let count = 0;

  let coupon;

  let grand = total + 11
  
  let totalSum;
  function handleAdd() {

    if (text == "Masai30" && count == 0) {
      coupon = Math.ceil(0.3 * total)


      setHandle(true)
      totalSum = (total - coupon)
      grandSum(totalSum);


    }
    else if (text == "Masai30" && count >= 1) {
      count++;
      alert("Coupon Code can only be applied once")

    }

    else {
      alert("Coupon Code Invalid");
    }
  }

const amount=()=>{
  localStorage.setItem("amount",JSON.stringify(sum))
}


  return (
    <Fragment>
      <div className="mainConatiner">
    
        {/* <div className="gearBestImgInConfirm">
          <img src="https://uidesign.gbtcdn.com/GB/images/promotion/2019/a_evan/Gearbest/logo_gearbest.png"></img>
        </div> */}
        <CheckoutSteps activeStep={1} />
        <h2 style={{ marginLeft: "4%" }}>Shipping Information</h2>
    
        {/* {user.map((t) => (
          <div className="container">
            <h3 style={{ display: "flex" }}>
              {t.First_Name} {t.Last_Name}{" "}
              <div className="default">Default</div>
            </h3>
            <p>
              {t.PhoneNo} / {t.Email}
            </p>

            <p>{t.Address}</p>

            <p>
              Country:{t.Country}, *Pin: {t.PinCode}, *State :{t.State}
            </p>
          </div>
        ))} */}


        <div className="container">
          <h3 style={{ display: "flex" }}>
            {shippingInfo.firstName} {shippingInfo.lastName}{" "}
            <div className="default">Default</div>
          </h3>
          <p>
            {shippingInfo.phoneNo} / {shippingInfo.email}
          </p>

          <p>{shippingInfo.address}</p>

          <p>
            Country:{shippingInfo.country}, *Pin: {shippingInfo.pinCode}, *State :{shippingInfo.state}
          </p>
        </div>


        

        
          <div style={{width:"90%",display:"flex",margin:"auto",backgroundColor:"white",border:"1px solid gray",padding:"3px",paddingLeft:"15px",paddingRight:"15px",marginBottom:"20px"}}>
            <p style={{width:"90%"}}>Selected Item(s)</p>
            <p>Subtotal</p>
          </div>
       

        <div >
          {placeOrder.map((e) => (
            <div className="mainDivOfOrderItems">
              <div className="divForImg">
                <img src={e.imgUrl} alt="" />
              </div>
              <div className="divForTitle">
                <p>{e.title}</p>
              </div>
              <div style={{ width: "15%" }}>
                <p className="ptagforPrice">${e.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mainDivOfOrderTotal">
          <div style={{ width: "80%" }}>
            <input className="Coupon" type="radio" id="html" name="fav_language" value="HTML" />
            <label for="html">Apply Coupon</label>
            <br></br>
            <input className="enterCoupon" onChange={(e) => setText(e.target.value)} type="text" placeholder="Enter Coupon Code" />
            <button className="Apply" onClick={handleAdd} >Apply</button>
            <ul type="circle">
              <li >Use G Points?</li>
              <p>Every order you place with us is completely safe and secure!</p>
              <li>Order Requirement:Dropshipping</li>
            </ul>

          </div>
          <div style={{ width: "20%", }}>
            <div className="itemtotal" >
              <p >Item SubTotal </p>
              <p > ${total}</p>

            </div>

            <div className="itemtotal">
              <p>Shipping Cost</p>
              <p>$11.00</p>
            </div>
            <hr />

            <div className="itemtotal">
              <h3>Grand Total</h3>

              {handle ? (

                <h1 style={{ color: "rgb(211,0,129)" }}>${sum}</h1>
              ) : (
                <h1 style={{ color: "rgb(211,0,129)" }}>${grand}</h1>
              )}
            </div>
            <Link to="/payment">


             

            <button onClick={amount} className="placeOrder">PLACE ORDER</button>

            </Link>
          </div>


        </div>
      </div>
    </Fragment>
  );
};
