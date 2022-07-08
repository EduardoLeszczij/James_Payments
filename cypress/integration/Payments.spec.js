/// <reference types='cypress' />

import pay from '../Pages/Payments'

const period = {
    days: '27'
}

const statusCode = {
    status: ' Paga '
}

describe("Buscar Transação por ID Pedido/Captura", () => {

    var user = {
        email: 'appmoment01@gmail.com',
        password: 'admin@123'
    };

    const transaction = {
        pedidoId: '21347155',
        capturaId: 'af3sa1e2'
    }

    it('search by pedidoId', () => {
        pay.acess(user);
        pay.searchTransactionBypedidoId(transaction);

    });

    it('serach by capturaId', () => {
        pay.acess(user);
        pay.searchTransactionBycapturaId(transaction);

    });

    it.only('Download File Export By Period', () => {
        
        pay.acess(user);
        pay.searchByPeriod(period, statusCode);
        pay.exportFile();
        pay.logout();
    });

    function clean() {
        afterEach(function(){
            cy.get('div[class="calendar__wrapper"]').click();
            cy.get('[data-testid="btn-clear-calendar"]').click();
            cy.get('[idbutton="btn-apply-calendar"]')
            .shadow()
            .find('[data-testid="btn-apply-calendar"]')
            .click({force: true});        
        })   
    }

    it('search by period', () => {

        pay.acess(user);
        pay.searchByPeriod(period, statusCode);
        pay.clean();
        
    });
})