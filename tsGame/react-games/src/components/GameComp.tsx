import React, { Component } from 'react'
import { ChessType, GamesStatus } from '../Types/enums'
import { BoardComp } from './BoardComp'
import GameStatusComp from './GameStatusComp';
import * as rrweb from 'rrweb'
import "./player.css"

let events:[] = [];

interface Istate {
    cheeses:ChessType[]
    gameStatus:GamesStatus
    nextChess:ChessType.red|ChessType.black
}
export default class GameComp extends Component<{},Istate> {
    state:Istate = {
        cheeses:[],
        gameStatus:GamesStatus.gaming,
        nextChess:ChessType.black,
    }
    /**
     * 初始化
     */
    init(){
        const arr:ChessType[] = [];
        for (let i = 0; i < 9; i++) {
          arr.push(ChessType.none)
        }
        this.setState({
            cheeses:arr,
            gameStatus:GamesStatus.gaming,
            nextChess:ChessType.black
        })
    }
    /**
     * 处理棋子的点击事件
     * 如果该函数没有运行就是有棋子
     * @param i 
     */
    handleChessClick(i:number){
        const cheeses:ChessType[] = [...this.state.cheeses];
        cheeses[i] = this.state.nextChess;
        if(this.state.nextChess == ChessType.red){

        }
        this.setState(preState=>({
            cheeses,
            nextChess:preState.nextChess === ChessType.red?ChessType.black:ChessType.red,
            gameStatus:this.getStatus(cheeses,i)
        }))
    }
    /**
     * 得到当前的游戏状态
     */
    getStatus(chesses:ChessType[],index:number):GamesStatus{
        //1.判断是否有一方获得胜利
        const horMin = Math.floor(index /3) *3;
        const virMin = index%3;
        if((chesses[horMin] === chesses[horMin+1]&& chesses[horMin] === chesses[horMin+2])
        ||
        (chesses[virMin] === chesses[virMin+3]&&chesses[virMin] === chesses[virMin+6])
        ||
        (chesses[0]===chesses[4]&&chesses[0]===chesses[8]&&chesses[0]!==ChessType.none)
        ||
        (chesses[2]===chesses[4]&&chesses[2]===chesses[6]&&chesses[2]!==ChessType.none)
        ){
            if(chesses[index]== ChessType.red){
                return GamesStatus.redWin
            }else{
                return GamesStatus.blackWin
            }
        }

        //2.判断是否平局
        if(!chesses.includes(ChessType.none)){
            return GamesStatus.equal;
        }
        //3.游戏正在进行
        return GamesStatus.gaming;
        
    }

    record=()=>{
        events = [];
        rrweb.record({
            emit(event:never){
             events.push(event)
            }
        })
    }
    player = ()=>{
        const replayer = new rrweb.Replayer(events)
        replayer.play();
    }
    componentDidMount(){
        this.init();
    }
    render() {
        return (
            <div className = 'game'>
                <GameStatusComp status = {this.state.gameStatus} next = {this.state.nextChess}/>
                <BoardComp 
                chesses = {this.state.cheeses} 
                isGameOver = {this.state.gameStatus !== GamesStatus.gaming}
                onClick = {this.handleChessClick.bind(this)}
                />
                {
               
                this.state.gameStatus !== GamesStatus.gaming ? <button style = {{
                    margin:'0 auto',
                    display:'block',
                    width:100,
                    height:30

                }} onClick = {this.init.bind(this)}>从新开始</button>:null
                }

                {/* <button onClick={this.record} >录制</button>
                <button onClick={this.player}>回放</button> */}
            </div>
        )
    }
}
