import React from 'react'
import {Link} from "react-router-dom"
export default function Admin() {
    return (
        <div>
            <h1>后台页面</h1>
            <Link to="/admin/user">用户管理</Link>
            {
                // 这里进行切换
            }
        </div>
    )
}
