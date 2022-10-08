let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

let tarefas = [

];

function renderTarefas() {
    listElement.innerHTML = "";

    tarefas.map((todo) => {
        let liElement = document.createElement("li");
        let tarefaText = document.createTextNode(todo);

        liElement.appendChild(tarefaText);
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