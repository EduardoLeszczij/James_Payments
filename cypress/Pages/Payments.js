class Payments{

    acess(user) {
        cy.visit("/");
        cy.title().should('be.equal', 'JamesPayWeb');
        cy.get('div[class="login__form"] > span')
            .should('have.text', 'Hey! Adicione seu email e senha para acessar a área logada do James Pay');
        cy.get('#input-email')
            .shadow()
            .find('[data-testid="input-email"]')
            .should('be.visible')
            .type(user.email);
        cy.get('#input-password')
            .shadow()
            .find('[data-testid="input-password"]')
            .type(user.password);
        cy.get('#btn-login')
            .shadow()
            .find('[id="custom-button"]')
            .click({ force: true });
        cy.wait(3000);
        cy.get('span[id="navbar-title"]')
            .should('have.text', 'Transações');
    };

    searchTransactionBypedidoId(transaction) {
        cy.get('#input-search')
            .shadow()
            .find('[data-testid="input-search"]')
            .type(transaction.pedidoId);
        cy.get('#btn-search')
            .shadow()
            .find('[data-testid="btn-search"]')
            .click({ force: true })
            .wait(3000);
        cy.contains('tbody tr td:nth-child(2)', transaction.pedidoId)
            .should('have.text', transaction.pedidoId);
    };

    searchTransactionBycapturaId(transaction) {
        cy.get('#input-search')
            .shadow()
            .find('[data-testid="input-search"]')
            .type(transaction.capturaId);
        cy.get('#btn-search')
            .shadow()
            .find('[data-testid="btn-search"]')
            .click({ force: true })
            .wait(3000);
        cy.contains('tbody tr td:nth-child(3)', transaction.capturaId)
            .should('have.text', transaction.capturaId);
    };

    searchByPeriod(period, statusCode) {
        cy.get('div[class="calendar__wrapper"]').click();
        cy.wait(3000);
        cy.get('[idbutton="btn-previous-month"]')
            .shadow()
            .find('[data-testid="btn-previous-month"]')
            .click({ force: true });
        cy.contains('span[class="calendar__number"]', period.days)
            .click({ multiple: true });
        cy.wait(3000);
        cy.get('[idbutton="btn-apply-calendar"]')
            .shadow()
            .find('[data-testid="btn-apply-calendar"]')
            .click({ force: true });
        cy.get('tbody td:nth-child(8)')
            .should('have.text', statusCode.status);
    };

    searchSevenDaysAgo() {

        var days = '30 dias'

        if (days === "7 dias") {
            cy.get('[data-testid="period-7"]').click();
        } else if (days === "15 dias") {
            cy.get('[data-testid="period-15"]').click();
        } else if (days === "30 dias") {
            cy.get('[data-testid="period-30"]').click();
        }
    };

    exportFile() {
        cy.get('[idbutton="btn-export"]')
            .shadow()
            .find('[data-testid="btn-export"]')
            .click({ force: true });
        cy.get('div[class="download-modal__wrapper"]')
            .should('have.text', 'Downlolad realizado');
    };

    logout() {
        cy.get('div[id="div-sidebar-logout"]')
            .click()
    };

};

export default new Payments;