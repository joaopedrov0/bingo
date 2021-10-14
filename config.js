let configModal = document.querySelector('#config-modal')

function openSettings(){
    fecharModal()
    configModal.style.display = 'flex'
    modalBlock(1)
}

function closeSettings(){
    configModal.style.display = 'none'
    modalBlock(0)
}

function modalBlock(x){
    const block = document.querySelector('#block')
    switch(x){
        case 0:
            block.style.display = 'none'
            break
        case 1:
            block.style.display = 'flex'
            break
    }
}

//ATALHOS TECLADO
document.addEventListener('keyup', (event) => {
    switch(event.key){
        case 'Escape':
            closeSettings()
            fecharModal()
            break
        case '1':
            sortearNumero()
            break
        case '2':
            abrirModal()
            break
        case '3':
            openSettings()
            break
    }
    console.log(event.key)
})