import { Estoque, EstoqueQtd } from "./2_estoque.js";
import * as funcoes1 from "./1_app.js"
import prompt from "prompt-sync"
let ler = prompt ();

export function Exibir_Data() {
    console.log("Informe a posição do item a ser exibido:")
    let pos_item = Number(ler());

    console.log()
    console.log("Produto: " + Estoque[pos_item])
    console.log("Quantidade: " + EstoqueQtd)
    console.log()

    funcoes1.Menu()
}