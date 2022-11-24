/// <reference types="cypress" />

import BasePage from "./BasePage";
const basePage = new BasePage;

let btnMaisVendidos = "#hmenu-content > ul.hmenu.hmenu-visible > li:nth-child(2) > a";
let btnNovidades = "#hmenu-content > ul.hmenu.hmenu-visible > li:nth-child(3) > a";
let btnProdutosEmAlta = "#hmenu-content > ul.hmenu.hmenu-visible > li:nth-child(4) > a";
let textValidate = "#zg_banner_text";
let btnConteudoDigital = "#hmenu-content > ul.hmenu.hmenu-visible > li:nth-child(7) > a";
let btnItemConteudoDigital = "#hmenu-content > ul.hmenu.hmenu-visible.hmenu-translateX > li:nth-child(3) > a";
let textValidateConteudoDigital = "#productTitle";
let btnCategoria = "#hmenu-content > ul.hmenu.hmenu-visible > li:nth-child(15) > a";
let btnSubcategoria = "#hmenu-content > ul.hmenu.hmenu-visible.hmenu-translateX > li:nth-child(4) > a";
let textValidateSubcategoria = "#a-page > div.a-container > div.a-row.apb-browse-two-col-center-pad > div.a-column.a-span12.aok-float-right.apb-browse-col-pad-left.apb-browse-two-col-center-margin-right > div:nth-child(1) > div > h1 > b";
let btnPrograma = "#hmenu-content > ul.hmenu.hmenu-visible > li:nth-child(24) > a";
let textValidatePrograma = "#primeDetailPage > p";
let btnAjuda = "#hmenu-content > ul.hmenu.hmenu-visible > li:nth-child(32) > a";
let textValidateAjuda = "#a-page > div:nth-child(30) > div.a-section.a-spacing-extra-large.a-spacing-top-extra-large.ss-landing-container";

export default class MenuTodosPage {

    clicarNoBtnMaisVendidos() {
        basePage.tempo(5000);
        basePage.click(btnMaisVendidos);
    }

    validarPaginaMaisVendidos() {
        basePage.validarText(textValidate, "Mais vendidos");
        basePage.validarUrl("https://www.amazon.com.br/gp/bestsellers/?ref_=");
    }

    clicarNoBtnNovidades() {
        basePage.tempo(5000);
        basePage.click(btnNovidades);
    }

    validarPaginaNovidades() {
        basePage.validarText(textValidate, "Novidades na Amazon");
        basePage.validarUrl("https://www.amazon.com.br/gp/new-releases/?ref_=");
    }

    clicarNoBtnProdudosEmAlta() {
        basePage.tempo(5000);
        basePage.click(btnProdutosEmAlta);
    } 

    validarPaginaProdutosEmAlta() {
        basePage.validarText(textValidate, "Produtos em alta");
        basePage.validarUrl("https://www.amazon.com.br/gp/movers-and-shakers/?ref_=");
    }

    clicarNoBtnConteudoDigital() {
        basePage.tempo(5000);
        basePage.click(btnConteudoDigital);
    }

    clicarNoBtnItemConteudoDigital() {
        basePage.click(btnItemConteudoDigital);
    } 

    validarPaginaItemConteudoDigital() {
        basePage.validarText(textValidateConteudoDigital, "Fire TV Stick Lite");
        basePage.validarUrl("https://www.amazon.com.br/dp/B091G767YB?ref_=");
    }

    clicarNoBtnCategoria() {
        basePage.tempo(5000);
        basePage.click(btnCategoria);
    }

    clicarNoBtnSubcategoria() {
        basePage.click(btnSubcategoria);
    } 

    validarPaginaFiltroSubcategoria() {
        basePage.validarText(textValidateSubcategoria, "Café, Chá e outras Bebidas");
        basePage.validarUrl("https://www.amazon.com.br/gp/browse.html?node=19778001011&ref_=");
    }

    clicarNoBtnPrograma() {
        basePage.tempo(5000);
        basePage.click(btnPrograma);
    }

    validarPaginaPrograma() {
        basePage.validarText(textValidatePrograma, "Ainda mais motivos para amar o Amazon Prime:");
        basePage.validarUrl("https://www.amazon.com.br/prime?ref_=");
    }

    clicarNoBtnAjuda() {
        basePage.tempo(5000);
        basePage.click(btnAjuda);
    }

    validarPaginaAjuda() {
        basePage.validarText(textValidateAjuda, "Olá. Como podemos ajudar você?");
        basePage.validarUrl("https://www.amazon.com.br/gp/help/customer/display.html?nodeId=508510&ref_=");
    }

}
