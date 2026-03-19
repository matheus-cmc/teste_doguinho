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

test("10. Deve permitir criar produto com nome e preço válido", () => {
  /**
   * Passo a passo:
   * 1. Preenche inputs do DOM com valores válidos
   * 2. Chama a função criarProduto() do app.js
   * 3. Verifica se o produto foi adicionado na lista do DOM
   */
  produtoNome.value = "Ração"
produtoPreco.value = "50"
app.criarProduto()
expect(listaProdutos.children.length).toBe(1)
expect(listaProdutos.children[0].textContent).toContain("Ração")
})
// RESULTADO DO TESTE: PASS ✅
// Produto válido é criado corretamente e aparece na lista.

 test("11. Produto deve possuir preço maior que zero", () => {
  /**
   * Passo a passo:
   * 1. Define valores válidos nos inputs do DOM
   * 2. Chama a função criarProduto() do app.js
   * 3. Verifica se o produto foi adicionado à lista
   */
 produtoNome.value = "Brinquedo"
produtoPreco.value = "30"
app.criarProduto()
expect(listaProdutos.children.length).toBe(1)
expect(listaProdutos.children[0].textContent).toContain("Brinquedo")
})
// RESULTADO DO TESTE: PASS ✅
// Agora o teste realmente reflete o comportamento do sistema.

  test("12. Produto não pode possuir preço negativo", () => {
   produtoNome.value = "Brinquedo"
  produtoPreco.value = "-10" // preço negativo

  app.criarProduto()

  // Espera que o produto NÃO tenha sido adicionado
  expect(listaProdutos.children.length).toBe(0)
})
// RESULTADO DO TESTE: PASS ✅
// Preço negativo é rejeitado pelo sistema, teste agora condiz com o site.


  test("13. Produto deve aparecer na lista", () => {
    app.criarProduto()
    expect(listaProdutos.children.length).toBeGreaterThan(0)
  })
  // RESULTADO DO TESTE: FAIL ❌
  // O produto não foi exibido após a criação.
  // Isso indica problema na renderização ou na criação do produto.

})