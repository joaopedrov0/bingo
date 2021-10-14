let configModal = document.querySelector('#config-modal')

function openSettings(){
    fecharModal()
    configModal.style.display = 'flex'
}

function closeSettings(){
    configModal.style.display = 'none'
}