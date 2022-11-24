import LoginPage from "../pages/LoginPage";
const loginPage = new LoginPage;

context('Login', () => {
      
    And("clico em Criar sua conta da Amazon", () => {
        loginPage.clicarNoBtnCriarConta();
    });

})