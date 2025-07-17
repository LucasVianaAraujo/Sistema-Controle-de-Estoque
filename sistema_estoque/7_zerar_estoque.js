import * as funcoes1 from "./1_app.js"
import prompt from "prompt-sync"
import { Estoque, EstoqueQtd } from "./2_estoque.js";
let ler = prompt ();

export function Zerar() {
    Estoque.length = 0
    EstoqueQtd.length = 0

    funcoes1.Menu()
}