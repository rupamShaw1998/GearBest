import axios from 'axios';
import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';
import "../styles/landingPage.css"
import "../styles/collection.css"
//import { CollectionCom } from './CollectionComp';


export const LandingPage = () => {
  const [allprod, setAllpro] = useState([]);
  const [coll, setColl] = useState([])
  const [superDeals, setSuperDeals] = useState([])


  useEffect(() => {
    setData()
  }, [])
  useEffect(() => {
    Collection()
  }, [])
  useEffect(() => {
    SuperDeals()
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
      //  console.log(coll);
    });
  };

  const SuperDeals = () => {
    axios.get("http://localhost:7005/superDeal").then((res) => {
      setSuperDeals(res.data);
      console.log(superDeals);
    });
  };

  return (
    <div className="mainDiv">
      <div className='collectionDiv'>
      <div className='collection'>
      <h2>COLLECTION</h2>
          <div className="collectionData">

            {coll.map((e, i) => (
              <div id="collDiv">
                <Link to="/catagorys" >
                  <img src={e.imgUrl} />
                </Link>
                <p className="titleP">{e.title}</p>
                <p>${e.price}.00</p>
              </div>
            ))}
          </div>
        </div>
        <div className='superDeal'>
          <h2>SUPER DEALS</h2>
          <div className="collectionData">

            {superDeals.map((e, i) => (
              <div id="collDiv">
                <img src={e.imgUrl} />
                <p className="titleP">{e.title}</p>
                <p>${e.price}.00</p>
              </div>
            ))}

          </div>
        </div>

      </div>
      <h2 id='Recomm'>RECOMMENDED FOR YOU</h2>
      <div className="recommendDiv">
        {allprod.map((e) => (

          <div className="categoryDiv">
            <Link to={`/product/${e._id}`}>
              <img src={e.imgUrl} />
            </Link>
            <p className="titleP">{e.title}</p>
            <span>
              <p>${e.price}.00</p>
              <p>$ {(e.price * 1.2).toFixed(2)} </p>
            </span>
          </div>
        ))
        }

      </div>
    </div>
  )
}

