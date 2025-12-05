function carregarDados() {
    let lista = JSON.parse(localStorage.getItem("emprestimos") || "[]");
    return lista;
}

function salvarDados(dados) {
    let lista = carregarDados();
    lista.push(dados);
    localStorage.setItem("emprestimos", JSON.stringify(lista));
}

if (document.getElementById("loanForm")) {
    document.getElementById("loanForm").addEventListener("submit", function (e) {
        e.preventDefault();

        let nome = document.getElementById("nome").value;
        let contacto = document.getElementById("contacto").value;
        let local = document.getElementById("local").value;
        let valor = Number(document.getElementById("valor").value);
        let meses = Number(document.getElementById("meses").value);

        let total = valor * (1 + 0.15 * meses);

        document.getElementById("resultado").innerText =
            `O cliente vai pagar: ${total.toFixed(2)} MT`;

        salvarDados({
            nome, contacto, local,
            valor, meses,
            total: total.toFixed(2)
        });
    });
}

if (document.getElementById("tabela")) {
    let lista = carregarDados();
    let corpo = document.querySelector("#tabela tbody");

    lista.forEach(c => {
        let linha = `
            <tr>
                <td>${c.nome}</td>
                <td>${c.contacto}</td>
                <td>${c.local}</td>
                <td>${c.valor}</td>
                <td>${c.meses}</td>
                <td>${c.total}</td>
            </tr>
        `;
        corpo.innerHTML += linha;
    });
}
