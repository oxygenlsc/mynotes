import React from 'react';
import {BoardComp} from './components/BoardComp';
import GameComp from './components/GameComp';
import { ChessType } from './Types/enums';
const types:ChessType[] = [
  ChessType.none,ChessType.red,ChessType.black,ChessType.none,ChessType.none,ChessType.none,ChessType.none,ChessType.none,ChessType.none
]
function App() {
  return (
    <div className="App">
        {/* <BoardComp isGameOver = {false} chesses = {types} onClick = {(i)=>{
          console.log(i);
          
        }}/> */}
        <GameComp/>
    </div>
  );
}

export default App;
