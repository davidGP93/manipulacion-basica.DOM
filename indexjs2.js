const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btncalcular');
const parrafoResultado = document.querySelector('#result');

form.addEventListener('submit', sumarInputValues);

// function listenOnClick(){
//    const sumaInputs = (Number.parseInt(input1.value) + Number.parseInt(input2.value));
//    parrafoResultado.innerHTML = 'El resultado es: ' + sumaInputs;
// }

function sumarInputValues(event){
    console.log({event});
    event.preventDefault();
    const sumaInputs = (Number.parseInt(input1.value) + Number.parseInt(input2.value));
    parrafoResultado.innerHTML = 'El resultado es: ' + sumaInputs;
 }