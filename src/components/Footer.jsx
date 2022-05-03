import React from 'react'
import "./Footer.css"
import {Link} from "react-router-dom"
import {BsFacebook} from "react-icons/bs"
export const Footer = () => {


    const popular=[
        {
            id: 1,
            title: "xiaomi poco m3",
            to: "",
        },
        {
            id: 2,
            title: "ortur master 2 20w ",
            to: "",
        },
        {
            id: 3,
            title: "bed lights ",
            to: "",
        },
        {
            id: 4,
            title: "watch watches",
            to: "",
        },
        {
            id: 5,
            title: "cellphone cam",
            to: "",
        },
        {
            id: 6,
            title: "cam mobile",
            to: "",
        },
        {
            id: 7,
            title: "men's hooded",
            to: "",
        },
        {
            id: 8,
            title: "lighting lamp light",
            to: "",
        },
        {
            id: 9,
            title: "m black",
            to: "",
        },
        {
            id: 10,
            title: "de celular",
            to: "",
        },
        {
            id: 11,
            title: "instruments tools",
            to: "",
        },
        {
            id: 12,
            title: "ddr4 ram n4100",
            to: "",
        },
        {
            id: 13,
            title: "sound wear",
            to: "",
        },
        {
            id: 14,
            title: "men's clothing suits",
            to: "",
        },
       
    ]
  return (
    <>
    <footer className='footer'>
   <div className='firstdiv'>
       <h3>Popular Searches:
          {popular.map((e)=>(
              <p id='footertext' key={e.id}>{e.title}</p>
          ))}

        </h3>
   </div>
   <div className='seconddiv'>
      <div className='div1'>
          <img src="https://uidesign.gbtcdn.com/GB/images/promotion/2019/a_evan/Gearbest/logo_gearbest.png?imbypass=true" >
          </img>
          <p className="font"> AFFORDABLE QUALITY</p>
        <p className="font">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; FUN SHOPPING</p>
          
     </div> 

     <div class="divs2">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAyCAMAAADGIxO9AAABAlBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg4OAAAAAAAAAAAAAAAAAAAAAAAADg4OAAAAAAAAAAAAAAAAAAAADg4OAAAADg4OAAAAAAAAAAAAAAAAAAAADk5OQAAAAAAADo6Oj///8AAADg4OAlJSUAAADg4OAaGhrg4ODg4ODg4OAAAADg4ODg4OAAAADh4eEAAADh4eHh4eHk5OQAAAAAAAAAAADg4OA4ODgeHh7Nzc0oKCgQEBAJCQnb29vExMSamppLS0sTExO/v7+zs7OoqKigoKB9fX1wcHBaWloYGBg9pae4AAAAQXRSTlMAgECHYZ94/h7swLwEAblL9/Hfx8e0r6eOfGNZVDcsE/TPe3drUkg8KSYZCwXt6+bm39nTu6ecmo2ETEc8MxMLCQmnFe4AAAFdSURBVEjH7ZTXbsIwFIbtAiUkJOxd9i50793/hLaU7vX+r1IzokCx1WukfBeRfXQ++eiPbObhsYRZXJPRvmVqcpBjqJVwCAq6SmcD2NL3bfsFA/EZ2vaPWOzocSCrdCygzg7ocYgR0QPu6AP3VOm1gVhYoWhBBMtXRE+ic+oI+5XyLA4UFI4PSLMTom98zRx6xiclWB0w1AlEehVxzmBEon182PvgjahTFgNoqgR2zTwtc8pSgE/qGABnCYmz3W8CIVORwCY7kjiJ/mRseQKWs87v0ZjDS6eQBVLyBJrutlOrnV+72y7EELIEgmd8QsutmgU+JQbkJAm4ZJxgS0m4xJdSiGGOoOUXV6CRxALlv06RcwPQxRhpzJOZVqqcR5iE9dmfKx1HHaM6afQDASZQO4KbCx7QdStXZIL/nUU8Z8UdP5DkMlLqR1GLQkmLKSgopQxTovm5jEaJeawOv0IPd8P/1V/7AAAAAElFTkSuQmCC" alt="">

           </img>
            <p className="font">High Quality Selection</p>
            <p>Total product quality</p>  
            <p>control for peace of mind</p>
        </div>

        <div class="divs2">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAABIFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADi4uIAAAAAAAAAAAAAAAAAAAAAAADg4OAAAAAAAADh4eEAAAAAAADg4ODg4OAAAAAAAAAAAAAAAAAAAADg4OAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADi4uLf39/f399paWkAAADg4OAAAAAAAADg4OAAAAA7OzsAAADg4OCZmZng4OAUFBQAAAAAAADg4ODg4OAAAADa2toAAAAAAAAAAADk5OQAAADg4OBwcHDExMRPT0+lpaWVlZWLi4s4ODgxMTElJSUJCQkHBwfY2NjLy8u+vr6xsbFbW1s8PDwYGBgODg61tbWpqamDg4NtbW1paWlKSkpISEhFRUUimxvjAAAAQ3RSTlMAgPbwl1/8tqJxQC8fGATi0cTAZ1Q7EAr37uvf2dWrqZyGeXRqSjkxJx758O/o383Jx7Csp6SjjYyMeGpTT0Q0KRoTY8WDigAAAZ5JREFUSMft1NdOG0EUgOHj8a4LMe4loYYO6b33f1gTNwgESM/7v0V2BjsGYTPDHUj8N3u00qcj7YxWrrpUTYaVtXOB3FwKKFT9xWqSo5Z8RX4aVJA2bsKTLMN0LpZPYNaT3ISKxDUUfPAjJVi1Qxre+pECRLpcs+uyfkcCPa31rZokIOFF5uCvjisbsugB6gHwTZs2MvS7m/k4XoQK+KpttRL/U+E4sc5Q6HeKQWNONVvIShaKz3S/a8M7NwPFESSFkgQ81oM2jn3FJLw/TQBDNgciYs88bs+bbRkIXST6fcjhny9mvBGbBXjlIh3oQtPOZbul4iLbEHU50HaNyAysuchBPLVaW3a+LnVQ4iK/gM6utj2UFSg5yc4+sP3Zzs/N+5cOYvrRi439ZG8kDVUnabbbe4Bd80mSkHOSLuz0jsg9WYcpcW+BFhDF41MJ4ZGb7HYAfprxtQSw6CC2LZrf+zf6Pkz4EL0/OMjJFKmGmwybz6fhgZxB2psnu/NiduyfVqGkyugWZGRBMpB8kRFNLcsZ1ROnWlppyFUXv3/1lqnU6lgCKQAAAABJRU5ErkJggg==" alt=""/>

          
            <p className="font">Affordable Prices</p>
            <p>Factory direct prices for</p>  
            <p> maximum savings</p>
        </div>

        <div class="divs2">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAA0lBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAAAAAAAAAAAAAAAtLS0AAAAAAAAAAAAAAAAAAAAAAADf398AAAAAAADg4OAAAAAAAADg4OAAAAAAAADg4ODf39/g4OArKysAAAAdHR0AAAAAAADi4uIAAADf398AAADm5uYAAAAAAADg4OD///9OTk5wcHDX19f+/v5qamr5+fmMjIwkJCQcHBwBAQHa2tpWVlZBQUEWFhbq6urBwcG5ubmnp6eWlpZSUlI4ODgqKiofnaNsAAAALXRSTlMA6vqngF3z8JhyPhMF5bagXtnAhGlEQDco6m78887KvKiioJ2UjFY0LxgYFAh5lWYlAAABTUlEQVRIx+2U126DQBBFFwwu2CbuJb33awhg4pJe/v+XwoiNsoJJBEiRXzgPPNyrsyM0sKKkpCDXtgYWzW7yRrONX2nzTgV/UGEVDRgLljHQZgsAvMFXxZWD3VmC6dFVXPV6Pfvs/DalzBgOqfqme5lFmaoK9GFS4Ygry7KGgz3aUGZFEC0bGGRWRqPRxQ1tqJJVoertHhFaHiUyiDwKYv51Cr1LboXYoLIK3Y/1S0qRGaeEjyDeV4piQmZJRQe8WQCJ+6P0lUwqjSpQbYgu8LBG9HgNF9TfSU7UDNBJqcWfTl0e5TvO3IUknXWVKc19EJ4T4UFFzXZMoTJsAEufan8JHG9FnBqGmhmDiUhQkyc+AzU+k9R1EHqdbkx37jhPn8qvxGWiihhNTCJ5EQS0G0uWXKZOEduQ9IWEz1Q6Gmheh894WqZhmC02KynIF2/ZrSepltS8AAAAAElFTkSuQmCC" alt=""/>

            <p className="font">Express Shipping</p>
            <p>Fast, reliable delivery from</p>  
            <p>global warehouses</p>
        </div>
        <div className="divs2">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAABRFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADY2NgAAAAAAAAAAAAAAAAAAADX19cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADY2NgAAAAAAAAAAAAAAAAAAAAAAAAAAADZ2dnj4+M8PDwcHBwAAAAKCgoAAADY2NgAAAAAAAAAAAAAAAAAAAAAAAAAAADb29sTExPY2NjY2Ng8PDzY2NjY2NgAAADCwsK0tLSTk5PY2NgXFxcMDAw0NDRhYWEAAAAAAADX19fa2trb29uOjo7Z2dk5OTkAAAAAAADY2NjV1dWDg4NCQkLJycm2traIiIhkZGRISEi7u7uwsLCqqqqlpaWSkpKOjo5MTEw3NzcxMTEUFBQKCgrLy8uYmJh7e3tubm5eXl5bW1tTU1MWNtRpAAAAUHRSTlMA7/3qKAj38zIFp39jPeLNv7Khi3dzbGktIQ3m19HAqpduUUU2JBsYFgn+++Xdx8WumnxWSzgTB/n49vbr4t7MxLi2tbGwrqWRjEU4LSgoEZKctREAAAHxSURBVEjH7ZRnU+JQFIZvGiR0WBBpIriKfXct6/be63sAKfa2/f9/35M7yAjGK/mmMz4fMinz5Jz7ntyIG64VM5Fszp9xPwYszvhSPoBJ+TFqATC6n9buAUfzQMjH2nVgdxuAObKSAg6JmsDdUY0cF9khagEYH1EpA/PEdIHkaIYJYJuYFle7LdQ4ZnXlzZIONElyAOhL5fCq6XjPOxMq6ejRIsnW6Y1AsZyuDRuWgT7Hf6hH5xh9tO9DSkSOe6HZaexu0hl+7LQ7zQVZreKhpK0x8uLOnOM+zgw3FuOOo2LM0xB2EDDyYohpg511DycxJ8Y1QPOYqslO0D7nJDaE6Rq28EA+McXkgPF0g+vLd3kh6xvTg8oTkSuwceFHYLNTeEHU2KuTy94+0Tc3F9fwRibzmNrAIQ9n8who02uZpIIw8JcaAE4OuicA9uktcOuyHfyL6l30+Fend5ft5wngJ/FiHsDlN5++BOJKZRHY4ll8EtFsNvpl8iHRcyCgMixAr7/6LJj1KT7MfnyUCAI1hWIDxa+CmeIOl9dcaTYOqBJbBZKusAxJvMoX74GIQllxE12LgwlqYEpVEVannAJCJTBaOJ9PS6mYUv/OkpAY6bwMI2NAMqEePgsZq59gpQCoG3NCiFWsgTvZZ0g64oarz3+BhKcJHpw0wgAAAABJRU5ErkJggg==" alt="">
              </img>
            <p className="font">Worry-free After-sales</p>
            <p>Instant access to</p>  
            <p>professional support</p>
        </div>
       
   </div>
   <div className="main_div2">
        <div class="top_div">
            <p class="font1">Newsletter &nbsp;&nbsp;</p>
            <div>
                <input type="text" placeholder="Enter Email to get 50 Points" className="points"/>
            </div>
            <button class="sub_btn">Subscribe</button>
      </div>

      <div> 
      <BsFacebook></BsFacebook>

      </div>

   </div>
   

    </footer>
    
    </>
  )
}
