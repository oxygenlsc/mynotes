import{ takeEvery,delay} from 'redux-saga/effects'
import {actionTypes} from 
'../action/counter'

function* asyncIncrease(){
        yield delay(2000)
        console.log('延迟触发');
}
function* asyncDecrease(){
    yield delay(2000)
    console.log('延迟触发asyncDecrease');
}
export default function*(){
    yield takeEvery(actionTypes.asyncIncrease,asyncIncrease)
    console.log('监听到了asyncincrease');
    yield takeEvery(actionTypes.asyncDecrease,asyncDecrease)
    console.log('asyncDecrease');

}