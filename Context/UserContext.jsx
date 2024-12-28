import { createContext, useEffect, useState } from "react"

export let userContext=createContext()

export default function UserContextProvider(props){

    let [checkLogin,setCheckLogin] = useState(false)
    let [userName,setUserName] = useState(false)
    let [userEmail,setUserEmail] = useState(false)

    // useEffect(()=>{

    // },[])
    useEffect(()=>{
        if(localStorage.getItem("token") !== null){
            setCheckLogin(localStorage.getItem("token"))
        }

        if(localStorage.getItem("userName") !== null){
            setUserName(localStorage.getItem("userName"))
        }
        if(localStorage.getItem("userEmail") !== null){
            setUserEmail(localStorage.getItem("userEmail"))
        }
    },[])

    return <userContext.Provider value={{checkLogin,setCheckLogin,userEmail,setUserEmail,setUserName,userName}}>
        {props.children}
    </userContext.Provider>
}