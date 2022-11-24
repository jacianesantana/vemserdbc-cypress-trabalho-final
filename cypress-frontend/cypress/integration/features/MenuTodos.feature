Feature: Menu Todos

    Scenario: Validar opção 'Mais Vendidos' do menu Todos com sucesso
        Given que estou na página Home
        And clico no menu Todos
        When clico em Mais Vendidos
        Then devo ser redirecionado para a página de Mais Vendidos

    Scenario: Validar opção 'Novidades na Amazon' do menu Todos com sucesso
        Given que estou na página Home
        And clico no menu Todos
        When clico em Novidades na Amazon
        Then devo ser redirecionado para a página de Novidades na Amazon

    Scenario: Validar opção 'Produtos em alta' do menu Todos com sucesso
        Given que estou na página Home
        And clico no menu Todos
        When clico em Produtos em alta
        Then devo ser redirecionado para a página de Produtos em alta

    Scenario: Validar item da opção 'Conteúdo Digital e Dispositivos' do menu Todos com sucesso
        Given que estou na página Home
        And clico no menu Todos
        And clico em Amazon Fire TV
        When clico em Fire Tv Stick Lite
        Then devo ser redirecionado para a página do produto escolhido

    Scenario: Validar item da opção 'Comprar por Categoria' do menu Todos com sucesso
        Given que estou na página Home
        And clico no menu Todos
        And clico em Alimentos e Bebidas
        When clico em Café e outras Bebidas
        Then devo ser redirecionado para a página da categoria escolhida

    Scenario: Validar item da opção 'Programas e Recursos' do menu Todos com sucesso
        Given que estou na página Home
        And clico no menu Todos
        When clico em Amazon Prime
        Then devo ser redirecionado para a página do programa escolhido

    Scenario: Validar item da opção 'Ajuda e Configurações' do menu Todos com sucesso
        Given que estou na página Home
        And clico no menu Todos
        When clico em Ajuda
        Then devo ser redirecionado para a página de Ajuda
