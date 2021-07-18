import React from 'react'
import App from "./App"
import ReactDom from "react-dom/server"
import getHTML from './getHTML'
export default function(req,res){
    const componentHTML =  ReactDom.renderToString(<App location={req.path} context={{}}/>);  
    const html = getHTML(componentHTML)
    res.send(html)
}