import { Estoque, EstoqueQtd } from "./2_estoque.js";
import * as funcoes1 from "./1_app.js"
import prompt from "prompt-sync"
let ler = prompt();

export function Remover() {
        console.log()
        console.log("Informe a posição do item:")
        let pos_remove = Number(ler());

        console.log("Informe a quantidade de itens a serem removidos de: " + Estoque[pos_remove])
        let qtd_remove = Number(ler());

        EstoqueQtd[pos_remove] -= qtd_remove // pesquisar pra que serve o "-="

        console.log(qtd_remove + " produtos removidos de " + Estoque[pos_remove])
        console.log()

        funcoes1.Menu()
}