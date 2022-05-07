
import { useEffect, useState } from "react"
import axios from 'axios';
import "../styles/mobile.css"
import { Link } from "react-router-dom"
export const Cycle = () => {

    const [cycle, setCycle] = useState([]);
    useEffect(() => {
        setData()
    }, [])

    const setData = () => {
        axios.get("http://localhost:7005/outdoor").then((res) => {
            setCycle(res.data);
          //  console.log(mobile);
        });
    };
    return (
        <div className="collectionData">

            {cycle.map((e) => (
                <div className="categoryDiv">
                <Link to={`/LaptopDetail/${e._id}`}>
                <img src={e.imgUrl} />
                </Link>
                <p className="titleP">{e.title}</p>
                <span>
                <p>${e.price}</p>
                <p>$ {(e.price*1.5).toFixed(0)}.00</p>
                </span>
                </div>
            ))}

        </div>

    )
}





