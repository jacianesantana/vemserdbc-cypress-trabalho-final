Feature: Cadastro

    Scenario: Validar cadastro com email com sucesso
        Given que estou na página Home
        And clico em Fazer Login
        And clico em Criar sua conta da Amazon
        And preencho todos os campos válidos e email válido
        When clico no botão Continuar
        Then devo ser redirecionado para a página de Verificação de Email

    Scenario: Validar cadastro com telefone com sucesso
        Given que estou na página Home
        And clico em Fazer Login
        And clico em Criar sua conta da Amazon
        And preencho todos os campos válidos e telefone válido
        When clico no botão Continuar
        Then devo ser redirecionado para a página de Verificação de Email

    Scenario: Validar tentativa de cadastro sem preencher campos obrigatórios
        Given que estou na página Home
        And clico em Fazer Login
        And clico em Criar sua conta da Amazon
        And não preencho campos obrigatórios
        When clico no botão Continuar
        Then devo visualizar mensagens de erro padrão

    Scenario: Validar tentativa de cadastro com senhas diferentes
        Given que estou na página Home
        And clico em Fazer Login
        And clico em Criar sua conta da Amazon
        And preencho campo confirmação de senha diferente de campo senha
        When clico no botão Continuar
        Then devo visualizar mensagem de erro padrão 'As senhas não são iguais'

    Scenario: Validar tentativa de cadastro sem preencher confirmação de senha
        Given que estou na página Home
        And clico em Fazer Login
        And clico em Criar sua conta da Amazon
        And não preencho campo confirmação de senha
        When clico no botão Continuar
        Then devo visualizar mensagem de erro padrão 'Digite sua senha novamente'

    Scenario: Validar tentativa de cadastro com email inválido
        Given que estou na página Home
        And clico em Fazer Login
        And clico em Criar sua conta da Amazon
        And E preencho campo com email inválido
        When clico no botão Continuar
        Then devo visualizar mensagem de erro padrão 'Endereço de e-mail ou número de telefone celular inválido.'

    Scenario: Validar tentativa de cadastro com número de telefone inválido
        Given que estou na página Home
        And clico em Fazer Login
        And clico em Criar sua conta da Amazon
        And preencho campo com número de telefone inválido
        When clico no botão Continuar
        Then devo visualizar mensagem de erro padrão 'Endereço de e-mail ou número de telefone celular inválido.'
