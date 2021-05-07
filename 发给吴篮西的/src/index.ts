import { GamePageViewer } from './core/viewer/PageGameViewer';
import { Game } from './core/Game';
import $  from 'jquery'
var g = new Game(new GamePageViewer());

$('#start').on('click',()=>{
    g.start();
})
$('#stop').on('click',()=>{
    g.pause();
})
$('#left').on('click',()=>{
    g.controlLeft();
})
$('#right').on('click',()=>{
    g.controlRight()
})
$('#down').on('click',()=>{
    g.controlDown()
})
$('#rotate').on('click',()=>{
    g.controlRotate()
})
