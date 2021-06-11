import getScripts from "./getScript"
import getLinks from './getLink'
export default (componentHTML)=>{
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        ${getLinks()}
        <title>ssr</title>
    </head>
    <body>
        <div id="root">${componentHTML}</div>
        ${getScripts()}
    </body>
    </html>`;

    return html
}