import {setS} from '../action/student'
const initialState = null

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case setS:
        return payload 
    default:
        return state
    }
}
