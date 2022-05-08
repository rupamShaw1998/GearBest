import { useSelector } from "react-redux"
import {Navigate} from "react-router-dom"

export const Protected = ({children})=>{
    //console.log(children)
    const status = useSelector((store) =>store.isLogin.isLogin)
    //console.log(status)
    if(status===false){
       return <Navigate to={'/auth'}/>
       
    }
  return children
    
}