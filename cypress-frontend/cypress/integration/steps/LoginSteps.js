import LoginPage from "../pages/LoginPage";
const loginPage = new LoginPage;

<<<<<<< HEAD
And("preencho campo com email inválido", ()=>{
    loginPage.preencherEmailInvalido();
});

When(/^clico no botão 'Continuar'$/, () => {
	loginPage.clicarNoBtnContinuar();
});

Then(/^devo receber mensagem de erro padrão 'Não encontramos uma conta associada a este endereço de e-mail'$/, () => {
	loginPage.validarMsgEmailInvalido();
});

And("preencho campo com um número de telefone inválido", ()=>{
    loginPage.preencherTelefoneInvalido();
});

Then(/^devo receber mensagem padrao de erro 'Número de telefone incorreto'$/, () => {
	loginPage.validarMsgTelefoneInvalido();
});

And("não preencho campo", ()=>{
    return true;
});

Then(/^devo receber mensagem padrão de erro 'Digite seu e-mail ou número de telefone celular'$/, () => {
	loginPage.validarMsgUserVazio();
});

And("preencho campo com email válido", ()=>{
    loginPage.preencherEmailValido();
});

And("preencho campo com senha válido", ()=>{
    loginPage.preencherSenhaValido();
});

When(/^clico no botão 'Fazer login'$/, () => {
	loginPage.clicarNoBtnLogar();
});

Then(/^devo estar logado no sistema e visualizar mensagem de boas vindas$/, () => {
	loginPage.validarLogin();
});

And("preencho campo com número de telefone válido", ()=>{
    loginPage.preencherTelefoneValido();
});
=======
context('Login', () => {
      
    And("clico em Criar sua conta da Amazon", () => {
        loginPage.clicarNoBtnCriarConta();
    });

})
>>>>>>> 6c3f2bcf077dc3ad91c101da3c46332b7fac9ef5
