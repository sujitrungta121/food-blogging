import React from "react";
const Button= (props)=>{
   return (
    <div>
        <button  style={{height:25,width:100,borderWidth:0,borderColor:"none", backgroundColor:props.color, borderRadius:34}}>{props.title}</button>
    </div>
   )
}
export default Button;