describe("Testes de Regras de Negócio", () => {

  test("18. Desconto de 10% acima de 100", () => {
    let total = 150
    let desconto = total * 0.10

    expect(desconto).toBe(20)
  })
  // RESULTADO DO TESTE: FAIL ❌

  test("19. Cliente VIP 15%", () => {
    let total = 200
    let desconto = total * 0.15

    expect(desconto).toBe(50)
  })
  // RESULTADO DO TESTE: FAIL ❌

  test("20. Não aceitar preço zero", () => {
    let preco = 0
    expect(preco).toBeGreaterThan(0)
  })
  // RESULTADO DO TESTE: FAIL ❌

})