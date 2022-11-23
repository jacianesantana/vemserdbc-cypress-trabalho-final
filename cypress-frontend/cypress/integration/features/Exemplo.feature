Feature: Login

    Scenario: Validar login com sucesso
        Given que preencho o username valido
        And que preencho a senha valida
        When clico em login
        Then devo visualizar uma mensagem de boas vindas

    Scenario: Validar tentativa de login com senha errada
        Given que preencho o username valido
        And que preencho a senha invalida
        When clico em login
        Then devo visualizar uma mensagem de erro
