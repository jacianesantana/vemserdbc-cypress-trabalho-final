import MenuTodosPage from "../pages/MenuTodosPage";
const menuTodosPage = new MenuTodosPage;

context('Menu Todos', () => {
      
    When("clico em Mais Vendidos", () => {
        menuTodosPage.clicarNoBtnMaisVendidos();
    });

    Then("devo ser redirecionado para a página de Mais Vendidos", () => {
        menuTodosPage.validarPaginaMaisVendidos();
    });

    When("clico em Novidades na Amazon", () => {
        menuTodosPage.clicarNoBtnNovidades();
    });

    Then("devo ser redirecionado para a página de Novidades na Amazon", () => {
        menuTodosPage.validarPaginaNovidades();
    });

    When("clico em Produtos em alta", () => {
        menuTodosPage.clicarNoBtnProdudosEmAlta();
    });

    Then("devo ser redirecionado para a página de Produtos em alta", () => {
        menuTodosPage.validarPaginaProdutosEmAlta();
    });

    And("clico em Amazon Fire TV", () => {
        menuTodosPage.clicarNoBtnConteudoDigital();
    });

    When("clico em Fire Tv Stick Lite", () => {
        menuTodosPage.clicarNoBtnItemConteudoDigital();
    });

    Then("devo ser redirecionado para a página do produto escolhido", () => {
        menuTodosPage.validarPaginaItemConteudoDigital();
    });

    And("clico em Alimentos e Bebidas", () => {
        menuTodosPage.clicarNoBtnCategoria();
    });

    When("clico em Café e outras Bebidas", () => {
        menuTodosPage.clicarNoBtnSubcategoria();
    });

    Then("devo ser redirecionado para a página da categoria escolhida", () => {
        menuTodosPage.validarPaginaFiltroSubcategoria();
    });

    When("clico em Amazon Prime", () => {
        menuTodosPage.clicarNoBtnPrograma();
    });

    Then("devo ser redirecionado para a página do programa escolhido", () => {
        menuTodosPage.validarPaginaPrograma();
    });

    When("clico em Ajuda", () => {
        menuTodosPage.clicarNoBtnAjuda();
    });

    Then("devo ser redirecionado para a página de Ajuda", () => {
        menuTodosPage.validarPaginaAjuda();
    });

})