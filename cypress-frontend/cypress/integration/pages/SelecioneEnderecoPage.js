import BasePage from "./BasePage";
const basePage = new BasePage;

import { cep } from '../../fixtures/massa-de-dados';

let campoUmCEP = "#GLUXZipUpdateInput_0";
let campoDoisCEP = "#GLUXZipUpdateInput_1";
let btnConfirmar = "#GLUXZipUpdate";
let textCEP = "";
let textMsgErroCEP = "#GLUXZipError";

export default class SelecioneEnderecoPage {

    preencherCampoUmCEP() {
        basePage.preencherInput(campoUmCEP, cep.cepCampoUm);
    }

    preencherCampoDoisCEP() {
        basePage.preencherInput(campoDoisCEP, cep.cepCampoDois);
    }

    clicarNoBtnConfirmar() {
        basePage.click(btnConfirmar);
    }

    validarCEPNaTela() {
        basePage.validarText(textCEP, "");
    }

    validarMsgsErroCEP() {
        basePage.validarText(textMsgErroCEP, "Insira um CEP válido");
    }

}