# PicPay Loan SRE - QA Challenge

Este repositório contém testes automatizados para o site **Meus Empréstimos** do PicPay. Os testes foram desenvolvidos utilizando o framework **Cypress**, seguindo o padrão **Page Object Model (POM)** para garantir manutenibilidade e modularidade.

## 🚀 Objetivo do Projeto

O objetivo deste projeto é validar funcionalidades críticas e interações principais na interface do site, garantindo confiabilidade e qualidade na experiência do usuário. Os cenários abrangem:

- Validação do conteúdo inicial da página.
- Teste de mensagens de erro para CPF inválido.
- Teste de erros visuais para campos obrigatórios.
- Validação de links externos (como Central de Ajuda).

---

## 📂 Estrutura do Projeto

A organização do repositório segue as boas práticas para automação de testes:

```plaintext
.
├── cypress/
│   ├── e2e/                # Testes end-to-end (arquivos .cy.js)
│   │   └── login_test.cy.js
│   ├── fixtures/           # Dados estáticos (JSON para testes)
│   │   ├── resolutions.json
│   │   └── testData.json
│   ├── pageObjects/        # Page Object Models (PO)
│   │   └── loginPage.js
│   ├── screenshots/        # Screenshots capturadas durante os testes
│   ├── support/            # Comandos customizados e configurações
│   └── utils/              # Funções utilitárias
├── .gitignore              # Ignorar arquivos desnecessários
├── cypress.config.js       # Configurações do Cypress
├── package.json            # Dependências do projeto e scripts
└── README.md               # Documentação do projeto
```

---

## 🛠️ Configuração e Execução

### Pré-requisitos

- **Node.js**: versão 16 ou superior
- Gerenciador de pacotes: `npm` ou `yarn`

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/vulgolari/picpay-loan-sre-interview-challenge.git
   ```

2. Acesse o diretório do projeto:
   ```bash
   cd picpay-loan-sre-interview-challenge
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

### Executando os Testes

- Para abrir o Cypress em modo interativo:
  ```bash
  npm run cypress:open
  ```

- Para rodar os testes em modo headless:
  ```bash
  npm run cypress:run
  ```

### Relatórios e Evidências

- **Screenshots:** Capturas de tela de cada teste são salvas automaticamente na pasta `cypress/screenshots/`.

---

## 🧪 Cenários de Teste Implementados

| Cenário                          | Descrição                                                                 |
|----------------------------------|---------------------------------------------------------------------------|
| **CT01 - Conteúdo Inicial**      | Valida o conteúdo inicial da página Meus Empréstimos.                     |
| **CT02 - CPF Inválido**          | Testa a exibição de mensagens de erro para CPF inválido.                   |
| **CT03 - Campo Obrigatório**     | Valida erros visuais quando campos obrigatórios não são preenchidos.       |
| **CT04 - CPF Gerado Dinamicamente** | Gera um CPF dinamicamente e valida mensagens de erro.                     |
| **CT05 - Link Central de Ajuda** | Valida o redirecionamento e funcionamento do link para a Central de Ajuda. |

---

## 📑 Boas Práticas Aplicadas

- **Page Object Model (POM):** Organização dos elementos e interações para facilitar a manutenção.
- **Uso de Fixtures:** Dados de teste armazenados em arquivos JSON, separados do código.
- **Resoluções Variáveis:** Testes executados em diferentes tamanhos de tela (desktop, tablet e mobile).
- **Screenshots Automáticas:** Evidências salvas automaticamente para análise de falhas.

---

## 🛠️ Ferramentas e Dependências

As principais ferramentas utilizadas no projeto:

- [Cypress](https://www.cypress.io/): Framework de testes end-to-end.
- [Node.js](https://nodejs.org/): Ambiente de execução para o JavaScript.
- [Mochawesome](https://www.npmjs.com/package/mochawesome): Gerador de relatórios de testes (opcional).

---

## 📋 Como Contribuir

1. Fork este repositório.
2. Crie uma branch para sua feature:
   ```bash
   git checkout -b feature/nova-feature
   ```
3. Faça suas alterações e adicione os commits:
   ```bash
   git commit -m "Adiciona nova funcionalidade"
   ```
4. Envie as alterações:
   ```bash
   git push origin feature/nova-feature
   ```
5. Abra um Pull Request.

---

## 📄 Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para mais informações.
