//Cada archivo en node es un modulo

// Siempre en un require debo empezar con un ./, en caso de multinivel ../ 

const infoName = require("./2-2-modules");

const data = require('./3-alternative-flavors');

require("./4-mindGranade")

//infoName.sayHi(infoName.john)