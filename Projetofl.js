let total = 0
let tabela = document.getElementById("tabela-carrinho")
let totalTexto = document.getElementById("total")

function adicionar(nome, preco, idQtd) {
    let qtd = parseInt(document.getElementById(idQtd).value)
    let subtotal = preco * qtd

    total += subtotal

    
    let linha = tabela.insertRow()

    let colNome = linha.insertCell(0)
    let colQtd = linha.insertCell(1)
    let colUnit = linha.insertCell(2)
    let colSub = linha.insertCell(3)

    colNome.innerText = nome
    colQtd.innerText = qtd
    colUnit.innerText = "R$ " + preco.toFixed(2)
    colSub.innerText = "R$ " + subtotal.toFixed(2)

    totalTexto.innerText = "Total: R$ " + total.toFixed(2)

   
    location.href = "#carrinho"
}

function finalizarPedido() {
    if (total <= 0) {
        alert("Seu carrinho está vazio!")
    } else {
        alert(`
Pedido finalizado com sucesso!

Total da compra: R$ ${total.toFixed(2)}

Obrigado por escolher A Casa dos Livros ❤️
    `)

        tabela.innerHTML = `
    <tr>
      <th>Livro</th>
      <th>Quantidade</th>
      <th>Valor unitário</th>
      <th>Subtotal</th>
    </tr>
    `

        total = 0
        totalTexto.innerText = "Total: R$ 0,00"
    }
}
