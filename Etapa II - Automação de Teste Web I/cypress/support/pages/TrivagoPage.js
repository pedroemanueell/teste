class TrivagoPage {
    
    inputNome(nome) {
        cy.get('input[id="input-auto-complete"]')
            .type(nome)
    }

    clickButtonPesquisar() {
        cy.xpath('//*[text()="Pesquisar"]')
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
export default new TrivagoPage()