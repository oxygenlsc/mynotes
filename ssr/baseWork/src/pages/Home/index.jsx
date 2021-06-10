import React from 'react'
import styles from "./index.css"
console.log(styles)
export default function index() {
    return (
        <div>
          首页
         <button 
         className = {styles.beautybutton}
         onClick={()=>{
           alert(123)
         }}>alert</button>
        </div>
    )
}
