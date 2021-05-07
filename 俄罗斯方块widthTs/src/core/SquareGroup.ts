import { Point, Shape } from './types';
import { Square } from './Square';
export class SquareGroup {
    private _squares:readonly Square[];

    public get squares() {
        return this._squares
    }
    public get centerPoint():Point {
        return this._centerPoint
    }
    public get shape(){
        return this._shape
    }
    public set centerPoint(v:Point) {
        this._centerPoint = v ;
        //同时设置所有下方快的坐标
        this.setSquarePoints()
        
    }
    /**
     * 根据中心点坐标以及形状设置一个小方块桌标
     */
    private setSquarePoints(){
        this._shape.forEach((p,i)=>{
            this.squares[i].point = {
                x:this._centerPoint.x + p.x,
                 y:this._centerPoint.y + p.y
            }
        })
    }
    constructor(
        private _shape:Shape,
        private _centerPoint:Point,
        private _color:string){
            const arr:Square[] = [];
            this._shape.forEach(p=>{
                const sq = new Square({x:0,y:0},this._color);
                arr.push(sq)
            })
            this._squares = arr;
             this.setSquarePoints()

        }
        /**
         * 旋转方向是否为顺时针
         */
        protected isClock = true ;
        //根据当前形状计算出新的形状
        afterRotateShape():Shape{
            // x,y=>-y,x  顺时针
            if(this.isClock){
              return   this._shape.map(p=>{
                    const newP:Point =  {
                        x:-p.y,
                        y:p.x
                    }
                    return newP
                })
            }else{
                // x,y -> y,-x逆时针
                return   this._shape.map(p=>{
                    const newP:Point =  {
                        x:p.y,
                        y:-p.x
                    }
                    return newP
                })
            }
           

        }

        rotate(){
            const newShap = this.afterRotateShape();
            this._shape = newShap
            this.setSquarePoints()
        }
}