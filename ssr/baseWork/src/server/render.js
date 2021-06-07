import React from 'react'
import App from "./App"
import ReactDom from "react-dom/server"
export default function(req,res){
    const componentHTML =  ReactDom.renderToString(<App/>);  
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <div id="root">
            ${componentHTML}
        </div>
    </body>
    </html>`
    res.send(html)
}