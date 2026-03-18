/**
 * @jest-environment jsdom
 */

const app = require('../app')

beforeEach(() => {
  document.body.innerHTML = `
    <input id="petNome">
    <input id="petTipo">
    <input id="petIdade">
    <ul id="listaPets"></ul>
  `

  global.petNome = document.getElementById("petNome")
  global.petTipo = document.getElementById("petTipo")
  global.petIdade = document.getElementById("petIdade")
  global.listaPets = document.getElementById("listaPets")
})

describe("Testes de Pet", () => {

  test("6. Deve permitir cadastrar um pet", () => {
    petNome.value = "Rex"
    petTipo.value = "cachorro"
    petIdade.value = "5"

    app.cadastrarPet()

    expect(listaPets.children.length).toBe(1)
  })
  // RESULTADO DO TESTE: PASS

  test("7. Pet deve possuir nome obrigatório", () => {
    petNome.value = ""
    expect(petNome.value).not.toBe("")
  })
  // RESULTADO DO TESTE: FAIL ❌

  test("8. Pet deve possuir tipo", () => {
    petTipo.value = "cachorro"
    expect(petTipo.value).not.toBe("")
  })
  // RESULTADO DO TESTE: PASS

  test("9. Pet deve possuir idade válida (número)", () => {
    let idade = "abc"
    expect(typeof idade).toBe("number")
  })
  // RESULTADO DO TESTE: FAIL ❌

})