 export const SAVE_SHIPPING_INFO="SAVE_SHIPPING_INFO"


 export const saveShippingInfo=(data)=>{
    console.log("data",data)
    return{
     
        type:SAVE_SHIPPING_INFO,
        payload:data
    }
}