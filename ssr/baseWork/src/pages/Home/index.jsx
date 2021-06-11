import React from 'react'
import styles from "./index.css"
import one from '../../assets/1.jpg'
export default function index() {
    return (
        <div>
          首页
          <img src={one} alt="" />
          <div className = {styles.bg}></div>
         <button 
         className = {styles.beautybutton}
         onClick={()=>{
           alert(123)
         }}>alert</button>
        </div>
    )
}
