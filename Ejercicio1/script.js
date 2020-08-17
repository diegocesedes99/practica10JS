let time;
let cont = 0;
function start(){
    time = window.setInterval(chronometer,1000);
}
function chronometer(){
    const chronometer = document.getElementById('chronometer');
    chronometer.innerHTML = cont++; 
}
function stop(){
    window.clearInterval(time);
}
function reset(){
    const reset = document.getElementById('chronometer');
    cont = 0; 
    reset.innerHTML = cont; 
}
const botonstart = document.getElementById('start');
botonstart.addEventListener('click', start);
const botonstop = document.getElementById('stop');
botonstop.addEventListener('click', stop);
const botonreset = document.getElementById('reset');
botonreset.addEventListener('click', reset);
console.log('chronometer');