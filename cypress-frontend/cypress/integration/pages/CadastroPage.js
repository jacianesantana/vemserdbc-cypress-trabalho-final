/// <reference types="cypress" />

import BasePage from "./BasePage";
const basePage = new BasePage;

import { cadastro } from '../../fixtures/massa-de-dados';

let nome = "#ap_customer_name";
let textMsgErroNomeVazio = "#auth-customerName-missing-alert";
let celularOuEmail = "#ap_email";
let textMsgErroEmailOuTelefoneVazio = "#auth-email-missing-alert";
let textMsgErroEmailOuTelefoneInvalido = "#auth-email-invalid-claim-alert";
let senha = "#ap_password";
let textMsgErroSenhaVazio = "#auth-password-missing-alert";
let confirmaSenha = "#ap_password_check";
let textMsgErroConfirmaSenhaVazio = "#auth-passwordCheck-missing-alert";
let textMsgErroConfirmaSenhaInvalido = "#auth-password-mismatch-alert";
let btnContinuar = "#continue";
let textVerificaEmail = "#verification-code-form > div:nth-child(10) > div.a-row.a-spacing-small > h1";
let textCaptchaVerificaEmail = "#a-page > div > div > div > div > div.a-row.a-spacing-mini";
let btnCaptcha = "#home_children_button";

export default class CadastroPage {

    preencherNome() {
        basePage.preencherInput(nome, cadastro.nome);
    }

    preencherEmail() {
        basePage.preencherInput(celularOuEmail, cadastro.email);
    }

    preencherEmailInvalido() {
        basePage.preencherInput(celularOuEmail, cadastro.emailInvalido);
    }

    preencherTelefone() {
        basePage.preencherInput(celularOuEmail, cadastro.telefone);
    }

    preencherTelefoneInvalido() {
        basePage.preencherInput(celularOuEmail, cadastro.telefoneInvalido);
    }

    preencherSenha() {
        basePage.preencherInput(senha, cadastro.senha);
    }

    preencherConfirmaSenha() {
        basePage.preencherInput(confirmaSenha, cadastro.senha);
    }

    preencherConfirmaSenhaInvalido() {
        basePage.preencherInput(confirmaSenha, cadastro.confirmaSenha);
    }

    clicarNoBtnContinuar() {
        basePage.click(btnContinuar);
    }

    validarPaginaCadastro() {
        //basePage.validarText(textVerificaEmail, "Verificar o endereço de e-mail");
        basePage.tempo(5000);
        
        basePage.validarUrl("https://www.amazon.com.br/ap/cvf/request?arb=");
    }

    validarMsgsErroCamposVazios() {
        basePage.validarText(textMsgErroNomeVazio, "Insira seu nome");
        basePage.validarText(textMsgErroEmailOuTelefoneVazio, "Digite seu e-mail ou número de telefone celular");
        basePage.validarText(textMsgErroSenhaVazio, "Mínimo de 6 caracteres necessários");
    }

    validarMsgsErroConfirmaSenhaInvalido() {
        basePage.validarText(textMsgErroConfirmaSenhaInvalido, "As senhas não são iguais");
    }

    validarMsgsErroConfirmaSenhaVazio() {
        basePage.validarText(textMsgErroConfirmaSenhaVazio, "Digite sua senha novamente");
    }

    validarMsgsErroEmailOuTelefoneInvalido() {
        basePage.validarText(textMsgErroEmailOuTelefoneInvalido, 
            "Endereço de e-mail ou número de telefone celular errado ou inválido. Corrija e tente novamente.");
    }

}