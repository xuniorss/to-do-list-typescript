"use strict";
let listElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');
let listaSalva = localStorage.getItem('@listagem_tarefas');
let tarefas = listaSalva !== null && JSON.parse(listaSalva) || [];
const listarTarefas = () => {
    listElement.innerHTML = '';
    tarefas.map(item => {
        let todoElement = document.createElement('li');
        let tarefaText = document.createTextNode(item);
        let linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        let posicao = tarefas.indexOf(item);
        linkElement.setAttribute('onclick', `deletarTarefa(${posicao})`);
        linkElement.setAttribute('style', 'margin-left: 10px');
        let linkText = document.createTextNode('Excluir');
        linkElement.appendChild(linkText);
        todoElement.appendChild(tarefaText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    });
};
listarTarefas();
const adicionarTarefas = () => {
    if (inputElement.value === '') {
        alert('Digite alguma tarefa!');
        return false;
    }
    else {
        let tarefaDigitada = inputElement.value;
        tarefas.push(tarefaDigitada);
        inputElement.value = '';
        listarTarefas();
        saveData();
    }
};
buttonElement.onclick = adicionarTarefas;
function deletarTarefa(posicao) {
    tarefas.splice(posicao, 1);
    listarTarefas();
    saveData();
}
const saveData = () => {
    localStorage.setItem('@listagem_tarefas', JSON.stringify(tarefas));
};
