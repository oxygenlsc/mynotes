import { SquareGroup } from './SquareGroup';
export interface Point {
   readonly x:number
   readonly y:number
}

export interface Iviewer {
    /**
     * 显示
     */
    show():void
    /**
     * 移除，不再显示
     */
    remove():void
}
/**
 * 形状
 */
export type Shape = Point[]

/**
 * 移动方向
 * 
 */
export enum moveDercition {
    left,
    right,
    down
}

export enum GameStatus{
    init,
    playing,
    pause,
    over
}

export  interface GameViewer {
    showNext(teris:SquareGroup):void;
    switch(teris:SquareGroup):void;
}