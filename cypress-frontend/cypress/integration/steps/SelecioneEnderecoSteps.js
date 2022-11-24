import SelecioneEnderecoPage from "../pages/SelecioneEnderecoPage";
const selecioneEnderedoPage = new SelecioneEnderecoPage;

context('Selecione Endereco', () => {
      
    And("preencho o campo com CEP válido", () => {
        selecioneEnderedoPage.preencherCampoUmCEP();
        selecioneEnderedoPage.preencherCampoDoisCEP();
    });

    And("preencho o campo com CEP inválido", () => {
        selecioneEnderedoPage.preencherCampoUmCEP();
    });

    And("preencho o campo CEP com caracteres inválidos", () => {
        selecioneEnderedoPage.preencherCampoUmCEPInvalido();
        selecioneEnderedoPage.preencherCampoDoisCEPInvalido();
    });

    And("não preencho o campo CEP", () => {
        return true;
    });
      
    When("clico no botão Confirmar", () => {
        selecioneEnderedoPage.clicarNoBtnConfirmar();
    });

    Then("devo receber mensagem de erro padrão 'Insira um CEP válido'", () => {
        selecioneEnderedoPage.validarMsgsErroCEP();
    });

})