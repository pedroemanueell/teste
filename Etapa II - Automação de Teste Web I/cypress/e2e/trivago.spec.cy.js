import TrivagoPage from "../support/pages/TrivagoPage"

it('Validar busca por cidade', function(){
    cy.visit('https://www.trivago.com.br/pt-BR')
    TrivagoPage.inputNome('Manaus')
    TrivagoPage.clickButtonPesquisar()
    cy.wait(2000)
    //TrivagoPage.validarCep()
})


