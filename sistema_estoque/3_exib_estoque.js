// necessário fazer assim: "{ Estoque }" quando for importar um array, quebrei a cabeça tentando achar a solução...
import { Estoque, EstoqueQtd } from "./2_estoque.js"
import * as funcoes1 from "./1_app.js"
import prompt from "prompt-sync"
let ler = prompt();

export function Exibir() {
    console.log()
    console.log("Total de itens no estoque: " + Estoque.length)
    console.log()

    for (let i = 0; i < Estoque.length; i++) {
        console.log("Produto: " + Estoque[i]) // pesquisar pra que serve
        console.log("Quantidade: " + EstoqueQtd[i])
        console.log()
    }

    funcoes1.Menu()
}