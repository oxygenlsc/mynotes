import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './reduxs'
import {increase,decrease,asyncIncrease,asyncDecrease} from './reduxs/action/counter'
import {Provider} from 'react-redux';
// console.log(store.getState(),'store');
// window.increase = ()=>{
//   store.dispatch(increase())
// }
// window.decrease = ()=>{
//   store.dispatch(decrease())
// }
// window.asyncIncrease = ()=>{
//   store.dispatch(asyncIncrease())
// }
// window.asyncDecrease = ()=>{
//   store.dispatch(asyncDecrease())
// }
ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

