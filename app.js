let numeroSecreto = 0;
let intentos =0;
let listaNumerosSorteados= [];
let numeroMaximo =10;

function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto; 
    return;
}     
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById(`valorUsuario`).value);
    
    
    if (numeroDeUsuario===numeroSecreto){
        asignarTextoElemento(`p`,`Acertaste el número secreto en ${intentos} ${(intentos===1) ? `intento` : `intentos`}`)
        document.getElementById(`reiniciar`).removeAttribute(`disabled`);
    } else {
        if (numeroDeUsuario> numeroSecreto)
            asignarTextoElemento (`p`,`El número secreto es menor`);
         else {
            asignarTextoElemento(`p`,`El número secreto es mayor`);
         }
         intentos++;
         limpiarCaja();
    }
    return;
}

function limpiarCaja() { 
 let valorCaja = document.querySelector (`#valorUsuario`).value=(``);
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1
    //si el numero generado esta incluido en la lista 
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya se sortearon todos los numeros posibles
    if(listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento(`p`,"ya se sortearon todos los numeros posibles");
        }
         else {if(listaNumerosSorteados.includes(numeroGenerado))
        return generarNumeroSecreto();
       else {
       listaNumerosSorteados.push (numeroGenerado);
       return numeroGenerado}}
   

    
} 


function condicionesIniciales(){
    asignarTextoElemento(`h1`,"Juego del número secreto");
    asignarTextoElemento(`p`,`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto=generarNumeroSecreto() 
    intentos=1;}

function reiniciarJuego(){

    limpiarCaja();

    condicionesIniciales();
 
  document.getElementById(`reiniciar`).setAttribute(`disabled`,true)
     

}

condicionesIniciales();