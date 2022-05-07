import { Cycle } from "./cycle"
import { Kitchen } from "./kitchen"
import { Laptop } from "./laptop"
import { Science } from "./science"
import { Link } from "react-router-dom"
import "../styles/landingPage.css"
import "../styles/collection.css"
import "../styles/Catagory.css"
import { Mobile } from "./mobile"
import { useEffect, useState } from "react";

export const Category = () => {

    let [value, setValue] = useState(0)

    // useEffect(()=>{
    //     setValue(0)
    // },[])

    const hand1 = () => {
        setValue(1)
    }
    const hand2 = () => {
        setValue(2)
    }
    const hand3 = () => {
        setValue(3)
    }
    const hand4 = () => {
        setValue(4)
    }
    const handChange=(e)=>{
        setValue(e.target.value)
        console.log(e.target.value)
    }
    return (
        <div>
            <div></div>
            <div id="s2">E-bike store</div>
            <div id="selectCat">
                <Link id="Home" to="/">
                    <div id="Home">
                        Home
                    </div>
                </Link>
                <div >
                    <select onChange={handChange} id="Catopt">
                        <option  >Category</option>
                        <option value={1} >Outdoor & cycle</option>
                        <option value={2} >Kitchen </option>
                        <option value={3} >Science and Printing </option>
                        <option value={4}>Mobiles</option>
                        <option value={5}>Laptop</option>
                    </select>
                </div>
            </div>
            <div id="s3">ALL PRODUCTS</div>
            <div id="Btn2">
                <button>Sort By:</button>
                <button onClick={hand1}>Newest </button>
                <button onClick={hand2} >Hottest</button>
                <button onClick={hand4}>Rating</button>
                <button onClick={hand3}>Trending</button>
                <select>
                    <option>Price</option>
                    <option>High To Low</option>
                    <option>Low To High</option>
                </select>
            </div>
            {
                value == 1|| value == 0 ? <Cycle /> : ""
            }
           
            {
                value == 2 ? <Kitchen /> : ""
            }
            {
                value == 5 ? <Laptop /> : ""
            }
            {
                value == 3 ? <Science /> : ""
            }
            {
                value == 4 ? <Mobile /> : ""
            }
        </div>
    )
}