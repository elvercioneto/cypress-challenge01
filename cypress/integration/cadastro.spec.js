/// <reference types="cypress" />

let Chance = require('chance');
let chance = new Chance();



context('Cadastro', () => {
    it('Registro de novo usuário', () => {
        cy.visit('index.php');

        //clicar no sign in e validar que está na pagina de cadastro de conta
        cy.get('a.login').click();
        cy.url().should('contain', '?controller=authentication&back=my-account');

        //cadastrar email 
        cy.get('input#email_create').type(chance.email());
        cy.get('button#SubmitCreate').click();

        //inserir dados do formulario
        cy.get('input[id="id_gender1"]').check;
        cy.get('input#customer_firstname').type(chance.first());
        cy.get('input#customer_lastname').type(chance.last());
        cy.get('input#passwd').type('Secret');
        cy.get('select#days').select('6');
        cy.get('select#months').select('July');
        cy.get('select#years').select('2010');

        cy.get('input#newsletter').check();
        cy.get('input#firstname').type(chance.first())
        cy.get('input#lastname').type(chance.last())
        cy.get('input#company').type('Company Logo');
        cy.get('input#address1').type('8th Street');
        cy.get('input#city').type('Condado de Charlotte');
        cy.get('select#id_country').select('21');
        cy.get('select#id_state').select('9');
        cy.get('input#postcode').type('28271');        
        cy.get('input#phone_mobile').type('3658978452');
        cy.get('input#alias').type(chance.word())
        cy.get('button#submitAccount').click();

        
        //validar que foi redirecionado pra pagina correta
        cy.url().should('contain','http://automationpractice.com/index.php?controller=my-account');
        
        //Validar exibição do texto 'Welcome to your account'
        cy.contains('Welcome to your account')





    });
});