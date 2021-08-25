const { readFile, writeFile } = require('fs')
const { get } = require('http')

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, result) => {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}

// getText("./content/first.txt")
//     .then(result => console.log(result))
//     .catch((err) => console.log(err))


const start = async() => {
    try {
        const first = await getText("./content/first.txt")
        console.log(first);
    } catch (error) {
        console.log(error);    
    }
}

start()