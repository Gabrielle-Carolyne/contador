 // estado da minha aplicação
 let numero = 1

 // alteradores de estado da aplicação
 function diminuir() {
     numero = numero - 1
     MostrarNaTela()
 }
 function aumentar() {
     numero = numero + 1
     MostrarNaTela()
 }
 function zerar() {
     numero = 0
     MostrarNaTela()
 }
 function impares() {
    if (numero % 2 == 1) {
        numero = numero + 2 // ímpar
     } else {
        numero = numero + 1 // par
     }
     
     MostrarNaTela()
 }
 function pares() {
     if (numero % 2 == 0) {
        numero = numero + 2 // par
     } else {
        numero = numero + 1 // impar
     }
     MostrarNaTela() 
     
 }

 // jogar o estado da aplicação na tela
 function MostrarNaTela(){
     const p = document.querySelector("#resultado")
     p.innerText = numero
 }

 //iniciar
 MostrarNaTela()