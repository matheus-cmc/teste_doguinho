describe("Testes de Carrinho", () => {

  test("Deve permitir adicionar produto ao carrinho", () => {

      let carrinho = ["Ração"]

      expect(carrinho).toContain("Ração")

  })
// RESULTADO DO TESTE
// PASS: O sistema permitiu adicionar produto ao carrinho.


  test("Deve permitir remover produto do carrinho", () => {

    let carrinho = ["Ração"]

    carrinho.pop()

    expect(carrinho.length).toBe(1)

  })
// RESULTADO DO TESTE
// FAIL: O produto não foi removido corretamente do carrinho.


  test("Carrinho deve listar todos os produtos adicionados", () => {

    let carrinho = ["Ração", "Brinquedo"]

    expect(carrinho.length).toBe(2)

  })
// RESULTADO DO TESTE
// PASS: O carrinho lista corretamente os produtos.


  test("Carrinho deve calcular o valor total da compra", () => {

    let total = 50 + 30

    expect(total).toBe(100)

  })
// RESULTADO DO TESTE
// FAIL: O cálculo do total da compra está incorreto.

})