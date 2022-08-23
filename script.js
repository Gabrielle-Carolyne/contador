 // estado da minha aplicação
 let numero = 0

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
 // jogar o estado da aplicação na tela
 function MostrarNaTela(){
     const p = document.querySelector("#resultado")
     p.innerText = numero
 }

 //iniciar
 MostrarNaTela()