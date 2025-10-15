# Exercício Prático: Automação do Fluxo de Login no Site de Compras

## Site Escolhido:
https://www.demoblaze.com/

---

## Objetivo do Teste:
Validar o fluxo de login de um usuário (sucesso e falha).

---

## Decisão da Ferramenta:
Optamos por usar **Cypress** por sua facilidade de uso, excelente documentação e a capacidade de rodar testes de ponta a ponta de forma estável.  
Além disso, ele se integra bem com o ecossistema JavaScript, o que facilita o desenvolvimento e a manutenção.

---

## Casos de Teste (Cenários):

### Login com sucesso:
Acessar a página de login, preencher com credenciais válidas e verificar se o usuário é redirecionado para a página inicial com o nome de usuário exibido.

### Login com falha (senha incorreta):
Acessar a página de login, preencher com senha incorreta e verificar se a mensagem de erro é exibida.

### Login com falha (campos vazios):
Clicar em "login" sem preencher os campos e verificar se o alerta de erro é exibido.

---

## Critérios de Sucesso:
- Todos os cenários de teste devem passar.  
- A execução dos testes deve ser integrada ao pipeline de CI/CD (futuramente).

---

## Recursos Necessários:
- Node.js  
- Cypress  
- VS Code

---

## Diagrama:
<img width="541" height="174" alt="image" src="https://github.com/user-attachments/assets/68137e37-15ed-424a-84a6-25e6bd6ac3d9" />

<img width="652" height="609" alt="image" src="https://github.com/user-attachments/assets/a1a90834-36ab-4262-974a-2d03b2194714" />



