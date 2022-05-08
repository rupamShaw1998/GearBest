
import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";


export const SignIn=()=>{
//const navigate=useNavigate()
    const [login, setlogin] = useState({
        email: "",
      //  password: "",
      });

    const loginData = (e) => {
        const { id, value } = e.target;
        setlogin({
          ...login,
          [id]: value,
        });
    
      };
      const checklogin = (e) => {
        e.preventDefault();
        axios.post("http://localhost:7005/login", login).then((res) => {
          console.log(res);
          if(res.status===200){
              alert("login sucesfully")

              return <Navigate to="" replace={false}/>
            }
            else if(res.status===500){


                alert("Email or password is wrong")
                return
            }
        }).catch((error)=>{
            console.log(error)
           alert(error.message)
        }) 
      };
    return(
        <div>
        <form className="loginform"  onSubmit={(e) => {   checklogin(e); }}>
        <input id="email" name="username" onChange={(event) => { loginData(event); }} required type="text" placeholder="    Email" className="login_username"
        /><br/>
        <input name="password"/* onChange={(event) => {   loginData(event); }} required */ type="password" placeholder="   Password" className="login_password"
        /><br/>
        <span id="span3">
        <input className="checkbox" type="checkbox"/>
        <p>Keep me signed in</p>
        <p id="ptag">Forgot your password?</p>
      
        </span>
        <br/>
      
        <input type="submit" value="Sign In" className="login_submit" />
      </form>
      <div id="goog2">
      <p>or Connect via</p>
      <img src="https://blog.hubspot.com/hubfs/image8-2.jpg"/>
      </div>
        
        </div>
    )
}