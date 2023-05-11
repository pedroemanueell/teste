import BuscaPage from "../support/pages/BuscaPaje"

it('Validar busca por cep', function(){
    cy.visit('https://buscacepinter.correios.com.br/app/endereco/index.php')
    BuscaPage.inputCep('69005-040')
    BuscaPage.clickButtonBuscar()
    cy.wait(2000)
    BuscaPage.validarCep()
})


it('Validar busca por npme', function(){
    cy.visit('https://buscacepinter.correios.com.br/app/endereco/index.php')
    BuscaPage.inputCep('Lojas Bemol')
    BuscaPage.clickButtonBuscar()
    cy.wait(2000)
    BuscaPage.validarRua()
})