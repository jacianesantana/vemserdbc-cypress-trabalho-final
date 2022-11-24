Feature: Login

#    Scenario:  Validar action "ENTRAR"
#         Given que estou na página Home
#         When clico no botão 'Faça seu login'
#         Then devo ser redirecionado para a página de Fazer Login

   Scenario:  Validar login com email com sucesso
        Given que estou na página Home
        When clico no botão 'Faça seu login'
        And preencho campo com email válido
        When clico no botão 'Continuar'
        And preencho campo com senha válido
        When clico no botão 'Fazer login'
        Then devo estar logado no sistema e visualizar mensagem de boas vindas

   Scenario:  Validar login com número de telefone com sucesso
        Given que estou na página Home
        When clico no botão 'Faça seu login'
        And preencho campo com número de telefone válido
        When clico no botão 'Continuar'
        And preencho campo com senha válido
        When clico no botão 'Fazer login'
        Then devo estar logado no sistema e visualizar mensagem de boas vindas

#    Scenario:  Validar tentativa de login com email inválido
#         Given que estou na página Home
#         When clico no botão 'Faça seu login'
#         And preencho campo com email inválido
#         When clico no botão 'Continuar'
#         Then devo receber mensagem de erro padrão 'Não encontramos uma conta associada a este endereço de e-mail'

#    Scenario:  Validar tentativa de login com número de telefone inválido
#         Given que estou na página Home
#         When clico no botão 'Faça seu login'
#         And preencho campo com um número de telefone inválido
#         When clico no botão 'Continuar'
#         Then devo receber mensagem padrao de erro 'Número de telefone incorreto'

#    Scenario:  Validar tentativa de login sem preencher campo
#         Given que estou na página Home
#         When clico no botão 'Faça seu login'
#         And não preencho campo
#         When clico no botão 'Continuar'
#         Then devo receber mensagem padrão de erro 'Digite seu e-mail ou número de telefone celular'
