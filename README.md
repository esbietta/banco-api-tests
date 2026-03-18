# Banco API Tests

# Objetivo

Este projeto contém a automação de testes para a Banco API.
O propósito é validar os principais endpoints da API REST, contribuindo para a qualidade das operações.
------------------------------------------------------------------------

# Stack Utilizada

As seguintes tecnologias e bibliotecas foram utilizadas neste projeto:

-   **Node.js**
-   **Mocha**
-   **Chai**
-   **Supertest**
-   **Mochawesome**
-   **dotenv**

------------------------------------------------------------------------

# Estrutura de Diretórios

    banco-api-tests
    │
    ├── test
    │   ├── login.test.js
    │   └── transferencia.test.js
    │
    ├── mochawesome-report
    │
    ├── .env
    ├── package.json
    ├── package-lock.json
    └── README.md

### Descrição dos Diretórios

**test/**\
Contém os arquivos de testes automatizados da API.

-   `login.test.js` → testes relacionados ao endpoint de autenticação.
-   `transferencia.test.js` → testes relacionados às operações de
    transferência bancária.

**mochawesome-report/**\
Diretório onde são gerados os **relatórios HTML** após a execução dos
testes.

**.env**\
Arquivo responsável por armazenar variáveis de ambiente utilizadas nos
testes.

------------------------------------------------------------------------

# Configuração do Arquivo `.env`

Antes de executar os testes é necessário criar um arquivo chamado
**.env** na raiz do projeto.

Exemplo:

    BASE_URL=http://localhost:3000

### Descrição da variável

**BASE_URL**

Define a URL base onde a API está sendo executada.

Antes de executar os testes, certifique-se de que a **API Banco API
esteja rodando localmente**.

------------------------------------------------------------------------

# Instalação do Projeto

Clone o repositório:

``` bash
git clone https://github.com/esbietta/banco-api-tests.git
```

Acesse o diretório:

``` bash
cd banco-api-tests
```

Instale as dependências:

``` bash
npm install
```

------------------------------------------------------------------------

# Execução dos Testes

Execute os testes com:

``` bash
npm test
```

Este comando executará todos os testes localizados no diretório
**test**.

------------------------------------------------------------------------

# Geração de Relatórios de Teste

O projeto utiliza **Mochawesome** para gerar relatórios detalhados da
execução dos testes.

Após executar os testes, será criado um relatório em **HTML** no
diretório:

    mochawesome-report/

Para visualizar o relatório:

    mochawesome-report/mochawesome.html

O relatório apresenta:

-   lista de testes executados
-   testes aprovados e falhados
-   tempo de execução
-   detalhes das validações realizadas

------------------------------------------------------------------------

# Documentação das Dependências

Node.js\
https://nodejs.org/

Mocha\
https://mochajs.org/

Chai\
https://www.chaijs.com/

Supertest\
https://github.com/ladjs/supertest

Mochawesome\
https://github.com/adamgruber/mochawesome

dotenv\
https://github.com/motdotla/dotenv

------------------------------------------------------------------------

# Autor

Projeto desenvolvido como prática de **Automação de Testes de API REST
com JavaScript**.

Repositório:\
https://github.com/esbietta/banco-api-tests
