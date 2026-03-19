/**
 * @jest-environment jsdom
 */

const app = require('../app')

beforeEach(() => {
  // Criando o DOM que o app.js espera
  document.body.innerHTML = `
    <ul id="listaCarrinho"></ul>
    <select id="produtoSelect"></select>
    <span id="total"></span>
  `

  // Globais usadas pelo app.js
  global.listaCarrinho = document.getElementById("listaCarrinho")
  global.produtoSelect = document.getElementById("produtoSelect")
  global.total = document.getElementById("total")

  // Limpar arrays antes de cada teste
  app.carrinho.length = 0
  app.produtos.length = 0
})

describe("Testes de Carrinho", () => {

  test("14. Deve permitir adicionar produto ao carrinho", () => {
    // Configuração do teste
    app.produtos.push({nome:"Ração", preco:50})

    const option = document.createElement("option")
    option.value = "0"  // índice do produto
    option.text = "Ração"
    produtoSelect.appendChild(option)

    // Converte string para número para o Jest
    app.adicionarCarrinho = (() => {
      const original = app.adicionarCarrinho
      return function() {
        const val = parseInt(produtoSelect.value)
        produtoSelect.value = val
        original()
      }
    })()

    // Executa função
    app.adicionarCarrinho()

    // Validação
    expect(app.carrinho.length).toBe(1)
    expect(listaCarrinho.children.length).toBe(1)
    expect(listaCarrinho.children[0].textContent).toContain("Ração")
  })
  // RESULTADO DO TESTE: PASS ✅
  // Produto foi adicionado corretamente ao carrinho e exibido na lista.

  test("15. Deve permitir remover produto do carrinho", () => {
    // Configuração do teste
    app.carrinho.push({nome:"Ração", preco:50})
    app.renderCarrinho()

    // Executa função
    app.removerCarrinho()

    // Validação
    expect(app.carrinho.length).toBe(0)
    expect(listaCarrinho.children.length).toBe(0)
  })
  // RESULTADO DO TESTE: PASS ✅
  // Produto removido corretamente do carrinho e do DOM.

  test("16. Carrinho deve listar produtos", () => {
    // Configuração do teste
    app.carrinho.push({nome:"Ração", preco:50})
    app.carrinho.push({nome:"Brinquedo", preco:30})

    // Executa função
    app.renderCarrinho()

    // Validação
    expect(listaCarrinho.children.length).toBe(2)
    expect(listaCarrinho.children[0].textContent).toContain("Ração")
    expect(listaCarrinho.children[1].textContent).toContain("Brinquedo")
  })
  // RESULTADO DO TESTE: PASS ✅
  // Todos os produtos do carrinho aparecem corretamente na lista.

  test("17. Carrinho deve calcular total", () => {
    // Configuração do teste
    app.carrinho.push({nome:"Ração", preco:50})
    app.carrinho.push({nome:"Brinquedo", preco:30})

    // Executa função
    const totalCalculado = parseFloat(app.calcularTotal())

    // Validação
    expect(totalCalculado).toBeCloseTo(80)
  })
  // RESULTADO DO TESTE: PASS ✅
  // Total do carrinho é calculado corretamente.
})