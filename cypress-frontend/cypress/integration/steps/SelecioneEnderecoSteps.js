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
      
    When("clico no botão Confirmar", () => {
        selecioneEnderedoPage.clicarNoBtnConfirmar();
    });

    Then("devo visualizar o CEP informado na tela home", () => {
        selecioneEnderedoPage.validarCEPNaTela();
    });

    Then("devo receber mensagem de erro padrão 'Insira um CEP válido'", () => {
        selecioneEnderedoPage.validarMsgsErroCEP();
    });

})