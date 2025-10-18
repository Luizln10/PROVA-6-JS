let tarefas = []

let adicionarTarefa = function(tarefa) {
    tarefas.push(tarefa)
}

let listarTarefas = () => {
    tarefas.forEach((tarefa, i) => console.log(`${i}: ${tarefa}`))
}

function executarAcao(callback) {
    callback(tarefas)
}

while (true) {
    let ação = prompt("Escolha uma ação: adicionar, listar, remover, atualizar, concluir, sair").toLowerCase()

    if (ação === "sair") break

    if (ação === "adicionar") {
        let tarefa = prompt("Digite a tarefa a adicionar:")
        adicionarTarefa(tarefa)
    } else if (ação === "listar") {
        listarTarefas()
    } else if (ação === "remover") {
        let indice = parseInt(prompt("Digite o índice da tarefa a remover:"))
        executarAcao((lista) => {
            if (indice >= 0 && indice < lista.length) lista.splice(indice, 1)
            else alert("Índice inválido.")
        })
    } else if (ação === "atualizar") {
        let indice = parseInt(prompt("Digite o índice da tarefa a atualizar:"))
        let novaTarefa = prompt("Digite a nova tarefa:")
        executarAcao((lista) => {
            if (indice >= 0 && indice < lista.length) lista[indice] = novaTarefa
            else alert("Índice inválido.")
        })
    } else if (ação === "concluir") {
        let indice = parseInt(prompt("Digite o índice da tarefa a concluir:"))
        executarAcao((lista) => {
            if (indice >= 0 && indice < lista.length) lista[indice] = " " + lista[indice]
            else alert("Índice inválido.")
        })
    } else {
        alert("Ação inválida.")
    }
}
