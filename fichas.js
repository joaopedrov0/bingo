let players = []
let listNFichas = []

let modal = document.querySelector('.modal-box')

document.addEventListener('keyup', (event) => {if(event.key == 'Enter'){adicionarJogador()}})

function abrirModal(){closeSettings();modal.style.display = "flex"}
function fecharModal(){modal.style.display = "none"}
function adicionarJogador(){
    let jogador = document.querySelector('#pessoas').value
    let playerList = document.querySelector('ul.players')

    if(players.indexOf(jogador) == -1 && jogador != ''){
        playerList.innerHTML += `<li>${jogador}</li>`
        players.push(jogador)

        console.log(`Jogador "${jogador}" adicionado com sucesso!`)

        console.log(`Lista de jogadores: ${players}`)
    } else {
        alert('Esse jogador já foi inserido, ou você não inseriu nenhum valor.')
    }

    document.querySelector('#pessoas').value = ''

    document.querySelector('#pessoas').focus()
}
function gerarFichas(){
    let campoFichas = document.querySelector('#fichas')
    campoFichas.innerHTML = ''
    listNFichas = []
    //let listNFichas = []
    for(let i = 0; i < players.length; i++){
        let currentPlayer = players[i]
        let seqNumbers = gerarNumerosFicha()
        
        listNFichas.push(seqNumbers)
        campoFichas.innerHTML += `
        <div class="ficha">
            <h2>${currentPlayer}</h2>
            <hr>
            <table>
                <tr>
                    <td><div id="n${seqNumbers[0]}" class="ball">${seqNumbers[0]}</div></td>
                    <td><div id="n${seqNumbers[1]}" class="ball">${seqNumbers[1]}</div></td>
                    <td><div id="n${seqNumbers[2]}" class="ball">${seqNumbers[2]}</div></td>
                    <td><div id="n${seqNumbers[3]}" class="ball">${seqNumbers[3]}</div></td>
                </tr>
                <tr>
                    <td><div id="n${seqNumbers[4]}" class="ball">${seqNumbers[4]}</div></td>
                    <td><div id="n${seqNumbers[5]}" class="ball">${seqNumbers[5]}</div></td>
                    <td><div id="n${seqNumbers[6]}" class="ball">${seqNumbers[6]}</div></td>
                    <td><div id="n${seqNumbers[7]}" class="ball">${seqNumbers[7]}</div></td>
                </tr>
                <tr>
                    <td><div id="n${seqNumbers[8]}" class="ball">${seqNumbers[8]}</div></td>
                    <td><div id="n${seqNumbers[9]}" class="ball">${seqNumbers[9]}</div></td>
                    <td><div id="n${seqNumbers[10]}" class="ball">${seqNumbers[10]}</div></td>
                    <td><div id="n${seqNumbers[11]}" class="ball">${seqNumbers[11]}</div></td>
                </tr>
            </table>
        </div>
        `
        
    }
    players = []
    document.querySelector('.players').innerHTML = ''
    fecharModal()
    scrolling(679)
}

function gerarNumerosFicha(){
    let numbers = []
    while(numbers.length < 12){
        let currentNumber = parseInt((Math.random() * ballqtd) + 1)
        if(numbers.indexOf(currentNumber) == -1){
            numbers.push(currentNumber)
        }
    }
    if(listNFichas.indexOf(numbers) == -1){
        numbers.sort((a, b) => {
            if(a > b){
                return 1
            } else if(a < b){
                return -1
            }
            return 0
        })
        return numbers
    } else {
        gerarNumerosFicha()
    }
    
}

function scrolling(x){
    window.scrollTo(0, x)
}

function cleanFichas(){
    players = []
    listN = []
    gerarFichas()
}