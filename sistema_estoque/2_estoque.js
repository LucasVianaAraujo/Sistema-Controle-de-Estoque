import * as funcoes1 from "./1_app.js"
import prompt from "prompt-sync"
let ler = prompt();

export let Estoque = []
export let EstoqueQtd = []

export function AddEstoque() {
    console.log()
    console.log(`Informe o nome do produto:`)
    let item = ler()
    Estoque.push(item)

    console.log("Informe a quantidade de itens:")
    let qtd = Number(ler())
    EstoqueQtd.push(qtd)

    console.log()
    console.log(item + " adicionado ao estoque!")
    console.log()

    funcoes1.Menu();
}