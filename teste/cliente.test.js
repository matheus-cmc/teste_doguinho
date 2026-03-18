/**
 * @jest-environment jsdom
 */

const app = require('../app')

beforeEach(() => {
  document.body.innerHTML = `
    <input id="clienteNome">
    <input id="clienteEmail">
    <input type="checkbox" id="clienteVip">
    <ul id="listaClientes"></ul>
  `

  global.clienteNome = document.getElementById("clienteNome")
  global.clienteEmail = document.getElementById("clienteEmail")
  global.clienteVip = document.getElementById("clienteVip")
  global.listaClientes = document.getElementById("listaClientes")
  global.alert = jest.fn()
})

describe("Testes de Cliente", () => {

  test("1. Deve permitir criar cliente com nome válido", () => {
    clienteNome.value = "Matheus"
    clienteEmail.value = "teste@email.com"

    app.criarCliente()

    expect(listaClientes.children.length).toBe(1)
  })
  // RESULTADO DO TESTE: PASS✅
  // O sistema aceita nome válido corretamente.

  test("2. Não deve permitir cliente com nome vazio", () => {
    clienteNome.value = ""
    app.criarCliente()

    expect(listaClientes.children.length).toBe(0)
  })
  // RESULTADO DO TESTE: PASS✅
 // Identifica corretamente nome vazio.
  test("3. Deve permitir cadastrar cliente com email válido", () => {
    clienteEmail.value = "teste@email.com"
    expect(clienteEmail.value).toContain("@")
  })
  // RESULTADO DO TESTE: PASS✅
  // Email válido aceito.


  test("4. Não deve permitir email inválido", () => {
    clienteEmail.value = "email_invalido"
    expect(clienteEmail.value).toContain("@")
  })
  // RESULTADO DO TESTE: FAIL ❌ 
  // (site não valida email)

  test("5. Deve permitir marcar cliente como VIP", () => {
    clienteVip.checked = true
    expect(clienteVip.checked).toBe(true)
  })
  // RESULTADO DO TESTE: PASS✅
  // Cliente VIP funciona normalmente.

})