/**
 * @jest-environment jsdom
 */

const app = require('../app')

beforeEach(() => {
  document.body.innerHTML = `
    <input id="produtoNome">
    <input id="produtoPreco">
    <select id="produtoSelect"></select>
    <ul id="listaProdutos"></ul>
  `

  global.produtoNome = document.getElementById("produtoNome")
  global.produtoPreco = document.getElementById("produtoPreco")
  global.produtoSelect = document.getElementById("produtoSelect")
  global.listaProdutos = document.getElementById("listaProdutos")
})

describe("Testes de Produto", () => {

  test("10. Deve permitir criar produto com nome", () => {
    produtoNome.value = "Ração"
    produtoPreco.value = "50"

    app.criarProduto()

    expect(listaProdutos.children.length).toBe(1)
  })
  // RESULTADO DO TESTE: FAIL ❌ (erro produtoSelect undefined)

  test("11. Produto deve possuir preço maior que zero", () => {
    let preco = 50
    expect(preco).toBeGreaterThan(0)
  })
  // RESULTADO DO TESTE: PASS

  test("12. Produto não pode possuir preço negativo", () => {
    let preco = -10
    expect(preco).toBeGreaterThan(0)
  })
  // RESULTADO DO TESTE: FAIL ❌

  test("13. Produto deve aparecer na lista", () => {
    app.criarProduto()
    expect(listaProdutos.children.length).toBeGreaterThan(0)
  })
  // RESULTADO DO TESTE: FAIL ❌

})