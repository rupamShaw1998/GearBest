import { useState, useEffect,useRef} from "react";
import "../styles/CoverPic.css";

var covers = [
    "https://uidesign.gbtcdn.com/GB/image/8823/1190X4200.jpg?imbypass=true",
    "https://uidesign.gbtcdn.com/GB/image/9746/1190X420.jpg",
    "https://uidesign.gbtcdn.com/GB/image/8823/PC+1190X420-en.jpg",
    "https://uidesign.gbtcdn.com/GB/image/9746/PC+1190.jpg?imbypass=true",
    "https://uidesign.gbtcdn.com/GB/image/8823/1190X420.jpg?imbypass=true"
];

export const CoverPic = () => {
        const [image, setImage] = useState(0);
        const timeoutRef = useRef(null);
       

        function resetTimeout() {
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current);
            }
          }
        useEffect(() => {
            resetTimeout();
            timeoutRef.current  = setTimeout(() => {
                setImage((prevIndex)=>prevIndex ===covers.length-1? 0: prevIndex+1)
            }, 2500)
            return ()=>{
                resetTimeout()
            }
        }, [image])

    return (
        <div>
            {
                <img className="slide" src={covers[image]} alt="" />
            }
        </div>
    )
}