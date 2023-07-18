//Faça um programa que imprima na tela a tabuada de um número
//qualquer escolhido pelo usuário até o 10.

let prompt = require("prompt-sync") ()

let numero = parseInt(prompt("Digite umm número de 1 a 10: "))

for (let i = 0; i <= 10; i++) {


    let resultado = numero * i

   //console.log(resultado)

    console.log( i + " x " + numero + " = "+ resultado)

  }
 


