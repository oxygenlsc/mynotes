import fs from 'fs'


export default function(){
    const res = fs.readdirSync('./public/css')
    .filter(file=>file.endsWith(".css")).map(file=>`<Link rel="stylesheet" href="/css/${file}"></Link>`)

    return res.join("\n")
}