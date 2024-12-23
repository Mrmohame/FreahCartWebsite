import axios from "axios";
import { createContext, useState } from "react";

export let counterContext=createContext()
let Headers={
    token:localStorage.getItem("token")
}


export default function CounterContextProvider(props){
    
    
    let [counter, setCounter] = useState(0)
    function change(){
        setCounter(Math.floor(Math.random() * 100))
    }
//     function addtocart(productId){
//         console.log(Headers);
//         return axios.post("https://ecommerce.routemisr.com/api/v1/cart", {Headers:Headers} , {productId:productId})
//         .then(response => response)
// .catch(error => error)
//     }

 return(   
    <>
    <counterContext.Provider value={{counter,change}}>
{props.children}
    </counterContext.Provider>
    </>
)
}