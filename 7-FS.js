// Podemos hacerlo asincronico o sincronico

const { readFileSync, writeFileSync, write } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

//console.log(first, second);

// Si el archivo no esta ahi node lo crea y si esta ahi lo sobreescribe
// La bandera flag es para decirle que no sobrescriba, etc..
writeFileSync("./content/result-sync.txt", `Here is the resultadoooo:  ${first} ${second}`, {flag: "a"})