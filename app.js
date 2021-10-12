let listN = []

function sortearNumero(){
    let numeroSorteado = parseInt((Math.random()*30) + 1)
    
    if(listN.indexOf(numeroSorteado) == -1){
        listN.push(numeroSorteado)
        document.querySelector('.last-number').innerHTML = numeroSorteado
        console.log(`Número novo! ${numeroSorteado}`)
        let selected = document.querySelector(`#n${numeroSorteado}`)
        selected.classList.add('active')
    } else {
        console.log(`Número repetido! ${numeroSorteado}`)
        sortearNumero()
    }
    console.log(listN)
}