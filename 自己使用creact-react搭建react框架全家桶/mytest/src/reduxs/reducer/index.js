import {combineReducers} from 'redux'
import student from './student'
import counter from './counterR'
// export default (state={} , action) => {
//    const newState = {
//        loginUser:loginUser(state.loginUser,action),
//        users:users(state.users,action)
//    };
    
//    return newState
// }

export default combineReducers({
    student,
    counter
})