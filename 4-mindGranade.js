// Si tengo una funcion en el modulo a la que llamo en el mismo
// esa funcion correra sin que la asignemos a una variable con
// require(""), CUANDO IMPORTAMOS UN MODULO REALMENTE LO INVOCAMOS

const num1 = 5;
const num2 = 10;

function addValues() {
    console.log(`The sum is ${num1 + num2}`)
}

addValues();