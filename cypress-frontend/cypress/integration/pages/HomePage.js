import BasePage from "./BasePage";
const basePage = new BasePage;

let btnInicioLogin = "#nav-link-accountList";
let btnSelecioneEndereco = "#nav-global-location-popover-link";

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

}
