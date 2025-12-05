// Calcula data do pagamento
function calcularDataPagamento(meses) {
    let hoje = new Date();
    let pagamento = new Date(hoje);
    pagamento.setMonth(pagamento.getMonth() + parseInt(meses));
    return pagamento.toISOString().split("T")[0];
}

// Salva cliente no localStorage
function salvarCliente(dados) {
    let lista = JSON.parse(localStorage.getItem("clientes")) || [];
    lista.push(dados);
    localStorage.setItem("clientes", JSON.stringify(lista));
}

// Carrega clientes
function carregarClientes() {
    return JSON.parse(localStorage.getItem("clientes")) || [];
}

// Apaga cliente específico
function apagarCliente(index) {
    let lista = carregarClientes();
    lista.splice(index, 1);
    localStorage.setItem("clientes", JSON.stringify(lista));
}

// Apaga todos
function limparTudo() {
    localStorage.removeItem("clientes");
}
