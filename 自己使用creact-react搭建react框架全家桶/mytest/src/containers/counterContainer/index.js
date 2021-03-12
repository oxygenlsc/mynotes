import React from 'react'
import Counter from '../../components/counter'
import {connect} from 'react-redux'
import {increase,decrease} from '../../reduxs/action/counter'
export default function index() {
    let mapStateToProps = (state)=>{
        return {number:state.counter}
    }

    let mapStateToDispatch = (dispatch)=>{
        return {
            increase(){
                dispatch(increase())
            },
            decrease(){
                dispatch(decrease())
            }
        }
    } 
    const CounterByConnect = connect(mapStateToProps,mapStateToDispatch)(Counter)
    return (
        <>
           <CounterByConnect  number={1}/> 
        </>
    )
}
