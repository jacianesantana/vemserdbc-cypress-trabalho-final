import HomePage from "../pages/HomePage";
const homePage = new HomePage;

Given("que estou na página Home", () => {
	return true;
});
      
And("clico em Fazer Login", () => {
    homePage.clicarNoBtnInicioLogin();
});

And("clico em 'Selecione o endereço'", () => {
    homePage.clicarNoBtnSelecioneEndereco();
});

And("clico no menu Todos", () => {
    homePage.clicarNoBtnMenuTodos();
});

Then("devo visualizar o CEP informado na tela home", () => {
    homePage.validarCEPNaTela();
});

And("preencho campo search com nome válido", ()=>{
    homePage.preencherSearchBarPesquisaValida();
});

When("clico no botão pesquisar", () => {
	homePage.clicarNoBtnSearch();
});

Then("devo visualizar uma lista de produtos", () => {
	homePage.validarMsgSearchValida();
});

And("preencho campo search com caracteres inválidos", ()=>{
    homePage.preencherSearchBarPesquisaInvalida();
});

Then(/^devo visualizar uma mensagem de erro padrão: 'Nenhum resultado para'$/, () => {
	homePage.validarMsgSearchInvalida();
});

And("seleciono categoria", ()=>{
    homePage.selecionarCategoria();
});

Then(/^devo visualizar uma lista de produtos desta categoria$/, () => {
	homePage.validarMsgSearchCategoriaValida();
});

When(/^clico no botão 'Faça seu login'$/, () => {
	homePage.clicarNoBtnInicioLogin();
});

Then(/^devo ser redirecionado para a página de Fazer Login$/, () => {
	homePage.validarPageLogin();
});

And("pesquiso produto", ()=>{
    homePage.clicarProdutoTest();
});

When(/^clico no botão 'Adicionar ao carrinho'$/, () => {
	homePage.clicarNoBtnAddCarrinho();
});

Then(/^devo visualizar mensagem padrão 'Adicionado ao carrinho'$/, () => {
	homePage.validarAddCarrinho();
});

Given(/^tenho um produto adicionado no carrinho$/, () => {
	homePage.colocarProdutoCarrinho();
});

And("clico em Carrinho", ()=>{
    homePage.clicarNoBtnCarrinho();
});

When(/^clico em 'salvar para mais tarde'$/, () => {
	homePage.clicarNoBtnSalvarCompra();
});

Then(/^devo visualizar a mensagem 'Salvo para mais tarde'$/, () => {
	homePage.validarSalvarProduto();
});

When(/^clico em 'remover produto do carrinho'$/, () => {
	homePage.clicarNoBtnRemoverDoCarrinho();
});

Then(/^devo visualizar a mensagem 'Salvo para mais tarde'$/, () => {
	homePage.validarRemoverProduto();
});

When(/^clico em checkbox presente$/, () => {
	homePage.clicarNoCheckboxPresente();
});

Then(/^devo visualizar o checkbox selecionado no carrinho$/, () => {
    homePage.validarCheckbox();
});

<<<<<<< HEAD

Given("que estou na página Home", ()=>{
	homePage.validarUrlHome();
});
  
And("clico em Fazer Login", ()=>{
	homePage.clicarNoBtnInicioLogin();
});

And("clico em 'Selecione o endereço'", ()=>{
	homePage.clicarNoBtnSelecioneEndereco();
=======
And("preencho campo com email inválido", ()=>{
    ;
});

When(/^clico no botão 'Continuar'$/, () => {
	return true;
});

Then(/^devo receber mensagem de erro padrão 'Não encontramos uma conta associada a este endereço de e-mail'$/, () => {
	return true;
>>>>>>> 6c3f2bcf077dc3ad91c101da3c46332b7fac9ef5
});
