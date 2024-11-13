function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('img');
    var data = new Date();
    var hora = data.getHours();
    

    msg.innerHTML = `Agora são ${hora} horas`;

    if (hora >= 0 && hora < 12) {
        // Bom dia
        img.src = 'img/pexels-tobiandchris-29360172-removebg-preview (1).png';
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde
        img.src = 'img/pexels-andersonmartins-retratos-2386144-removebg-preview.png';
        document.body.style.background = '#FCAA5D'
    } else {
        // Boa noite
        img.src = 'img/pexels-rbrigant44-771883-removebg-preview.png';
        document.body.style.background = '#000000'
        
    }
}
