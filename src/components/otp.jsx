import "../styles/Otp.css"
import {useState} from "react"
import {useNavigate} from "react-router-dom"
export const Otp = ()=>{
    const navigate = useNavigate()
    const [otp,setOtp] = useState('')
    const otpInputHandler =(e)=>{
        e.preventDefault()
        setOtp(e.target.value)
    }
    const otpHandler = (e)=>{
        e.preventDefault()
        if (otp == "1234") {
            alert("payment successful");
            navigate('/')
            
        } else if (otp === "") {
            alert("Please fill otp");
            navigate('/otp')
        } else if (otp !== "1234") {
            alert("Wrong otp");
            navigate('/otp')
        }
    }
    return (
        <>
          <div class="container">
        <p>OTP is sent on your mobile number.OTP is valid for 5mins.</p>
        <div class="otp">
            <h3>OTP**</h3>
            <div class="input-field">
                <form onSubmit={otpHandler}>
                    <input type="text" id="otp" placeholder="Otp 1234" onChange={otpInputHandler}/>
                    <input type="submit" id="pay" value="CONFIRM" />
                </form>
            </div>
        </div>
    </div>
        </>
    )
}