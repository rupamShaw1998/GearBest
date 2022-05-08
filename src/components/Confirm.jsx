import React, { Fragment } from "react";
import { CheckoutSteps } from "./CheckoutSteps";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import "../styles/Confirm.css";
import axios from "axios";
import { useParams } from "react-router-dom";
export const Confirm = () => {
  // const shippingInfo =useSelector((store)=>store.shippingInfo);

  const [user, setUser] = useState([]);
  const [placeOrder, setplaceOrder] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:7005/addAddress`).then(({ data }) => {
      console.log("dbdata", data);
      setUser(data);
    });
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:7005/placeorder`).then(({ data }) => {
      console.log("placeorderdata", data);
      setplaceOrder(data);
    });
  }, []);


  let total = 0;
 placeOrder.map((item)=>{
   total+=item.price
 })
 console.log("total",total)

 let grand=total-11;
  return (
    <Fragment>
      <div className="mainConatiner">
        <div className="gearBestImgInConfirm">
          <img src="https://uidesign.gbtcdn.com/GB/images/promotion/2019/a_evan/Gearbest/logo_gearbest.png"></img>
        </div>
        <CheckoutSteps activeStep={1} />
        <h2 style={{ marginLeft: "10%" }}>Shipping Information</h2>

        {user.map((t) => (
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
        ))}
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
          <div style={{width:"80%"}}></div>
          <div style={{width:"20%",}}>
            <div className="itemtotal" >
            <p >Item SubTotal </p>
            <p > ${total}.00</p>

            </div>

            <div  className="itemtotal">
              <p>Shipping Cost</p>
              <p>$11.00</p>
            </div>
            <hr />

            <div  className="itemtotal">
              <h3>Grand Total</h3>
              <h1 style={{color:"rgb(211,0,129)"}}>${grand}</h1>
            </div>
          </div>


        </div>
      </div>
    </Fragment>
  );
};
