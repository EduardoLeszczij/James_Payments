class Payments{

    acess() {
        cy.visit("/");
        cy.title().should('be.equal', 'JamesPayWeb');
        cy.get('div[class="login__form"] > span')
            .should('have.text', 'Hey! Adicione seu email e senha para acessar a área logada do James Pay');
        cy.get('')
    }

}

export default new Payments;