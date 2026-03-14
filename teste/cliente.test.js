describe("Testes de Regras de Negócio", () => {

  test("Compra acima de R$100 deve aplicar desconto de 10%", () => {

      let total = 150
      let desconto = total * 0.10

      expect(desconto).toBe(20)

  })
// RESULTADO DO TESTE
// FAIL: O desconto de 10% não foi aplicado corretamente.


  test("Cliente VIP deve receber desconto de 15%", () => {

    let total = 200
    let desconto = total * 0.15

    expect(desconto).toBe(50)

  })
// RESULTADO DO TESTE
// FAIL: O desconto VIP não está correto.


  test("Carrinho não deve aceitar produto com preço igual a zero", () => {

    let preco = 0

    expect(preco).toBeGreaterThan(0)

  })
// RESULTADO DO TESTE
// FAIL: O sistema aceitou produto com preço zero.

})