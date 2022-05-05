import { useEffect, useState } from "react"
import axios from 'axios';
import "../styles/mobile.css"


export const Kitchen = () => {

    const [kitchen, setKitchen] = useState([]);
    useEffect(() => {
        setData()
    }, [])

    const setData = () => {
        axios.get("http://localhost:7005/kitchen").then((res) => {
            setKitchen(res.data);
            console.log(kitchen);
        });
    };
    return (
        <div className="collectionData">

            {kitchen.map((e) => (
                <div className="categoryDiv">
                <img src={e.imgUrl} />
                <p className="titleP">{e.title}</p>
                <span>
                <p>${e.price}</p>
                <p>$ {(e.price*1.3).toFixed(0)}.00</p>
                </span>
                </div>
            ))}

        </div>

    )
}





