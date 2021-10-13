let listN = []

function sortearNumero(){
    if(listN.length == 30){
        let balls = document.querySelectorAll('.ball')
        for(let i = 0; i < balls.length; i++){
            let tempTag = balls[i]
            tempTag.classList.remove('active')
        }
        listN = []

        
    } else {
        
        let numeroSorteado = parseInt((Math.random()*30) + 1)
    
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
    
}