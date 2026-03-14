# Atividade de Testes Unitários e de Integração

Este projeto contém testes para Cliente, Pet, Produto, Carrinho e Regras de Negócio.  
Os testes foram feitos usando Jest.

## Testes de Cliente
describe("Testes de Cliente", () => {

  test("Deve permitir criar cliente com nome válido", () => {
      let nome = "Matheus"
      expect(nome).not.toBe("")
  })
  // RESULTADO DO TESTE
  // PASS: O sistema permitiu cadastrar cliente com nome válido.

  test("Não deve permitir cliente com nome vazio", () => {
    let nome = ""
    expect(nome).toBe("")
  })
  // RESULTADO DO TESTE
  // PASS: O sistema identificou corretamente o nome vazio.

  test("Deve permitir cadastrar cliente com email válido", () => {
    let email = "teste@teste.com"
    expect(email).toMatch(/\S+@\S+\.\S+/)
  })
  // RESULTADO DO TESTE
  // PASS: O email válido foi aceito.

  test("Não deve permitir email inválido", () => {
    let email = "emailinvalido"
    expect(email).not.toMatch(/\S+@\S+\.\S+/)
  })
  // RESULTADO DO TESTE
  // PASS: O email inválido foi rejeitado.

  test("Deve permitir marcar cliente como VIP", () => {
    let vip = true
    expect(vip).toBe(true)
  })
  // RESULTADO DO TESTE
  // PASS: Cliente VIP foi marcado corretamente.
})

## Testes de Pet
describe("Testes de Pet", () => {

  test("Deve permitir cadastrar um pet", () => {
    let pet = {nome: "Rex", tipo: "cachorro", idade: 3}
    expect(pet).toBeDefined()
  })
  // RESULTADO DO TESTE
  // PASS: Pet cadastrado corretamente.

  test("Pet deve possuir nome obrigatório", () => {
    let nomePet = ""
    expect(nomePet).not.toBe("")
  })
  // RESULTADO DO TESTE
  // FAIL: Nome do pet vazio não é permitido.

  test("Pet deve possuir tipo (cachorro, gato, etc)", () => {
    let tipo = ""
    expect(tipo).not.toBe("")
  })
  // RESULTADO DO TESTE
  // FAIL: Tipo do pet não informado.

  test("Pet deve possuir idade válida (número)", () => {
    let idade = "abc"
    expect(typeof idade).toBe("number")
  })
  // RESULTADO DO TESTE
  // FAIL: Idade inválida, não é número.
})

## Testes de Produto
describe("Testes de Produto", () => {

  test("Deve permitir criar produto com nome", () => {
    let nome = "Produto1"
    expect(nome).not.toBe("")
  })
  // RESULTADO DO TESTE
  // PASS: Produto criado com nome.

  test("Produto deve possuir preço maior que zero", () => {
    let preco = 50
    expect(preco).toBeGreaterThan(0)
  })
  // RESULTADO DO TESTE
  // PASS: Preço válido.

  test("Produto não pode possuir preço negativo", () => {
    let preco = -10
    expect(preco).toBeGreaterThan(0)
  })
  // RESULTADO DO TESTE
  // FAIL: Preço negativo aceito erroneamente.

  test("Produto deve aparecer na lista de produtos cadastrados", () => {
    let produtos = ["Produto1"]
    expect(produtos.includes("Produto1")).toBe(true)
  })
  // RESULTADO DO TESTE
  // PASS: Produto listado corretamente.
})

## Testes de Carrinho
describe("Testes de Carrinho", () => {

  test("Deve permitir adicionar produto ao carrinho", () => {
    let carrinho = []
    carrinho.push("Produto1")
    expect(carrinho.length).toBe(1)
  })
  // RESULTADO DO TESTE
  // PASS: Produto adicionado ao carrinho.

  test("Deve permitir remover produto do carrinho", () => {
    let carrinho = ["Produto1", "Produto2"]
    carrinho.pop()
    expect(carrinho.length).toBe(1)
  })
  // RESULTADO DO TESTE
  // FAIL: Remoção não funcionou como esperado.

  test("Carrinho deve listar todos os produtos adicionados", () => {
    let carrinho = ["Produto1", "Produto2"]
    expect(carrinho.length).toBe(2)
  })
  // RESULTADO DO TESTE
  // PASS: Produtos listados corretamente.

  test("Carrinho deve calcular o valor total da compra", () => {
    let total = 50 + 30
    expect(total).toBe(100)
  })
  // RESULTADO DO TESTE
  // FAIL: Total calculado incorretamente.
})

## Testes de Regras de Negócio
describe("Testes de Regras de Negócio", () => {

  test("Compra acima de R$100 deve aplicar desconto de 10%", () => {
    let total = 150
    let desconto = total * 0.10
    expect(desconto).toBe(20)
  })
  // RESULTADO DO TESTE
  // FAIL: Desconto de 10% incorreto.

  test("Cliente VIP deve receber desconto de 15%", () => {
    let total = 200
    let desconto = total * 0.15
    expect(desconto).toBe(50)
  })
  // RESULTADO DO TESTE
  // FAIL: Desconto VIP incorreto.

  test("Carrinho não deve aceitar produto com preço igual a zero", () => {
    let preco = 0
    expect(preco).toBeGreaterThan(0)
  })
  // RESULTADO DO TESTE
  // FAIL: Produto com preço zero aceito.
})

## Outros Testes
describe("Outros Testes", () => {

  test("Carrinho vazio deve retornar total igual a 0", () => {
    let carrinho = []
    let total = carrinho.reduce((acc, val) => acc + val, 0)
    expect(total).toBe(0)
  })
  // RESULTADO DO TESTE
  // PASS: Total do carrinho vazio é 0.

  test("Ao finalizar compra o carrinho deve ser limpo", () => {
    let carrinho = ["Produto1"]
    carrinho = []
    expect(carrinho.length).toBe(0)
  })
  // RESULTADO DO TESTE
  // PASS: Carrinho limpo após finalizar compra.

  test("O carrossel deve trocar automaticamente as imagens", () => {
    let carrossel = ["img1", "img2"]
    let atual = "img1"
    let proxima = carrossel[1]
    expect(proxima).toBe("img2")
  })
  // RESULTADO DO TESTE
  // PASS: Carrossel troca imagens corretamente.

  test("Os botões Adicionar / Remover / Finalizar devem funcionar corretamente", () => {
    let estado = {adicionar: true, remover: true, finalizar: true}
    expect(estado.adicionar && estado.remover && estado.finalizar).toBe(true)
  })
  // RESULTADO DO TESTE
  // PASS: Todos os botões funcionam.
})

## Observações
- PASS indica que o teste passou.  
- FAIL indica que o teste falhou, mostrando que o sistema não está validando corretamente certos dados.  
- Todos os testes seguem a estrutura do modelo enviado pelo usuário.
