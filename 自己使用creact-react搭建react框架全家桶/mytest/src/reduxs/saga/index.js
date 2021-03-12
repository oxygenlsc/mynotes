/**
 * 导出saga任务
 */
import {all, take} from 'redux-saga/effects'
import counterTask from './counterTask'
 export default function* sagaTask(){
    yield all([counterTask()]);
    console.log('saga完成');
 }