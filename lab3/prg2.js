import http from 'http';


const srever = http.createServer((req,res)=>{
    res.write("<h1>Hello Clinet</h1>");
    res.end();
});


server.lesten(4444,()=>console.log("server is running at 4444..."));