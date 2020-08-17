let time;
let cont = 0;
let hh = 0;
let mm = 0;
let ss = 0;
function start(){
    time = window.setInterval(chronometer,1000);
}
function chronometer(){
    const chronometer = document.getElementById('chronometer');
    ss++;
    let h = '';
    let m = '';
    let s = '';
    if(ss > 59 ){
        mm++;
        ss = 0;
    }
    if(mm > 59){
        hh++;
        mm = 0;
    }
    if(hh > 12){
        hh++;
        h = 1;
    }
    if(ss < 10){
        s = '0' + `${ss}`;
    }else{
        s = `${ss}`;
    }
    if(mm < 10){
        m = '0' + `${mm}`;
    }else{
        m = `${mm}`;
    }
    if(hh < 10){
        h = '0' + `${hh}`;
    }else{
        h = `${hh}`;
    }
    chronometer.innerHTML = h+ ':' +m+ ':' +s; 
}
function stop(){
    window.clearInterval(time);
}
function reset(){
    const reset = document.getElementById('chronometer');
    cont = '00:00:00'; 
    reset.innerHTML = cont; 
}
const botonstart = document.getElementById('start');
botonstart.addEventListener('click', start);
const botonstop = document.getElementById('stop');
botonstop.addEventListener('click', stop);
const botonreset = document.getElementById('reset');
botonreset.addEventListener('click', reset);
console.log('chronometer');