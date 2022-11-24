import BasePage from "./BasePage";
const basePage = new BasePage;

let searchBar = "#twotabsearchtextbox";
let btnSearch = "#nav-search-submit-button";
let resultSearch = "#search > span > div > h1 > div > div.sg-col-14-of-20.sg-col.s-breadcrumb.sg-col-10-of-16.sg-col-6-of-12 > div > div";
let resultSearchErro = "#search > div.s-desktop-width-max.s-desktop-content.s-opposite-dir.s-wide-grid-style.sg-row > div.sg-col-20-of-24.s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16 > div > span.rush-component.s-latency-cf-section > div.s-main-slot.s-result-list.s-search-results.sg-row > div.a-section.a-spacing-none.s-result-item.s-flex-full-width.s-border-bottom-none.s-widget.s-widget-spacing-medium > div > div > div > div:nth-child(1) > span:nth-child(2)";
let btnInicioLogin = "#nav-link-accountList";
let btnSelect = "#searchDropdownBox";
let selectCategoria = "#searchDropdownBox > option:nth-child(14)";
let categoriaValida = "#n\/16339926011 > span > span";
let btnCarrinho = "#nav-cart";
let btnSalvarCompra = ".sc-action-links > .sc-action-save-for-later > .a-declarative > .a-color-link";
let quantidadeCarrinho = "#nav-cart-count";
let checkboxPresente = ".sc-invisible-when-no-js > .a-checkbox > label > .a-label"
let produtoTest = '[data-asin="B091J3NYVF"] > .sg-col-inner > .s-widget-container > .s-card-container > .a-spacing-base > .a-spacing-micro > .s-title-instructions-style > .a-size-mini > .a-link-normal > .a-size-base-plus';
let btnAddCarrinho = "#add-to-cart-button";
let msgAddCarrinho = "#NATC_SMART_WAGON_CONF_MSG_SUCCESS > span";
let msgCarrinhoVazio = "#sc-active-cart > div > div > div > h1"
let msgRemoveItem = "#sc-item-aacfa5b5-05c5-48d9-86ac-5ad66a007b66 > div.a-section.a-spacing-none.ewc-wider-compact-view-only.ewc-item-actions > div.a-section.ewc-item-remove-msg";
let btnRemoveCompra = ".sc-action-delete > .a-declarative > .a-color-link";
let btnSelecioneEndereco = "#nav-global-location-popover-link";

const pesquisaValida = "ryzen 7";   
const pesquisaInvalida = "aoishdoiawyhrfoiqwuerphjqwlfdjqklrfjqpwore";
const msgAddCarrinhoValido = "Adicionado ao carrinho";
const msgCarrinhoVazioValido = "Seu carrinho de compras da Amazon está vazio.";
const msgRemoverProdutoValido = "foi removido de Carrinho de compras.";

export default class HomePage{

    clicarNoBtnInicioLogin() {
        basePage.click(btnInicioLogin);
    }

    validarUrlHome() {
        basePage.validarUrl("https://www.amazon.com.br/");
    }

    clicarNoBtnSearch() {
        basePage.click(btnSearch);
    }

    preencherSearchBarPesquisaValida() {
        basePage.preencherInput(searchBar, pesquisaValida);
    }

    validarMsgSearchValida() {
        basePage.validarText(resultSearch, pesquisaValida);
    }

    preencherSearchBarPesquisaInvalida() {
        basePage.preencherInput(searchBar, pesquisaInvalida);
    }

    validarMsgSearchInvalida() {
        basePage.validarText(resultSearchErro, pesquisaInvalida);
    }

    selecionarCategoria(value){
        // cy.get(btnSelect).select('Computadores e Informática');
        // cy.get('#nav-search-bar-form > div.nav-left').click();
        // basePage.select('#nav-search-bar-form > div.nav-left', 'Computadores e Informática', { force: true })
        // cy.get(btnSelect).select(14).should('have.value', 'search-alias=computers')
        // cy.get(btnSelect).click(`#search-alias=computers${value}`)
        // basePage.click(`'#searchDropdownBox > option:nth-child(14)'${value}`);
    }

    validarMsgSearchCategoriaValida() {
        basePage.validarText(resultSearch, pesquisaValida);
        basePage.validarText(categoriaValida, "Computadores e Informática")
    }

    validarPageLogin() {
        basePage.validarUrl("https://www.amazon.com.br/ap/signin")
    }

    clicarProdutoTest(){
        basePage.preencherInput(searchBar, pesquisaValida);
        basePage.click(btnSearch);
        basePage.clickForce(produtoTest);
    }

    clicarNoBtnAddCarrinho() {
        basePage.click(btnAddCarrinho);
    }

    validarAddCarrinho() {
        basePage.validarText(msgAddCarrinho, msgAddCarrinhoValido);
        basePage.validarText(quantidadeCarrinho, "1")
    }

    clicarNoBtnCarrinho() {
        basePage.click(btnCarrinho);
    }

    clicarNoBtnSalvarCompra() {
        basePage.click(btnSalvarCompra);
    }

    validarSalvarProduto() {
        basePage.validarText(msgCarrinhoVazio, msgCarrinhoVazioValido);
        basePage.validarText(quantidadeCarrinho, "0")
    }

    colocarProdutoCarrinho(){
        basePage.preencherInput(searchBar, pesquisaValida);
        basePage.click(btnSearch);
        basePage.clickForce(produtoTest);
        basePage.click(btnAddCarrinho);
    }

    clicarNoBtnRemoverDoCarrinho() {
        basePage.click(btnRemoveCompra);
    }

    validarRemoverProduto() {
        basePage.validarText(quantidadeCarrinho, "0")
        basePage.validarText(msgRemoveItem, msgRemoverProdutoValido);
    }

    clicarNoCheckboxPresente() {
        basePage.click(checkboxPresente);
    }

    validarCheckbox(){
        cy.get('.sc-invisible-when-no-js > .a-checkbox > label > input').check()
    }

    clicarNoBtnSelecioneEndereco() {
        basePage.click(btnSelecioneEndereco);
    }

}
