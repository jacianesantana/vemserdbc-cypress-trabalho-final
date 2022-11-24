import BasePage from "./BasePage";
const basePage = new BasePage;

import { cep } from '../../fixtures/massa-de-dados';

let btnInicioLogin = "#nav-link-accountList";
let btnSelecioneEndereco = "#nav-global-location-popover-link";
let btnMenuTodos = "#nav-hamburger-menu";

export default class HomePage {

    validarUrlHome() {
        basePage.validarUrl("https://www.amazon.com.br/");
    }

    clicarNoBtnInicioLogin() {
        basePage.click(btnInicioLogin);
    }

    clicarNoBtnSelecioneEndereco() {
        basePage.click(btnSelecioneEndereco);
    }

    validarCEPNaTela() {
        basePage.tempo(5000);
        basePage.validarText(btnSelecioneEndereco, cep.cep);
    }

    clicarNoBtnMenuTodos() {
        basePage.click(btnMenuTodos);
    }

}
