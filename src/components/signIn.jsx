import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { isAuth } from "../Redux/isAuth/action";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const navigate=useNavigate()
  const dispatch = useDispatch();
  const [login, setlogin] = useState({
    email: "",
    //  password: "",
  });

  const checkEmail = (str) => {
    let f1=false, f2=false;
    for(let i=0; i<str.length; i++) {  
      if(str[i]=='@')
        f1=true;
      if(str[i]=='.')
        f2=true;
      if(f1 && f2)
        return true;
    }
    return false;
  }

  const loginData = (e) => {
    const { id, value } = e.target;
    setlogin({
      ...login,
      [id]: value,
    });
  };
  const checklogin = (e) => {
    e.preventDefault();
    if(!checkEmail(login.email)) {
      alert("please enter proper email");
      return;
    }
    dispatch(isAuth(true));
    

    axios
    
      .post("https://morning-scrubland-78864.herokuapp.com/login", login)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          alert("login sucesfully");
          
        } else if (res.status === 500) {
          alert("Email or password is wrong");
          return;
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Sign in Successful");
      });
      navigate("/");
  };
  return (
    <div>
      <form
        className="loginform"
        onSubmit={(e) => {
          checklogin(e);
        }}
      >
        <input
          id="email"
          name="username"
          onChange={(event) => {
            loginData(event);
          }}
          required
          type="text"
          placeholder="    Email"
          className="login_username"
        />
        <br />
        <input
          name="password"
          /* onChange={(event) => {   loginData(event); }} required */ type="password"
          placeholder="   Password"
          className="login_password"
        />
        <br />
        <span id="span3">
          <input className="checkbox" type="checkbox" />
          <p>Keep me signed in</p>
          <p id="ptag">Forgot your password?</p>
        </span>
        <br />

        <input type="submit" value="Sign In" className="login_submit" />
      </form>
      <div id="goog2">
        <p>or Connect via</p>
        <img src="https://blog.hubspot.com/hubfs/image8-2.jpg" />
      </div>
    </div>
  );
};
