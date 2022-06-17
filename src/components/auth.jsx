import { Register1 } from "./Register"
import { SignIn } from "./signIn"
import "../styles/auth.css"
import { useState } from "react"


export const SignInPage = () => {
 const [set,setSet]=useState(false)
    const valueChange=()=>{
        setSet(true)
    }
    const valueChange1=()=>{
        setSet(false)
    }
    return (
        <div id="p32">
           
                <div className="registerDiv">
                    <div className="bttn23">
                        <button id="btn121" onClick={valueChange} >SIGN IN</button>
                        <button  id="btn121" onClick={valueChange1}>REGISTER</button>
                    </div>
                      {set? <SignIn /> : <Register1 set={set} setSet={setSet}/>}
                    
                </div>

            
        </div>
    )
}