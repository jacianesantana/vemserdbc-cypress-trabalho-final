import BasePage from "./BasePage";
const basePage = new BasePage;

let btnCriarConta = "#createAccountSubmit";

export default class LoginPage {

    clicarNoBtnCriarConta() {
        basePage.click(btnCriarConta);
    }

}