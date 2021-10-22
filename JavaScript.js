(function () {
    function dataAtual() {
        const rHora = document.querySelector('[data-hora]');
        const rMinutos = document.querySelector('[data-minutos]');
        const rSegundos = document.querySelector('[data-segundos]');
        const data = new Date();

        let hora = data.getHours();
        let minutos = data.getMinutes();
        let segundos = data.getSeconds();

        rHora.innerHTML = `${hora < 10 ? '0' : ''}` + hora;
        rMinutos.innerHTML = `${minutos < 10 ? '0' : ''}` + minutos;
        rSegundos.innerHTML = `${segundos < 10 ? '0' : ''}` + segundos;
    }

    setInterval(dataAtual, 1000);
})();

