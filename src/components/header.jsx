import React, { useState } from "react"
import "./header.css"
function Header() {
   const [color,setColor]=useState();
   function changed(e){
    setColor(e.target.value)
   }
 
  return(
    <div className="container">
      <h1>Display Color</h1>
      <div className="firstdiv">
       
        <input type="text" name="Text Here"  placeholder=" Type color here" value={color} onChange={changed}/>
      </div> 
      <div className="box" style={{backgroundColor:color}}>
 
      </div>
    </div>  
  ) 
} 
export default Header 