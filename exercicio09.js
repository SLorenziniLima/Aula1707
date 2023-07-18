//Faça um programa que receba um número do usuário e mostre
//no console a contagem regressiva até 0.

let prompt = require("prompt-sync") ()

let numero =  parseFloat( prompt ("Digite um numero: "))

for (let i = numero; i >= 0; i--) {
    console.log(i);
    
  }

