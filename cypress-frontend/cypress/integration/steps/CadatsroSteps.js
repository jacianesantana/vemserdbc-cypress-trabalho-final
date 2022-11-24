/// <reference types="cypress" />

import CadastroPage from "../pages/CadastroPage";
const cadastroPage = new CadastroPage;

context('Cadastro', () => {

    And("preencho todos os campos válidos e email válido", () => {
        cadastroPage.preencherNome();
        cadastroPage.preencherEmail();
        cadastroPage.preencherSenha();
        cadastroPage.preencherConfirmaSenha();
    });

    And("preencho todos os campos válidos e telefone válido", () => {
        cadastroPage.preencherNome();
        cadastroPage.preencherTelefone();
        cadastroPage.preencherSenha();
        cadastroPage.preencherConfirmaSenha();
    });

    And("não preencho campos obrigatórios", () => {
        return true;
    });

    And("preencho campo confirmação de senha diferente de campo senha", () => {
        cadastroPage.preencherNome();
        cadastroPage.preencherTelefone();
        cadastroPage.preencherSenha();
        cadastroPage.preencherConfirmaSenhaInvalido();
    });

    And("não preencho campo confirmação de senha", () => {
        cadastroPage.preencherNome();
        cadastroPage.preencherTelefone();
        cadastroPage.preencherSenha();
    });

    And("E preencho campo com email inválido", () => {
        cadastroPage.preencherNome();
        cadastroPage.preencherEmailInvalido();
        cadastroPage.preencherSenha();
        cadastroPage.preencherConfirmaSenha();
    });

    And("preencho campo com número de telefone inválido", () => {
        // Valida email mas não valida telefone
        // Deveria validar número de telefone e exibir mensagem de erro padrão

        cadastroPage.preencherNome();
        cadastroPage.preencherTelefoneInvalido();
        cadastroPage.preencherSenha();
        cadastroPage.preencherConfirmaSenha();
    });
      
    When("clico no botão Continuar", () => {
        cadastroPage.clicarNoBtnContinuar();
    });

    Then("devo ser redirecionado para a página de Validação", () => {
        cadastroPage.validarPaginaCadastro();
    });

    Then("devo visualizar mensagens de erro padrão", () => {
        cadastroPage.validarMsgsErroCamposVazios();
    });

    Then("devo visualizar mensagem de erro padrão 'As senhas não são iguais'", () => {
        cadastroPage.validarMsgsErroConfirmaSenhaInvalido();
    });

    Then("devo visualizar mensagem de erro padrão 'Digite sua senha novamente'", () => {
        cadastroPage.validarMsgsErroConfirmaSenhaVazio();
    });

    Then("devo visualizar mensagem de erro padrão 'Endereço de e-mail ou número de telefone celular inválido.'", () => {
        cadastroPage.validarMsgsErroEmailOuTelefoneInvalido();
    });

})