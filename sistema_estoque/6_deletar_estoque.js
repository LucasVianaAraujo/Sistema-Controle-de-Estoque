import * as funcoes1 from "./1_app.js"
import prompt from "prompt-sync"
import { Estoque, EstoqueQtd } from "./2_estoque.js";
let ler = prompt ();

export function Deletar() {
    console.log("Informe a posição do item que deseja remover do estoque")
    let pos_delete = Number(ler());

    Estoque.splice(pos_delete, 1)
    EstoqueQtd.splice(pos_delete, 1)

    funcoes1.Menu()
}