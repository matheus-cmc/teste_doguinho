/**
 * @jest-environment jsdom
 */

const app = require('../app')

describe("Testes de Carrinho", () => {

  test("14. Deve permitir adicionar produto ao carrinho", () => {
    let carrinho = []
    carrinho.push("Ração")

    expect(carrinho.length).toBe(1)
  })
  // RESULTADO DO TESTE: PASS

  test("15. Deve permitir remover produto do carrinho", () => {
    let carrinho = ["Ração"]
    carrinho.pop()

    expect(carrinho.length).toBe(1)
  })
  // RESULTADO DO TESTE: FAIL ❌

  test("16. Carrinho deve listar produtos", () => {
    let carrinho = ["Ração", "Brinquedo"]
    expect(carrinho.length).toBe(2)
  })
  // RESULTADO DO TESTE: PASS

  test("17. Carrinho deve calcular total", () => {
    let total = 50 + 30
    expect(total).toBe(100)
  })
  // RESULTADO DO TESTE: FAIL ❌

})