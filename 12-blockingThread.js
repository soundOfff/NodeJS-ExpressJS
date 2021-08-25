const http = require('http');

const server = http.createServer( (req, res) => {

    if(req.url === '/')
    {
        res.end("Home page")
    }
    else if(req.url === '/about')
    {
        for (let index = 0; index < 1000; index++) {
            console.log(index);
        } 
        res.end("About page")
    }
    else {

        res.end("Error page")
    }
    
})

server.listen(5000, () => {
    console.log("Server ready listening on port: 5000 ");
})