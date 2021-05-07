import { SquareGroup } from './SquareGroup';
import GameConfig from './GameConfig';
import { Shape, Point, moveDercition } from './types';
import { Square } from './Square';

function isPoint(obj: any): obj is Point {
    if (typeof obj.x === "undefined") {
        return false;
    } else {
        return true;
    }
}
/**
 * 该类中提供一些列的函数，根据游戏规则判断各种情况
 */
export class TerisRule {
    /**
     * 判断某个形状的方块，是否能够移动到目标位置
     * @param params 
     * @returns 
     */
    static canIMove(shape: Shape, targetPoint: Point,exists:Square[]): boolean {
        //假设，中心点已近移动到了目标位置，算出每个小方块的坐标
        const targetSquarePoints: Point[] = shape.map(it => {
            return {
                x: it.x + targetPoint.x,
                y: it.y + targetPoint.y
            }
        })
        //边界判断
        let res = targetSquarePoints.some(p => {
            //是否超出了边界
            if (
                p.x < 0 || p.x > GameConfig.panelSize.width - 1 ||
                p.y < 0 || p.y > GameConfig.panelSize.height - 1
            ) {
                return true;
            }
            return false;
        })
        
        if (res) {
            return false;
        }
        //判断是否与已有的方块有重叠
        res =  targetSquarePoints.some(p =>{
           return exists.some(sq=>sq.point.x === p.x &&  sq.point.y === p.y)
        })
        if (res) {
            return false;
        }
        return true
    }
    static move(teries: SquareGroup, targetPoint: Point,exists:Square[]): boolean;
    static move(teries: SquareGroup, direction: moveDercition,exists:Square[]): boolean;
    static move(teries: SquareGroup, targetPointOrDirection: Point | moveDercition,exists:Square[]) {
        if (isPoint(targetPointOrDirection)) {
            if (this.canIMove(teries.shape, targetPointOrDirection,exists)) {
                teries.centerPoint = targetPointOrDirection
                return true
            }
            return false
        } else {
            const direction = targetPointOrDirection;
            let targetPoint: Point;
            if (direction === moveDercition.down) {
                targetPoint = {
                    x: teries.centerPoint.x,
                    y: teries.centerPoint.y + 1
                }
            } else if (direction === moveDercition.left) {
                targetPoint = {
                    x: teries.centerPoint.x - 1,
                    y: teries.centerPoint.y
                }

            } else {
                targetPoint = {
                    x: teries.centerPoint.x + 1,
                    y: teries.centerPoint.y
                }

            }
            return this.move(teries, targetPoint,exists)
        }

    }

    /**
     * 将当前方块移动到目标方向的终点
     * 
     */
    static moveDirectly(teris:SquareGroup,direction:moveDercition,exists:Square[]){
        while(this.move(teris,direction,exists)){
        }
    }

    static rotate(teris:SquareGroup,exists:Square[]):boolean{
        const newShap =  teris.afterRotateShape();
        if(this.canIMove(newShap,teris.centerPoint,exists)){
            teris.rotate();
            return true;
        }else{
            return false;
        }
    }
    /**
     * 根据y坐标，得到所有y坐标为此值的方块
     * @param exists 
     * @param y 
     */
   private static getLineSquares(exists:Square[],y:number){
        return exists.filter(sq=>sq.point.y === y);
    }
    /**
     * 从已存在的方块中消除，并返回消除了几行
     * @param exists 
     */
    static deleteSquares(exists:Square[]):number {
        //获得y坐标数组
        const ys = exists.map(sq=>sq.point.y);
        const maxY = Math.max(...ys);
        const minY = Math.min(...ys);
        //循环判断每一行是否可以消除
        let num = 0;
        for (let y = minY; y < maxY; y++) {
           if(this.deleteLine(exists,y)){
            num ++ ;
           } 
        }
        return num;
    }

    private static deleteLine(exists:Square[],y:number):boolean{
        const squares =  this.getLineSquares(exists,y);
        if(squares.length === GameConfig.panelSize.width){
            //这一行可以消除
            squares.forEach(sq=>{
                //1.从界面中移除
                if(sq.viewer){
                    sq.viewer.remove();
                }
                //2.剩下的，y坐标比当前小的y坐标加1
                exists.filter(sq=>sq.point.y<y).forEach(sq=>{
                    sq.point = {
                        x:sq.point.x,
                        y:sq.point.y+1
                    }
                })
                const index = exists.indexOf(sq);
                exists.splice(index,1);
            })

            return true
        }
        return false
    }
}
