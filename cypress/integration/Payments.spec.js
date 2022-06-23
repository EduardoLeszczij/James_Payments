/// <reference types='cypress' />

import pay from '../Pages/Payments'

describe("MVP automação", () => {

    var user = {
        email: 'appmoment01@gmail.com',
        password: 'admin@123'
    }

    it('Primeiro teste', () => {
        pay.acess();
    });

    
})