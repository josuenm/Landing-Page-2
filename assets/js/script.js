let horas = localStorage.getItem('horas') ? localStorage.getItem('horas') : '0' + 1
let minutos = localStorage.getItem('minutos') ? localStorage.getItem('minutos') : 39
let segundos = localStorage.getItem('segundos') ? localStorage.getItem('segundos') : 59

function start() {
    setInterval(() => {
        timer()
    }, 1000)
}

function timer() {
    segundos--;
    if (segundos < 10 && segundos > 0) {
        segundos = '0' + segundos
    }

    if (segundos == 0) {
        segundos = 59;
        minutos--;
        if (minutos < 10 && minutos > 0) {
            minutos = '0' + minutos
        }

        if (minutos == 0) {
            minutos = 59;
            horas--;
        }
    }
    document.querySelector('#horas').innerHTML = horas
    document.querySelector('#minutos').innerHTML = minutos
    document.querySelector('#segundos').innerHTML = segundos

    localStorage.setItem('horas', horas)
    localStorage.setItem('minutos', minutos)
    localStorage.setItem('segundos', segundos)
}

var pause = document.querySelector('.pause')
var play = document.querySelector('.play')

var video = document.querySelector('video')
var buttons = document.querySelector('.buttons')

document.querySelector('#app').addEventListener('click', playerButtons)
document.querySelector('video').addEventListener('click', playerButtons)

function playerButtons() {
    if( play.classList.contains("active") )
    {
        video.play()
        buttons.classList.add("hide-button")
        play.classList.remove("active")
        pause.classList.add("active")
    }
    else
    {
        console.log(document.querySelector('video').duration)

        video.pause()
        buttons.classList.add("show-button")
        buttons.classList.remove("hide-button")
        document.querySelector('video').pause()

        pause.classList.remove("active")
        play.classList.add("active")
    }
}