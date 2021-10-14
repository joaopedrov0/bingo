let ballqtd = 30

let size

let listN = []

function sortearNumero(){
    if(listN.length == ballqtd){
        game.reset()
    } else {
        
        let numeroSorteado = parseInt((Math.random()*ballqtd) + 1)
    
        if(listN.indexOf(numeroSorteado) == -1){
            listN.push(numeroSorteado)
            document.querySelector('.last-number').innerHTML = numeroSorteado
            console.log(`Número novo! ${numeroSorteado}`)
            let selected = document.querySelectorAll(`#n${numeroSorteado}`)
            for(let i = 0; i < selected.length; i++){
                selected[i].classList.add('active')
            }
            
        } else {
            console.log(`Número repetido! ${numeroSorteado}`)
            sortearNumero()
        }
        console.log(listN)
        
    }
    verificarVitoria()
}

function verificarVitoria(){
    let winners = []
    let listFicha = document.body.childNodes[9].querySelectorAll('.ficha')
    for(let pos = 0; pos < listFicha.length; pos++){
        let activeList = document.querySelectorAll(`.ficha:nth-child(${pos + 1}) .active`)
        if(activeList.length == 12){
            let name = document.querySelector(`.ficha:nth-child(${pos + 1}) h2`).innerText
            winners.push(name)
        }
    }
    if(winners.length > 0){
        if(winners.length == 1){
            alert(`${winners[0]} ganhou o jogo!`)
        } else if(winners.length > 1){
            alert(`Empate entre ${winners.join(', ')}!`)
        }
        game.reset()
    }
}

let game = {
    reset: function(){
        let balls = document.querySelectorAll('.ball')
        for(let i = 0; i < balls.length; i++){
            let tempTag = balls[i]
            tempTag.classList.remove('active')
        }
        listN = []
    },
    gerarTabela: function(){
        let tabela = document.querySelector('.ball-box')
        tabela.innerHTML = ''
        for(let i = 1; i <= ballqtd; i++){
            tabela.innerHTML += `<div id="n${i}" class="ball">${i}</div>`
        }
        if(window.screen.width < 500){
            switch(ballqtd){
                case 30:
                    size = 14
                    break
                case 60:
                    size = 10
                    break
                case 99:
                    size = 6
                    break
            }
        } else {
            switch(ballqtd){
                case 30:
                    size = 5
                    break
                case 60:
                    size = 4
                    break
                case 99:
                    size = 3
                    break
            }
        }
        resize()
    }
}
function resize(){
    let balls = document.querySelectorAll('.ball-box .ball')
    for(let pos = 0; pos < balls.length; pos++){
        balls[pos].style.width = `${size}vw`
        balls[pos].style.height = `${size}vw`
    }
}

function setBallQtd(x){
    game.reset()
    cleanFichas()
    ballqtd = x
    game.gerarTabela()
}
game.gerarTabela()