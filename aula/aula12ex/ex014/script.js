
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if  (hora >= 0 && hora < 12) {
        img.src="imagens/manha2.jpg"
        
    } else if (hora >=  12 && hora < 18){
        img.src="imagens/tarde2.jpg"
    } else {
        img.src="imagens/noite1.jpg"
    }

}