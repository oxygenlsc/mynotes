import React from 'react'
import { ChessType, GamesStatus } from '../Types/enums'

interface Iprops{
    status:GamesStatus
    next:ChessType.red|ChessType.black
}
export default function GameStatusComp(props:Iprops) {
    let content:JSX.Element;
    if(props.status === GamesStatus.gaming){
        if(props.next === ChessType.red){
            content = <div className="next red" >红方落子</div>
        }else{
            content = <div className="next black" >黑方落子</div>
        }
    }else{
        if(props.status === GamesStatus.redWin){
            content = <div className="win red" >红方胜利</div>
        }else if(props.status === GamesStatus.blackWin){
            content = <div className="win black" >黑方胜利</div>

        }else{
            content = <div className="win equal" >平局</div>
        }
    }
    return (
        <div className = 'status'>
            {content}
        </div>
    )
}
