import { useState, useEffect} from "react";
import "../styles/CoverPic.css";

export const CoverPic = () => {
        const [image, setImage] = useState(0);
        var covers = [
            "https://uidesign.gbtcdn.com/GB/image/8823/1190X4200.jpg?imbypass=true",
            "https://uidesign.gbtcdn.com/GB/image/9746/1190X420.jpg",
            "https://uidesign.gbtcdn.com/GB/image/8823/PC+1190X420-en.jpg",
            "https://uidesign.gbtcdn.com/GB/image/9746/PC+1190.jpg?imbypass=true",
            "https://uidesign.gbtcdn.com/GB/image/8823/1190X420.jpg?imbypass=true"
        ];

        useEffect(() => {
            let interval = setInterval(() => {
                setImage(image === 4? 0: image+1)
            }, 2000)
        }, [image])

    return (
        <div>
            {
                <img className="slide" src={covers[image]} alt="" />
            }
        </div>
    )
}