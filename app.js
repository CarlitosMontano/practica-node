console.log("Hola estoy practicando nodejs")
console.log(process.version)



const saludar = require("./modulos/mensajes");

console.log(saludar("Carlos"))


const {sumar, restar, multiplicar} = require("./modulos/operaciones")

console.log(sumar(2, 2))
console.log(restar(10, 4))
console.log(multiplicar(5, 3))