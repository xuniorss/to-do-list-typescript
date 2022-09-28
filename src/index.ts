let listElement = document.querySelector('#app ul') as HTMLUListElement
let inputElement = document.querySelector('#app input') as HTMLInputElement
let buttonElement = document.querySelector('#app button') as HTMLElement

let tarefas: string[] = []

const adicionarTarefas = (): boolean | void => {
    if(inputElement.value === '') {
        alert('Digite alguma tarefa!')
        return false
    } else {
        let tarefaDigitada: string = inputElement.value
        tarefas.push(tarefaDigitada)
        inputElement.value = ''
        saveData()
    }
}

buttonElement.onclick = adicionarTarefas

const saveData = () => {
    localStorage.setItem('@listagem_tarefas', JSON.stringify(tarefas))
}