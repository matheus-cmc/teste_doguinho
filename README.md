# 🧪 Atividade de Testes Unitários e de Integração

Este projeto contém testes automatizados para um sistema de PetShop, cobrindo:

- Cliente
- Pet
- Produto
- Carrinho
- Regras de Negócio
- Outros comportamentos do sistema

Os testes foram desenvolvidos utilizando o framework **Jest**.

---

# ⚙️ Como executar o projeto

## 1. Abrir o terminal na pasta do projeto
```bash
cd caminho/do/projeto
```

## 2. Inicializar o projeto (caso ainda não tenha)
```bash
npm init -y
```

## 3. Instalar o Jest
```bash
npm install jest --save-dev
```

## 4. Rodar todos os testes
```bash
npx jest
```

## 5. Rodar com mais detalhes
```bash
npx jest --verbose
```

## 6. Rodar um teste específico
```bash
npx jest teste/cliente.test.js
```

---

# 📚 Como os testes foram feitos

Os testes foram criados com base nas regras de negócio do sistema do PetShop.

Foram utilizados dois tipos de teste:

- **Testes Unitários** → testam partes isoladas (variáveis e lógica simples)
- **Testes de Integração** → testam comportamento do sistema (quando ligado ao app.js e DOM)

Cada teste verifica se o sistema se comporta corretamente em situações reais.

---

# 🧾 RESULTADOS DOS TESTES

## ✅ Testes de Cliente

✔ PASS:
- Criar cliente com nome válido
- Nome vazio identificado
- Email válido aceito
- Email inválido rejeitado
- Cliente VIP marcado corretamente

---

## 🐶 Testes de Pet

✔ PASS:
- Cadastro de pet funcionando

❌ FAIL:
- Nome obrigatório não validado
- Tipo do pet não validado
- Idade inválida aceita

---

## 🛒 Testes de Produto

✔ PASS:
- Produto criado com nome
- Preço positivo válido
- Produto listado corretamente

❌ FAIL:
- Produto aceita preço negativo

---

## 🛍️ Testes de Carrinho

✔ PASS:
- Produto adicionado ao carrinho
- Listagem de produtos correta

❌ FAIL:
- Remoção de produto não funcionou como esperado
- Cálculo do total incorreto

---

## 📊 Testes de Regras de Negócio

❌ FAIL:
- Desconto de 10% calculado incorretamente
- Desconto VIP de 15% incorreto
- Produto com preço zero aceito

---

## ⚙️ Outros Testes

✔ PASS:
- Carrinho vazio retorna total 0
- Carrinho é limpo ao finalizar compra
- Carrossel troca imagens corretamente
- Botões funcionam corretamente

---

# 📌 Conclusão

Os testes demonstram que:

- Algumas funcionalidades do sistema estão funcionando corretamente (PASS)
- Existem falhas importantes na validação de dados e regras de negócio (FAIL)

Esses erros indicam que o sistema precisa de melhorias, principalmente em:

- Validação de entrada (nome, email, preço)
- Regras de desconto
- Controle do carrinho

---

# 🧠 Observações

- PASS → comportamento correto  
- FAIL → erro ou regra não implementada  

Os testes foram feitos conforme solicitado na atividade, cobrindo todos os cenários exigidos.