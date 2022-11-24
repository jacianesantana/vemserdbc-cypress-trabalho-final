Feature: Selecione Endereco

    # Scenario: Validar Selecione o Endereço com sucesso preenchendo CEP válido ---> PENDENTE
    #     Given que estou na página Home
    #     And clico em 'Selecione o endereço'
    #     And preencho o campo com CEP válido
    #     When clico no botão Confirmar
    #     Then devo visualizar o CEP informado na tela home

    # Scenario: Validar tentativa de Selecione o Endereço preenchendo campo com CEP invalido
    #     Given que estou na página Home
    #     And clico em 'Selecione o endereço'
    #     And preencho o campo com CEP inválido
    #     When clico no botão Confirmar
    #     Then devo receber mensagem de erro padrão 'Insira um CEP válido'

    Scenario: Validar tentativa de Selecione o Endereço preenchendo campo com caracteres inválidos
        Given que estou na página Home
        And clico em 'Selecione o endereço'
        And preencho o campo CEP com caracteres inválidos
        When clico no botão Confirmar
        Then devo receber mensagem de erro padrão 'Insira um CEP válido'
