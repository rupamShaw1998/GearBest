import { useEffect, useState } from "react"
import axios from 'axios';
import "../styles/mobile.css"
import { Link } from "react-router-dom";

export const Kitchen = () => {

    const [kitchen, setKitchen] = useState([]);
    useEffect(() => {
        setData()
    }, [])

    const setData = () => {
        axios.get("https://morning-scrubland-78864.herokuapp.com/kitchen").then((res) => {
            setKitchen(res.data);
            console.log(kitchen);
        });
    };
    return (
        <div className="collectionData">

            {kitchen.map((e) => (
                <div className="categoryDiv">
                <Link to={`/KitchenDetail/${e._id}`}>
                <img src={e.imgUrl} />
                </Link>
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





