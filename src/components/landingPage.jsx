import axios from 'axios';
import { useEffect, useState } from 'react'

import { Category } from './LandingPageImg';
import "../styles/landingPage.css"

export const LandingPage = () => {
    const [allprod, setAllpro] = useState([]);

    useEffect(()=>{
       setData()
     },[])
     const setData = () => {
        axios.get("http://localhost:7005/all").then((res) => {
          setAllpro(res.data);
          console.log(allprod);
        });
      };
    return (
        <div className="mainDiv">
            <div className="recommendDiv">
               {allprod.map((e,i)=>(
                  <Category key={i} image={e.imgUrl} title={e.title}  price={e.price}/>
               ))}
            </div>
        </div>
    )
}

