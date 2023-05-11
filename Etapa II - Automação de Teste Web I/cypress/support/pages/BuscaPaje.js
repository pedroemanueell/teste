class BuscaPage {
    
    inputCep(cep) {
        cy.get('input[id="endereco"]')
            .type(cep)
    }

    clickButtonBuscar() {
        cy.get('button[id="btn_pesquisar"]')
            .click()
    }

    validarCep() {
        cy.get('td[data-th="CEP"]')
            .should('have.text', '69005-040')
    }

    validarRua() {
        cy.xpath('//*[text()="Lojas Bemol"]')
            .should('be.visible')
    }
}
export default new BuscaPage()

