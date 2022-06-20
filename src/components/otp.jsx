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
            <div class="otpcontainer">
                <p>✔️ OTP is sent on your email.</p>
                <div style={{fontSize: "12px", color: "grey"}}>OTP will be valid for 5 minutes</div>
                <div class="otp">
                    {/* <h3>OTP**</h3> */}
                    <div class="input-field">
                        <form onSubmit={otpHandler}>
                            <input type="text" id="otp" placeholder="Enter OTP" onChange={otpInputHandler}/>
                            <input type="submit" id="pay" value="Verify" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}