let total = 0;
limpar();

function adicionar() {
    let produto = document.getElementById(`produto`).value;
    let quantidade = document.getElementById(`quantidade`).value;

    // Validações
    if (produto === "" || !produto.includes("R$")) {
        alert("Por favor, selecione um produto válido.");
        return;
    }

    if (quantidade === "" || isNaN(quantidade) || quantidade <= 0) {
        alert("Por favor, insira uma quantidade válida.");
        return;
    }

    let nomeProduto = produto.split(`-`)[0];
    let valorUnitario = produto.split(`R$`)[1];
    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById(`lista-produtos`);

    carrinho.innerHTML += ` <section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">R$ ${preco}</span>
        </section>`;

    total += preco;
    let campoTotal = document.getElementById(`valor-total`);
    campoTotal.textContent = `R$ ${total}`;
    document.getElementById(`quantidade`).value = 0;
}

function limpar() {
    total = 0;
    document.getElementById(`lista-produtos`).innerHTML = `Adicione itens no seu carrinho!`;
    document.getElementById(`valor-total`).innerHTML = `R$ 0`;
}
