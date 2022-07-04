/// <reference types='cypress' />

import pay from '../Pages/Payments'

describe("Buscar Transação por ID Pedido/Captura", () => {

    var user = {
        email: 'appmoment01@gmail.com',
        password: 'admin@123'
    };

    const transaction = {
        pedidoId: '21347140',
        capturaId: 'esm8vegj'
    }

    it('search by pedidoId', () => {
        pay.acess(user);
        pay.searchTransactionBycapturaId(transaction);

        //pay.searchTransactionBypedidoId(transaction);

    });

    
})