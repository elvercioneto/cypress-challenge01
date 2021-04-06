 # Agilizei Bootcampo - Cypress - Módulo 1
 # Desafio 1 
Chegou a hora de exercitar mais um pouco para fixar os conceitos aprendidos até aqui.

Para isso, vamos usar um outro sistema criado para fins de teste: o automation practice.

Abaixo, segue as instruções para o desafio:

Instruções
Utilizando o site automation practice, criar um novo projeto (do zero) e configurar o projeto para implementar testes utilizando o Cypress, conforme visto até aqui. Neste primeiro desafio, você deve utilizar apenas a abordagem sem cucumber. Outras observações:

- o e-mail de cadastro deve ser diferente entre um teste e outro
- não será necessário mapear ou validar rotas
- utilizar o mochawesome como ferramenta de relatório
- subir o projeto no Github e enviar o link para correção
Cenários que devem ser implementados
- Cadastrar um novo usuário
Fluxo do cenário:
- Acessar o site automation practice http://automationpractice.com
- Clicar no botão de Sign in
- Preencher as informações de e-mail (não pode ser repetido)
- Clicar no botão Create an Account
- Preencher as informações do formulário de cadastro
- Clicar no botão Register
- Validar que foi redirecionado para a url correta
- Validar exibição do texto 'Welcome to your account'
Checklist
Para facilitar esse primeiro desafio, criei um checklist para te guiar. Espero que te ajude a não esquecer nenhum detalhe ⚡️

[ ] Criar uma nova pasta/diretório com o nome do desafio
[ ] Abrir o pasta criada no Visual Studio Code
[ ] Configurar um novo projeto node
[ ] Instalar o Cypress no projeto
[ ] Abrir o Cypress e gerar arquivos padrão
[ ] Configurar arquivo cypress.json com as opções: baseUrl, experimentalSourceRewriting e watchForFileChanges. Se quiser, pode adicionar o schema também.
[ ] Configurar o arquivo support/index para exceções indesejadas
[ ] Apagar as specs de exemplo geradas
[ ] Criar um novo arquivo de testes
[ ] Mapear os elementos necessários para interagir, sendo:
[ ] elementos da home
[ ] elementos da página de login
[ ] elementos da página de cadastro
[ ] Interagir com os elementos mapeados, navegando pela página para executar o fluxo
[ ] Instalar e configurar uma biblioteca para geração de dados fictícios
[ ] Adicionar as asserções para validar que o cadastro foi finalizado corretamente
[ ] Adicionar os scripts para execução no modo interativo e no modo headless
[ ] Conferir se o vídeo está sendo gerado corretamente
[ ] Adicionar as bibliotecas do mochawesome
[ ] Adicionar as configurações para gerar os arquivos do relatório
[ ] Adicionar os scripts para geração dos relatórios em html
[ ] Suba seu projeto no Github
[ ] Configure as actions para executar os testes
[ ] Habilite o GH Pages
[ ] Adicione a action para publicar o relatório do mochawesome
[ ] Lembre-se, para o resultado aparecer o arquivo do relatório deve ser index.html :)
[ ] Opcional: crie uma descrição beeeem bacana de seu projeto com gif, tecnologias, tags e aprendizados
