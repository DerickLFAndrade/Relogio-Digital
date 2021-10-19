function dataAtual () {
    let data = new Date();
    let hora = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();


    let relogio = document.querySelector('[data-relogio]')
    let rHora = relogio.querySelector('[data-hora]')
    let rMinutos = relogio.querySelector('[data-minutos]')
    let rSegundos = relogio.querySelector('[data-segundos]')
    if( hora < 10){
        hora = '0'+hora
    }
     if (minutos < 10) {
        minutos = '0'+minutos
    }
     if (segundos < 10) {
        segundos = '0'+segundos
    }
    
    rHora.innerHTML = hora
    rMinutos.innerHTML = minutos
    rSegundos.innerHTML = segundos
}
setInterval(dataAtual, 1000)