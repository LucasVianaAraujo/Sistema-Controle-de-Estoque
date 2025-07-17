import * as funcoes1 from "./1_app.js"
import prompt from "prompt-sync"
import { Estoque, EstoqueQtd } from "./2_estoque.js";
let ler = prompt();

export function Deletar() {
    console.log()
    console.log("Informe a posição do item que deseja remover do estoque")
    let pos_delete = Number(ler());

    console.log()
    console.log(`Excluir: "` + Estoque[pos_delete] + `"?`)
    console.log("Sim [S] Não [N]")
    let resp = ler();
    console.log()

    if (resp === "s") {
        console.log(Estoque[pos_delete, 0] + " removido")
        Estoque.splice(pos_delete, 1)
        EstoqueQtd.splice(pos_delete, 1)
        console.log()
        funcoes1.Menu()
    }

    else if (resp === "n") {
        funcoes1.Menu()
    }
}