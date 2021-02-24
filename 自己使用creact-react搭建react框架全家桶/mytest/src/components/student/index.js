import React from 'react'

export default function index(props) {
    return (
        <div>
            <span>学生名字：{props.name}</span> 
            <span>学生性别：{props.sex}</span>
        </div>
    )
}
