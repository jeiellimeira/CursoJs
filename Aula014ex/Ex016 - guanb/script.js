function iniciar() {
    // Captura os valores corretos dos inputs
    var inicio = Number(document.getElementById('inicio').value);
    var fim = Number(document.getElementById('fim').value);
    var passo = Number(document.getElementById('passo').value);

    var res = document.getElementById('res');

    // Validação dos campos
    if (inicio === 0 || fim === 0 || passo <= 0) {
        alert('Por favor, preencha todos os campos corretamente. O passo deve ser maior que 0.');
        return; // Interrompe a execução caso os dados estejam incorretos
    }

    // Limpa o resultado anterior
    res.innerHTML = 'Contando:<br>';

    // Loop para contagem progressiva
    for (var c = inicio; c <= fim; c += passo) {
        res.innerHTML += `${c} 👉 `;
    }

    res.innerHTML += '🏁'; // Finaliza a contagem
}
