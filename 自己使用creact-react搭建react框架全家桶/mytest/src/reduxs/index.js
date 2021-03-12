import {createStore,applyMiddleware} from 'redux'

import reducer from './reducer'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import sagaTask from './saga'
const sagaMid = createSagaMiddleware();
/*
    saga任务只能有一个
*/

const store = createStore(reducer,applyMiddleware(sagaMid,logger))
sagaMid.run(sagaTask)

export default store