/// <reference types="cypress" />

import BasePage from "./BasePage";
const basePage = new BasePage;

import { cep } from '../../fixtures/massa-de-dados';

let campoUmCEP = "#GLUXZipUpdateInput_0";
let campoDoisCEP = "#GLUXZipUpdateInput_1";
let btnConfirmar = "#GLUXZipUpdate";
let textMsgErroCEP = "#GLUXZipError";

export default class SelecioneEnderecoPage {

    preencherCampoUmCEP() {
        basePage.tempo(5000);
        basePage.preencherInput(campoUmCEP, cep.cepCampoUm);
    }

    preencherCampoUmCEPInvalido() {
        basePage.tempo(5000);
        basePage.preencherInput(campoUmCEP, cep.cepCampoUmInvalido);
    }

    preencherCampoDoisCEP() {
        basePage.preencherInput(campoDoisCEP, cep.cepCampoDois);
    }

    preencherCampoDoisCEPInvalido() {
        basePage.preencherInput(campoDoisCEP, cep.cepCampoDoisInvalido);
    }

    clicarNoBtnConfirmar() {
        basePage.tempo(5000);
        basePage.click(btnConfirmar);
    }

    validarMsgsErroCEP() {
        basePage.validarText(textMsgErroCEP, "Insira um CEP válido");
    }

}