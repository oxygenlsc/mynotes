import { TerisRule } from './TerisRule';
import { SquareGroup } from './SquareGroup';
import { GameStatus, GameViewer, moveDercition } from "./types";
import { createTeris } from './Teris';
import GameConfig from './GameConfig';
import { Square } from './Square';

export class Game {
    //游戏状态
   private _gameStatus:GameStatus = GameStatus.init;
    //当前玩家操作的方块
   private _curTeries?:SquareGroup;
    //下一个方块
   private _nextTeris:SquareGroup ;
    //一个计时器
   private _timer?:number
    //自动下落的间隔时间
    private _duration:number =  1000;
    //当前游戏中已存在的方块

    private  _exists:Square[] = [];
    constructor(private  _viewer:GameViewer){
     this._nextTeris = createTeris({x:0,y:0});//没有实际含义就是防止报错
     this.createNext()
    }
    private createNext(){
        this._nextTeris = createTeris({x:0,y:0});
        this.resetCenterPoint(GameConfig.nextSize.width,this._nextTeris);
        this._viewer.showNext(this._nextTeris);
    }
    private init(){
        this._exists.forEach(sq=>{
            if(sq.viewer){
                sq.viewer.remove();
            }
        })
        this._exists = [];
        this.createNext();
        this._curTeries = undefined;
    }
    /**
     * 游戏开始
     */
    start(){
        //游戏状态的改变
        if(this._gameStatus === GameStatus.playing){
            return;
        }
        //从游戏结束到开始

        if(this._gameStatus === GameStatus.over){
            this.init();
        }
        this._gameStatus = GameStatus.playing;

        if(!this._curTeries){
            //给当前玩家操作的方块赋值
            this.switchTeris();
        }
        this.autoDrop();
    }
    /**
     * 游戏暂停
     */

    pause(){
        if(this._gameStatus === GameStatus.playing){
            this._gameStatus = GameStatus.pause;
            clearInterval(this._timer);
            this._timer = undefined;
        }
    }
    controlLeft(){
        if(this._curTeries && this._gameStatus === GameStatus.playing){
            TerisRule.move(this._curTeries,moveDercition.left,this._exists)
        }
    }
    controlRight(){
        if(this._curTeries && this._gameStatus === GameStatus.playing){
            TerisRule.move(this._curTeries,moveDercition.right,this._exists)
        }
    }
    controlDown(){
        if(this._curTeries && this._gameStatus === GameStatus.playing){
            TerisRule.moveDirectly(this._curTeries,moveDercition.down,this._exists)
            this.hitBottoom();
        }
    }
    controlRotate() {
        if(this._curTeries && this._gameStatus === GameStatus.playing){
            TerisRule.rotate(this._curTeries,this._exists)
        }
    }
    //切换方块
    private switchTeris(){
        this._curTeries = this._nextTeris;
        this.resetCenterPoint(GameConfig.panelSize.width,this._curTeries);
        this._nextTeris.squares.forEach(sq=>{
            if(sq.viewer){
                sq.viewer.remove();
            }
        })
        //可能出现问题，当前方块一出现时就已经和之前的方块重叠了
       if(!TerisRule.canIMove(this._curTeries.shape,this._curTeries.centerPoint,this._exists)){
           //游戏结束
           this._gameStatus = GameStatus.over;
           clearInterval(this._timer);
           this._timer = undefined;
           return;
       } 

        this._nextTeris =  createTeris({x:0,y:0})
        this.resetCenterPoint(GameConfig.nextSize.width,this._nextTeris);
        this._viewer.switch(this._curTeries);
        this._viewer.showNext(this._nextTeris);
    }
    //当前方块自由下落
    private autoDrop(){
        if(this._timer || this._gameStatus !== GameStatus.playing){
            return;
        }
        this._timer = setInterval(()=>{
            if(this._curTeries){
               if(!TerisRule.move(this._curTeries,moveDercition.down,this._exists)){
                   this.hitBottoom();
               } 
            }
        },this._duration)
    }
    /**
     * 设置中心点坐标，已到达让该方块出现在区域的中上方
     * @param width 
     * @param teris 
     */
    private resetCenterPoint(width:number,teris:SquareGroup){
        const x = Math.ceil(width/2) ;
        const y = 0;
        teris.centerPoint = {x,y};
        while(teris.squares.some(it=>it.point.y<0)){
            teris.centerPoint = {
                x:teris.centerPoint.x,
                y:teris.centerPoint.y+1
            }
        }
    }

    /**
     * 触底之后的操作
     */

    hitBottoom(){
        //将当前的尔罗斯方块包含的小方块加入到已存在的放块数组中
        this._exists = this._exists.concat(this._curTeries!.squares)
        //处理移除
        const num = TerisRule.deleteSquares( this._exists);
        this.switchTeris();
    }
}