function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date();
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <= 12) { //DIA
        img.src = 'dia.png'
        document.body.style.background = '#73702a'
    }
    else if (hora > 12 && hora <= 18){
        img.src = 'tarde.png'
        document.body.style.background = '#6e4003'
    }
    else{
        img.src = 'noite.png'
        document.body.style.background = '#090f1a'
    }
}