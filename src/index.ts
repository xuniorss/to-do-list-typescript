let listElement = document.querySelector('#app ul') as HTMLUListElement
let inputElement = document.querySelector('#app input') as HTMLInputElement
let buttonElement = document.querySelector('#app button') as HTMLElement

let listaSalva: (string | null) = localStorage.getItem('@listagem_tarefas')
let tarefas: string[] = listaSalva !== null && JSON.parse(listaSalva) || []

const listarTarefas = () => {
    listElement.innerHTML = ''
    tarefas.map(item => {
        let todoElement: HTMLElement = document.createElement('li')
        let tarefaText: Text = document.createTextNode(item)

        todoElement.appendChild(tarefaText)
        listElement.appendChild(todoElement)
    })
}
listarTarefas()

const adicionarTarefas = (): boolean | void => {
    if(inputElement.value === '') {
        alert('Digite alguma tarefa!')
        return false
    } else {
        let tarefaDigitada: string = inputElement.value
        tarefas.push(tarefaDigitada)
        inputElement.value = ''
        listarTarefas()
        saveData()
    }
}

buttonElement.onclick = adicionarTarefas

const saveData = () => {
    localStorage.setItem('@listagem_tarefas', JSON.stringify(tarefas))
}