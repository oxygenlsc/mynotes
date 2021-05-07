import React from 'react'
import { ChessType } from '../Types/enums'
import ChessComp from './ChessComp'
import './BoardComp.css'
interface Iprops {
    chesses: ChessType[]
    onClick?:(index:number)=>void
    isGameOver?:boolean
}
export const BoardComp:React.FC<Iprops> =  function (props) {
    const list = props.chesses.map((type,i)=>{
        return <ChessComp 
        type = {type} 
        key = {i}
        onClick = {()=>{
            if(props.onClick&&(!props.isGameOver)){
                props.onClick(i)
            }
        }}
        />
    })
    return (
        <div className='board'>
            {
               list 
            }
        </div>
    )
}

BoardComp.defaultProps = {
    isGameOver:false
}