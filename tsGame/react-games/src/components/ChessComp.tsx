import React from 'react'
import { ChessType } from '../Types/enums'
import './ChessComp.css'
interface Iprops {
   type: ChessType
   onClick?:()=>void
}
export default function ChessComp(props:Iprops) {
    let chess = null;
    if(props.type === ChessType.red){
        chess = <div className="red chess-item"></div>
    }else if(props.type === ChessType.black){
        chess = <div className="black chess-item"></div>
    }
    return (
        <div className='chess' onClick={
            ()=>{
                if(props.type === ChessType.none&&props.onClick){
                    props.onClick();
                }
            }
        }>
            {chess}
        </div>
    )
}
