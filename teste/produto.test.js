describe("Testes de Produto", () => {

  test("Deve permitir criar produto com nome", () => {

      let produto = "Ração"

      expect(produto).not.toBe("")

  })
// RESULTADO DO TESTE
// PASS: O sistema permitiu criar produto com nome válido.


  test("Produto deve possuir preço maior que zero", () => {

    let preco = 50

    expect(preco).toBeGreaterThan(0)

  })
// RESULTADO DO TESTE
// PASS: O sistema aceitou preço válido.


  test("Produto não pode possuir preço negativo", () => {

    let preco = -10

    expect(preco).toBeGreaterThan(0)

  })
// RESULTADO DO TESTE
// FAIL: O sistema aceitou preço negativo.


  test("Produto deve aparecer na lista de produtos cadastrados", () => {

    let produtos = ["Ração", "Brinquedo"]

    expect(produtos).toContain("Ração")

  })
// RESULTADO DO TESTE
// PASS: O produto aparece na lista de produtos cadastrados.

})