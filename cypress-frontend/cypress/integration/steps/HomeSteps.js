import HomePage from "../pages/HomePage";
const homePage = new HomePage;

context('Home', () => {

    Given("que estou na página Home", ()=>{
        homePage.validarUrlHome();
    });
      
    And("clico em Fazer Login", ()=>{
        homePage.clicarNoBtnInicioLogin();
    });

    And("clico em 'Selecione o endereço'", ()=>{
        homePage.clicarNoBtnSelecioneEndereco();
    });

})