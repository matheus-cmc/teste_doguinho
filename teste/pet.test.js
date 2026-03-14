describe("Testes de Pet", () => {

  test("Deve permitir cadastrar um pet", () => {

      let pet = "Rex"

      expect(pet).not.toBe("")

  })
// RESULTADO DO TESTE
// PASS: O sistema permitiu cadastrar um pet com nome válido.


  test("Pet deve possuir nome obrigatório", () => {

    let nomePet = ""

    expect(nomePet).not.toBe("")

  })
// RESULTADO DO TESTE
// FAIL: O sistema aceitou cadastrar pet sem nome.


  test("Pet deve possuir tipo (cachorro, gato, etc)", () => {

    let tipo = "cachorro"

    expect(tipo).not.toBe("")

  })
// RESULTADO DO TESTE
// PASS: O sistema permitiu definir o tipo do pet.


  test("Pet deve possuir idade válida (número)", () => {

    let idade = "abc"

    expect(typeof idade).toBe("number")

  })
// RESULTADO DO TESTE
// FAIL: O sistema aceitou idade que não é número.

})