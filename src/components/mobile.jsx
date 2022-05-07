import { useEffect, useState } from "react"
import axios from 'axios';
import "../styles/mobile.css"
import { Link } from "react-router-dom"

export const Mobile = () => {

    const [mobile, setMobile] = useState([]);
    useEffect(() => {
        setData()
    }, [])

    const setData = () => {
        axios.get("http://localhost:7005/mobile").then((res) => {
            setMobile(res.data);
            console.log(mobile);
        });
    };
    return (
        <div className="collectionData">

            {mobile.map((e) => (
                <div className="categoryDiv">
                <Link to={`/MobileDetail/${e._id}`}>
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





