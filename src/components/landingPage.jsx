import axios from 'axios';
import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'; 
import "../styles/landingPage.css"
import "../styles/collection.css"
import { CollectionCom } from './CollectionComp';


export const LandingPage = () => {
  const [allprod, setAllpro] = useState([]);
  const [coll, setColl] = useState([])
  useEffect(() => {
    setData()
  }, [])
  useEffect(() => {
    Collection()
  }, [])
  const setData = () => {
    axios.get("http://localhost:7005/all").then((res) => {
      setAllpro(res.data);
      //  console.log(allprod);
    });
  };
  const Collection = () => {
    axios.get("http://localhost:7005/collection").then((res) => {
      setColl(res.data);
      console.log(coll);
    });
  };

  return (
    <div className="mainDiv">
      <div className='collectionDiv'>
        <div className='collection'>
          <h2>Collection</h2>
          <div className="collectionData">

            {coll.map((e, i) => (
              <CollectionCom key={i} image={e.imgUrl} title={e.title} price={e.price} />
            ))}
          </div>
        </div>
        <div className='superDeal'>Super Deals</div>
        <div className='New'>New</div>
      </div>
      <h2 id='Recomm'>RECOMMENDED FOR YOU</h2>
      <div className="recommendDiv">
       {allprod.map((e)=>( 

         <div className="categoryDiv">
         <Link>
         <img src={e.imgUrl}/>
         </Link>
         
         <p className="titleP">{e.title}</p>
         <span>
         <p>${e.price}.00</p>
         <p>$ {(e.price*1.2).toFixed(2)} </p>
         </span>
         </div>
         ))
        }
     
      </div>
    </div>
  )
}

