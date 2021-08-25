const path = require('path');

// return the platform separator

console.log(path.sep)

// join method, joins a sequence of path segments usign that separator platform as the limiter

const filePath = path.join("/content", "subfolder", "textFile.txt")

console.log(filePath)

// shorcut to the last file of the normalized path

const base = path.basename(filePath);

console.log(base)

// result -> returns the abosulute path

const absolute = path.resolve(__dirname, "content", "subfolder", "textFile.txt");

console.log(absolute)
