import { SquareGroup } from './SquareGroup';
import { Point } from './types';
import { getRandom } from './utils';

export class Tshap extends SquareGroup {
    constructor(
        _centerPoint:Point,
        _Color:string
    ){
        super(
        [{ x:-1,y:0}, { x:0,y:0 },{ x:1,y:0},{x:0, y:-1 }],
        _centerPoint,
        _Color
        );
    }
}




export class LShap extends SquareGroup {
    constructor(
        _centerPoint:Point,
        _Color:string
    ){
        super(
        [
            { x:-2,y:0}, { x:-1,y:0 },{ x:0,y:0},{x:0, y:-1 }
        ],
        _centerPoint,
        _Color
        );
    }
}

export class LMirrorShap extends SquareGroup {
    constructor(
        _centerPoint:Point,
        _Color:string
    ){
        super(
        [
            { x:2,y:0}, { x:1,y:0 },{ x:0,y:0},{x:0, y:-1 }
        ],
        _centerPoint,
        _Color
        );
    }
}

export class SShap extends SquareGroup {
    constructor(
        _centerPoint:Point,
        _Color:string
    ){
        super(
        [
            { x:0,y:0}, { x:1,y:0 },{ x:0,y:1},{x:-1, y:1 }
        ],
        _centerPoint,
        _Color
        );
    }
    rotate(){
        super.rotate();
        this.isClock = !this.isClock
    }
}

export class SMirrorShap extends SquareGroup {
    constructor(
        _centerPoint:Point,
        _Color:string
    ){
        super(
        [
            { x:0,y:0}, { x:-1,y:0 },{ x:0,y:1},{x:1, y:1 }
        ],
        _centerPoint,
        _Color
        );
    }
    rotate(){
        super.rotate();
        this.isClock = !this.isClock
    }
}
export class SquareShape extends SquareGroup {
    constructor(
        _centerPoint:Point,
        _Color:string
    ){
        super(
        [
            { x:0,y:0}, { x:1,y:0 },{ x:0,y:1},{x:1, y:1 }
        ],
        _centerPoint,
        _Color
        );
    }
    afterRotateShape(){
        return this.shape;
    }
}
export class LineShape extends SquareGroup {
    constructor(
        _centerPoint:Point,
        _Color:string
    ){
        super(
        [
            { x:-1,y:0}, { x:0,y:0 },{ x:1,y:0},{x:2, y:0 }
        ],
        _centerPoint,
        _Color
        );
    }
    rotate(){
        super.rotate();
        this.isClock = !this.isClock
    }
}

export const shapes = [
    Tshap,LShap,LMirrorShap,SShap,SMirrorShap,SquareShape,LineShape
]
export const colors = [
    'red',
    "#fff",
    'green',
    'blue',
    'orange'
]
/**
 * 随机产生一个俄罗斯方块（颜色随机，形状随机）
 * @param centerPoint
 */
export function createTeris(centerPoint:Point){
    let index = getRandom(0,shapes.length);
    const shape =  shapes[index];
    index = getRandom(0,colors.length);
    const color = colors[index];
    return new shape(centerPoint,color)
}