class LoginPage {

    getUserNameInput(){
        return cy.get("#user-name");
    }

    getPasswordInput(){
        return cy.get("#password");
    }

    getLoginButton(){
        return cy.get('#login-button');
    }   

    standardLogin(){
        this.getUserNameInput().type(Cypress.env("userName"))
        this.getPasswordInput().type(Cypress.env("password"))
        this.getLoginButton().click()
    }
}

export default LoginPage;