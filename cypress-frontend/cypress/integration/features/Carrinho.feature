Feature: Carrinho

    Scenario:  Validar inserção de produto no Carrinho com sucesso
        Given que estou na página Home
        And pesquiso produto
        When clico no botão 'Adicionar ao carrinho'
        Then devo visualizar mensagem padrão 'Adicionado ao carrinho'

    Scenario:  Validar link salvo para mais tarde no Carrinho com sucesso
        Given tenho um produto adicionado no carrinho
        And clico em Carrinho
        When clico em 'salvar para mais tarde'
        Then devo visualizar a mensagem 'Salvo para mais tarde'

    Scenario:  Validar exclusão de item no Carrinho com sucesso
        Given tenho um produto adicionado no carrinho
        And clico em Carrinho
        When clico em 'remover produto do carrinho'
        Then devo visualizar a mensagem 'Salvo para mais tarde'

    Scenario:  Validar checkbox no Carrinho com sucesso
        Given tenho um produto adicionado no carrinho
        And clico em Carrinho
        When clico em checkbox presente
        Then devo visualizar o checkbox selecionado no carrinho