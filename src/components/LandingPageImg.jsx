import "../styles/landingPage.css"

export const  Category=({image,title,price})=>{
    return(
<div className="categoryDiv">
<img src={image}/>
<p className="titleP">{title}</p>
<span>
<p>$ {price}.00</p>
<p>$ {price*1.2} </p>
</span>
</div>
    )
}

