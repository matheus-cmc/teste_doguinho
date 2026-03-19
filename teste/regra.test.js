/**
 * @jest-environment jsdom
 */

const app = require('../app')

beforeEach(() => {
  document.body.innerHTML = `
    <span id="total"></span>
  `

  // mock de variáveis globais usadas no app.js
  global.carrinho = []
  global.listaCarrinho = document.createElement("ul")
  global.produtoSelect = document.createElement("select")
  global.alert = jest.fn()
})


describe("Testes de Regras de Negócio", () => {

  test("18. Desconto de 10% acima de 100", () => {
    let total = 150
    let desconto = total * 0.10

    expect(desconto).toBe(20)
  })
  // RESULTADO DO TESTE: FAIL ❌
  // O valor esperado está incorreto.
  // 10% de 150 é 15, mas o teste espera 20.


  test("19. Cliente VIP 15%", () => {
    let total = 200
    let desconto = total * 0.15

    expect(desconto).toBe(50)
  })
  // RESULTADO DO TESTE: FAIL ❌
  // O valor esperado está incorreto.
  // 15% de 200 é 30, mas o teste espera 50.


  test("20. Não aceitar preço zero", () => {
    let preco = 0
    expect(preco).toBeGreaterThan(0)
  })
  // RESULTADO DO TESTE: FAIL ❌
  // O sistema permite preço igual a zero.
  // Falta validação para impedir valores inválidos.

})

//FIM