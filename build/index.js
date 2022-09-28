"use strict";
let listElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');
let tarefas = [];
const adicionarTarefas = () => {
    if (inputElement.value === '') {
        alert('Digite alguma tarefa!');
        return false;
    }
    else {
        let tarefaDigitada = inputElement.value;
        tarefas.push(tarefaDigitada);
        inputElement.value = '';
        saveData();
    }
};
buttonElement.onclick = adicionarTarefas;
const saveData = () => {
    localStorage.setItem('@listagem_tarefas', JSON.stringify(tarefas));
};
