// Los dos parametros de create quieren decir req -> request del usuario desde el browser
// y la resp -> response es lo que enviaremos de vuelta
// resp.end es como un valor default

const http = require("http")

const server = http.createServer((req, resp) => {

    if (req.url === "/") {
        resp.end("Welcome to our home page");
    }
    if (req.url === "/about") {
        resp.end("Welcome to our about page");
    }
    resp.end(`<h1>Opps!</h1>
              <p>We can't find your page</p>
              <a href="/">Back home </a> `)
})

// Es necesario decir que puerto escuchara

server.listen(5000)

