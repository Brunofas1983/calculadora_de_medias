const form = document.getElementById('form-atividade');
const imagemaprovado = '<img src="./images/aprovado.png" alt="emoji festejando" />';
const imagemareprovado = '<img src="./images/reprovado.png" alt="emoji reprovado" />';
const atividade = [];
const notas = [];
const spanaprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanreprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaminima = parseFloat(prompt("Digite a nota mínima:"));


let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionalinha();
    atualizatabela();
    atualizamediafinal();
});

function adicionalinha() {
    const inputnomedaatividade = document.getElementById('nome-atividade');
    const inputnotaatividade = document.getElementById('nota-atividade');

    if (atividade.includes(inputnomedaatividade.value)) {
        alert(`A Atividade: ${inputnomedaatividade.value} já foi inserida`);
    } else {

        atividade.push(inputnomedaatividade.value);
    notas.push(parseFloat(inputnotaatividade.value));

    let linha = '<tr>';
    linha += `<td>${inputnomedaatividade.value}</td>`;
    linha += `<td>${inputnotaatividade.value}</td>`;
    linha += `<td>${inputnotaatividade.value >= notaminima ? imagemaprovado : imagemareprovado } </td>`;
    linha += '<tr>';

    linhas += linha;

    }

    inputnomedaatividade.value = '';
    inputnotaatividade.value = '';

}

function atualizatabela() {
    const corpotabela = document.querySelector('tbody');
    corpotabela.innerHTML = linhas;

}

function atualizamediafinal(){
    const mediafinal = calculamediafinal();

    document.getElementById('media-final-valor').innerHTML = mediafinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediafinal >= notaminima ? spanaprovado : spanreprovado;
    
}


function calculamediafinal() {
    let somadasnotas = 0;
    for (let i = 0; i < notas.length; i++ ) {
        somadasnotas += notas[i];
    }
    
    return somadasnotas / notas.length;

}