import LoginPage from "../pages/ExemploPage";
const loginPage = new LoginPage;

context('Login', () => {

    Given("que preencho o username valido", ()=>{
        loginPage.preencherUsername();
    });
      
    And("que preencho a senha valida", ()=>{
        loginPage.preencherPassword();
    });
      
    When("clico em login", ()=>{
        loginPage.clicarNoBtnLogin();
    });

    Then("devo visualizar uma mensagem de boas vindas", ()=>{
        loginPage.validarMsgLogin();
    });

    And("que preencho a senha invalida", ()=>{
        loginPage.preencherPasswordInvalido();
    });

    Then("devo visualizar uma mensagem de erro", ()=>{
        loginPage.validarMsgErroLogin();
    });

})