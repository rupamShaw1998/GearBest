import { useEffect, useState } from "react"
import axios from 'axios';
import "../styles/mobile.css"


export const Science = () => {

    const [science, setScience] = useState([]);
    useEffect(() => {
        setData()
    }, [])

    const setData = () => {
        axios.get("http://localhost:7005/science").then((res) => {
            setScience(res.data);
            console.log(science);
        });
    };
    return (
        <div className="collectionData">

            {science.map((e) => (
                <div className="categoryDiv">
                <img src={e.imgUrl} />
                <p className="titleP">{e.title}</p>
                <span>
                <p>${e.price}</p>
                <p>$ {(e.price*1.3).toFixed(2)}</p>
                </span>
                </div>
            ))}

        </div>

    )
}





