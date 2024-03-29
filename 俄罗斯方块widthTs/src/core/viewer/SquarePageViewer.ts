import { Iviewer } from './../types';
import { Square } from './../Square';
import PageConfig from './PageConfig'
import $ from 'jquery'
/**
 * 显示一个小方块到页面上
 */

export class SquarePageViewer implements Iviewer {
    private dom?:JQuery<HTMLElement>
    private isRemove:boolean = false
    constructor(
        private square:Square,
        private container:JQuery<HTMLElement>,//dom的类型
        ){

    }
    show(): void {
        if( this.isRemove){
            return;
        }
        if(!this.dom){
            this.dom = $('<div>').css({
                position:'absolute',
                width:PageConfig.SquareSize.width,
                height:PageConfig.SquareSize.height,
                border:'1px solid #ccc',
                boxSizing:"border-box"
            }).appendTo(this.container)
        }

        this.dom.css({
            left:this.square.point.x*PageConfig.SquareSize.width,
            top:this.square.point.y*PageConfig.SquareSize.height,
            background:this.square.color
        })
    }
    remove(): void {
        if(this.dom&& !this.isRemove){
            this.dom?.remove();
            this.isRemove = true
        }
       
    }
}