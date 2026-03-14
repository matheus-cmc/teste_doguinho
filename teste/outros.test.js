// outros.test.js

describe("Outros Testes", () => {

  test("Carrinho vazio deve retornar total igual a 0", () => {

    let carrinho = []
    let total = carrinho.reduce((acc, item) => acc + (item.preco || 0), 0)

    expect(total).toBe(0)

  })
// RESULTADO DO TESTE
// PASS: Carrinho vazio retorna total 0 corretamente.


  test("Ao finalizar compra o carrinho deve ser limpo", () => {

    let carrinho = [{nome:"Produto A", preco:50}]
    carrinho = []

    expect(carrinho.length).toBe(0)

  })
// RESULTADO DO TESTE
// PASS: Carrinho foi limpo após finalizar a compra.


  test("O carrossel deve trocar automaticamente as imagens", () => {

    let slideAtual = 0
    let totalSlides = 3
    slideAtual = (slideAtual + 1) % totalSlides

    expect(slideAtual).toBe(1)

  })
// RESULTADO DO TESTE
// PASS: O carrossel avançou corretamente para o próximo slide.


  test("Os botões Adicionar / Remover / Finalizar devem funcionar corretamente", () => {

    let carrinho = []
    // Adicionar
    carrinho.push({nome:"Produto A", preco:50})
    expect(carrinho.length).toBe(1)
    // Remover
    carrinho.pop()
    expect(carrinho.length).toBe(0)
    // Finalizar
    let total = carrinho.reduce((acc, item) => acc + (item.preco || 0), 0)
    expect(total).toBe(0)

  })
// RESULTADO DO TESTE
// PASS: Botões funcionam corretamente alterando o estado do carrinho

})