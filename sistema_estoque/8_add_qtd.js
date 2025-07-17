import * as funcoes1 from "./1_app.js"
import prompt from "prompt-sync"
import { Estoque, EstoqueQtd } from "./2_estoque.js";
let ler = prompt ();

export function AddQtd() {
    console.log("Informe a posição do item:")
    let pos_add = Number(ler());

    console.log("Informe a quantidade de itens a serem adicionados:")
    let item_add = Number(ler());

    EstoqueQtd[pos_add] += item_add

    funcoes1.Menu();
}