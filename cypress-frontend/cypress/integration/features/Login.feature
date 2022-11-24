Feature: Login

#    Scenario:  Validar action "ENTRAR"
#         Given que estou na página Home
#         When clico no botão 'Faça seu login'
#         Then devo ser redirecionado para a página de Fazer Login

#    Scenario:  Validar login com email com sucesso
#         Given que estou na página Home
#         When clico no botão 'Faça seu login'
#         And preencho campo com email válido
#         And preencho campo com senha válido
#         When clico no botão 'Fazer login'
#         Then devo estar logado no sistema e visualizar mensagem de boas vindas

#    Scenario:  Validar login com número de telefone com sucesso
#         Given que estou na página Home
#         When clico no botão 'Faça seu login'
#         And preencho campo com número de telefone válido
#         And preencho campo com senha válido
#         When clico no botão 'Fazer login'
#         Then devo estar logado no sistema e visualizar mensagem de boas vindas

   Scenario:  Validar tentativa de login com email inválido
        Given que estou na página Home
        When clico no botão 'Faça seu login'
        And preencho campo com email inválido
        When clico no botão 'Continuar'
        Then devo receber mensagem de erro padrão 'Não encontramos uma conta associada a este endereço de e-mail'

#    Scenario:  Validar tentativa de login com número de telefone inválido
#         Given que estou na página Home
#         When clico no botão 'Faça seu login'
#         And preencho campo com número de telefone inválido
#         When clico no botão 'Continuar'
#         Then devo receber mensagem de erro padrão 'Número de telefone incorreto'