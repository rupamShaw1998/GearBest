import { useEffect, useState } from "react"
import axios from 'axios';
import "../styles/mobile.css"
import { Link } from "react-router-dom"

export const Science = () => {

    const [science, setScience] = useState([]);
    useEffect(() => {
        setData()
    }, [])

    const setData = () => {
        axios.get("https://morning-scrubland-78864.herokuapp.com/science").then((res) => {
            setScience(res.data);
            console.log(science);
        });
    };
    return (
        <div className="collectionData">

            {science.map((e) => (
                <div className="categoryDiv">
                <Link to={`/ScienceDetail/${e._id}`}>
                <img src={e.imgUrl} />
                </Link>
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





