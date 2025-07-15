import * as funcoes2 from "./2_estoque.js"
import * as funcoes3 from "./3_exib_estoque.js"
import * as funcoes4 from "./4_remov_estoque.js"
import * as funcoes5 from "./5_exib_add.js"
import prompt from "prompt-sync"
let ler = prompt();

export function Menu() {
    console.log("1 - Adicionar ao estoque")
    console.log("2 - Remover do estoque")
    console.log("3 - Exibir estoque")
    console.log("4 - Exibir item específico do estoque")
    console.log("5 - Sair")
    let decisao = Number(ler());

    if (decisao === 1) {
        funcoes2.AddEstoque()
    }

    if (decisao === 2) {
        funcoes4.Remover()
        // adicionar um if e else dentro do if e else que retorna "não é possível remover, não há itens no estoque"
    }

    else if (decisao === 3) {
        funcoes3.Exibir()
    }

    else if (decisao === 4) {
        funcoes5.Exibir_Data()
    }

    else if (decisao === 5) {
        return;
    }
}

Menu();