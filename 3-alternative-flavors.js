// Como module es un objeto estamos estableciendo una propiedad del tipo items
// y del tipo singlePerson para exportar estos valores

module.exports.items = ["item1","item2","item3","item4","item5","item6"];

const person = {
    name:"bob"
}

module.exports.singlePerson = person
