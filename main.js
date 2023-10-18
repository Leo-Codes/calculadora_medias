const form = document.getElementById('insert-form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    renderList();
});

function renderList() {
    let atividadeInput = document.getElementById('nome-atividade');
    let notaInput = document.getElementById('nota-atividade');
    let tbody = document.getElementById('table-body');

    const data = `
    <tr>
    <td>${atividadeInput.value}</td>
    <td>${notaInput.value}</td>
    <td>${notaInput.value >= 7 ? '<img src="./images/aprovado.png" alt="Emoji Festejando">' : '<img src="./images/reprovado.png" alt="Emoji triste"></img>'}</td>
    </tr>
    `;

    tbody.innerHTML += data;
}