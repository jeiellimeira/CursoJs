function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');
    
    if (fano.value.length === 0 || isNaN(fano.value) || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.');
        return;
    }
    
    var fsex = document.getElementsByName('radsex');
    var idade = ano - Number(fano.value);
    var genero = '';
    var img = document.createElement('img');
    img.setAttribute('id', 'foto');

    if (fsex[0].checked) {
        genero = 'Homem';
        if (idade >= 0 && idade < 10) {
            img.setAttribute('src', 'img/bebe-m.jpg'); // criança
        } else if (idade < 21) {
            img.setAttribute('src', 'img/jovem-m.jpg'); // jovem
        } else if (idade < 50) {
            img.setAttribute('src', 'img/homem-m.jpg'); // adulto
        } else {
            img.setAttribute('src', 'img/idoso-m.jpg'); // idoso
        }
    } else if (fsex[1].checked) {
        genero = 'Mulher';
        if (idade >= 0 && idade < 10) {
            img.setAttribute('src', 'img/bebe-f.jpg'); // criança
        } else if (idade < 21) {
            img.setAttribute('src', 'img/jovem-f.jpg'); // jovem
        } else if (idade < 50) {
            img.setAttribute('src', 'img/mulher-f.jpg'); // adulto
        } else {
            img.setAttribute('src', 'img/idoso-f.jpg'); // idoso
        }
    } else {
        window.alert('[ERRO] Selecione um gênero.');
        return;
    }

    res.style.textAlign = 'center'; // Estilização opcional
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    res.appendChild(img);
}
