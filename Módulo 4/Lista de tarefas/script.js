let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

let tarefas = [];

function renderTarefas() {
    listElement.innerHTML = "";

    tarefas.map((todo) => {
        let liElement = document.createElement("li");
        let tarefaText = document.createTextNode(todo);

        let linkElement = document.createElement("a");
        linkElement.setAttribute("href", "#");

        let linkText = document.createTextNode("Excluir");
        linkElement.appendChild(linkText);

        let posicao = tarefas.indexOf(todo);

        linkElement.setAttribute("onClick", `deletarTarefa(${posicao})`);

        liElement.appendChild(tarefaText);
        liElement.appendChild(linkElement);
        listElement.appendChild(liElement);
    })
}

function adicionarTarefa() {
    if (inputElement.value === '') {
        alert("Digite alguma tarefa!");
        return false;
    } else {
        // console.log(inputElement.value);
        // alert(inputElement.value);
        let novaTarefa = inputElement.value;

        tarefas.push(novaTarefa);
        inputElement.value = ''; // Limpando o campo(input) após ser inserido alguma tarefa

        renderTarefas();
    }
}
buttonElement.onclick = adicionarTarefa;

function deletarTarefa(posicao) {
    // alert("Posição do item: " + posicao);
    tarefas.splice(posicao, 1);

    renderTarefas();
}