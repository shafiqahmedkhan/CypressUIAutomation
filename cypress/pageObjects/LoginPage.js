class LoginPage{

    getUsername(){
        return cy.get('#user-name')
    }

    getPassword(){
        return cy.get('#password')
    }

    getLoginButton(){
        return cy.get('#login-button')
    }

    login(username, password){
        this.getUsername().clear
        this.getUsername().type(username)
        this.getPassword().clear
        this.getPassword().type(password)
        this.getLoginButton().click()
    }

}

export default LoginPage;