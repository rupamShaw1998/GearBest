import React, { Fragment } from 'react'
import { CheckoutSteps } from './CheckoutSteps';
import { useSelector,useDispatch} from 'react-redux'
import { useEffect,useState } from 'react';
import "../styles/Confirm.css"
import axios from 'axios';
import { useParams } from 'react-router-dom';
export const Confirm = () => {

// const shippingInfo =useSelector((store)=>store.shippingInfo);

  const [user,setUser]=useState([])
  const [placeOrder,setplaceOrder] =useState([])
  useEffect(()=>{
    axios.get(`http://localhost:7005/addAddress`).then(({data})=>{
      console.log("dbdata",data)
      setUser(data);
    });
  },[]);
  
  useEffect(()=>{
    axios.get(`http://localhost:7005/placeorder`).then(({data})=>{
       console.log("placeorderdata",data)
        setplaceOrder(data);
    });
    },[]);
 

  return <Fragment>
<div  style={{width:"100%",backgroundColor:"rgb(247,247,247)"}}>

<div style={{width:"100%",height:"100px",backgroundColor:"white",marginBottom:"10px"}}><img style={{height:"60px",width:"190px",marginLeft:"25%",marginTop:"0.5%"}}src ="https://uidesign.gbtcdn.com/GB/images/promotion/2019/a_evan/Gearbest/logo_gearbest.png"></img></div>
<CheckoutSteps activeStep={1}/>
<h2 style={{marginLeft:"10%"}}>Shipping Information</h2>


{user.map((t)=>(
 

<div className='container'>
  
   <h3 style={{display:"flex"}}>{t.First_Name} {t.Last_Name} <div style={{width:"80px",height:"30px",backgroundColor:"yellow",textAlign:"center",marginLeft:"2%"}}>Default</div></h3>
   <p>{t.PhoneNo} / {t.Email}</p>

  <p>{t.Address}</p>

  <p>Country:{t.Country}, *Pin: {t.PinCode}, *State :{t.State}</p>
 
 </div>
))}
<div >
{placeOrder.map((e)=>(
       <div style={{display:"flex",justifyContent:"space-around",margin:"2%",border:"1px solid gray",height:"150px",alignItems:"center",padding:"1%"}}>
           <div><img src={e.imgUrl} alt="" /></div>
      <div style={{display:"flex"}}>
        <p>{e.title}</p>
      </div>
      <div><p>{e.price}</p></div>
      
       
        </div>
        ))}

</div>

</div>
</Fragment>


  
}
