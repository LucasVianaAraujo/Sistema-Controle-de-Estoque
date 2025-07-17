import * as funcoes2 from "./2_estoque.js"
import * as funcoes3 from "./3_exib_estoque.js"
import * as funcoes4 from "./4_remov_estoque.js"
import * as funcoes5 from "./5_exib_add.js"
import * as funcoes6 from "./6_deletar_estoque.js"
import * as funcoes7 from "./7_zerar_estoque.js"
import * as funcoes8 from "./8_add_qtd.js"
import prompt from "prompt-sync"
let ler = prompt();

export function Menu() {
    console.log("1 - Adicionar ao estoque")
    console.log("2 - Adicionar quantidade")
    console.log("3 - Remover quantidade")
    console.log("4 - Exibir estoque")
    console.log("5 - Exibir item específico do estoque")
    console.log("6 - Deletar produto do estoque")
    console.log("7 - Zerar estoque")
    console.log("8 - Sair")
    let decisao = Number(ler());

    if (decisao === 1) {
        funcoes2.AddEstoque();
    }

    if (decisao === 2) {
        funcoes8.AddQtd()
    }

    if (decisao === 3) {
        funcoes4.Remover();
        // adicionar um if e else dentro do if e else que retorna "não é possível remover, não há itens no estoque"
    }

    else if (decisao === 4) {
        funcoes3.Exibir();
    }

    else if (decisao === 5) {
        funcoes5.Exibir_Data();
    }

    else if (decisao === 6) {
        funcoes6.Deletar();
    }

    else if (decisao === 7) {
        console.log("Está ação não pode ser desfeita, deseja prosseguir mesmo assim?")
        console.log("Sim [S] Não [N]")
        let resp = ler()

        if (resp === "S" || "s") {
            console.log()
            console.log("Estoque zerado!")
            console.log()
            funcoes7.Zerar();
        }

        else if (resp === "N" || "n") {
            Menu()
        }

        else {
            console.log("Resposta inválida!")
            Menu()
        }
    }

    else if (decisao === 8) {
        return;
    }
}

Menu();