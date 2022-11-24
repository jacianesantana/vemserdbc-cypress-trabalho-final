Feature: Search

#    Scenario:  Validar Search com sucesso
#         Given que estou na página Home
#         And preencho campo search com nome válido
#         When clico no botão pesquisar
#         Then devo visualizar uma lista de produtos

   Scenario:  Validar Search selecionando categoria com sucesso
        Given que estou na página Home
        And seleciono categoria
        And preencho campo search com nome válido
        When clico no botão pesquisar
        Then devo visualizar uma lista de produtos desta categoria

#    Scenario:  Validar tentativa de Search preenchendo com nome inválido
#         Given que estou na página Home
#         And preencho campo search com caracteres inválidos
#         When clico no botão pesquisar
#         Then devo visualizar uma mensagem de erro padrão: 'Nenhum resultado para'