/// <reference types="cypress" />

import BasePage from "./BasePage";
const basePage = new BasePage;

const userLogin = "#ap_email";//#ap_custumer_name
let msgErro = "#auth-error-message-box > div > h4";
let btnContinuar = "#continue";
let msgBranco = "#auth-email-missing-alert > div > div";
let password = "#ap_password";
let btnLogar = "#signInSubmit";
let btnCriarConta = "#createAccountSubmit";

const emailInvalido = "hahaha";
const telefoneInvalido = "-1";
const msgTelefoneInvalido = "Número de telefone incorreto";
const msgEmailInvalido = "Houve um problema";
const msgUserVazio = "Digite seu e-mail ou número de telefone celular";

export default class LoginPage{

    preencherEmailInvalido() {
        basePage.preencherInput(userLogin, emailInvalido);
    }

    preencherTelefoneInvalido() {
        basePage.preencherInput(userLogin, telefoneInvalido);
    }

    clicarNoBtnContinuar() {
        basePage.click(btnContinuar);
    }

    validarMsgEmailInvalido() {
        basePage.validarText(msgErro, msgEmailInvalido);
    }

    validarMsgTelefoneInvalido() {
        basePage.validarText(msgErro, msgTelefoneInvalido);
    }

    validarMsgUserVazio() {
        basePage.validarText(msgBranco, msgUserVazio);
    }

    preencherEmailValido() {
        basePage.preencherInput(userLogin, '');
    }

    preencherTelefoneValido() {
        basePage.preencherInput(userLogin, '');
    }

    preencherSenhaValido() {
        basePage.preencherInput(password, '');
    }

    clicarNoBtnLogar() {
        basePage.click(btnLogar);
    }

    validarLogin() {
        basePage.validarUrl("ref=nav_ya_signin")
    }

    clicarNoBtnCriarConta() {
        basePage.click(btnCriarConta);
    }
}