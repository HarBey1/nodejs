/*const http = require('http')

const server = http.createServer((req,res)=>{
    //console.log(req);
    if(req.url === '/' ){
        res.end('Welcome to our website')
    }
    if(req.ul === '/about'){
        res.end('our short history')
    }
    res.end(`<h1>Oops!</h1>
    <p> we can't find the page you are looking for</p>
    <a href= "/"> back home</a>`)
})
server.listen(2000)*/

const http = require('http')

http.createServer((req,res)=>{
    res.writeHead(200, {'content-type':'text/plain'});
    res.end(req.url);
}).listen(8001);
