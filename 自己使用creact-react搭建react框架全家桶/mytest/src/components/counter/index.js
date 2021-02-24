import React from 'react'

export default function Counter(props) {
    return (
        <div>
            {props.number}
            <button onClick={props.increase}>+</button>
            <button onClick={props.decrease}>-</button>
        </div>
    )
}
