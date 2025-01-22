# PicPay Loan SRE Interview Challenge

Este projeto consiste em uma suíte de testes automatizados para o site "Meus Empréstimos" do PicPay, desenvolvida com o framework **Cypress**. O objetivo é validar interações essenciais da interface do usuário, incluindo ações como preenchimento de formulários, validações de mensagens de erro, redirecionamentos e navegabilidade entre páginas. A implementação segue o padrão **Page Objects**, garantindo modularidade, reusabilidade e fácil manutenção do código, além de suportar múltiplas resoluções de tela para simular diferentes dispositivos.
---

## 📋 Requisitos do Projeto

1. **Teste Automatizado**:
   - Abrir o site e navegar na área não logada.
   - Preencher o formulário de cadastro.
   - Clicar no botão de login.
   - Validar redirecionamento para a tela inicial ou de erro.
   - Gerar evidências das navegações (screenshots).

2. **Estrutura de Código**:
   - Uso do padrão **Page Objects**.
   - Configuração modular e reutilizável.

3. **Resoluções de Teste**:
   - Desktop: 1920x1080.
   - Tablet: 768x1024.
   - Mobile: 375x667.

---

## 🚀 Como Configurar e Executar o Projeto

### Pré-requisitos

- **Node.js** (versão 16 ou superior).
- **NPM** ou **Yarn** instalado.

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/PicPay/picpay-loan-sre-interview-challenge.git
   cd picpay-loan-sre-interview-challenge
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

---

### Estrutura do Projeto

```plaintext
.
├── cypress
│   ├── e2e
│   │   └── login_test.cy.js      # Testes principais
│   ├── pageObjects
│   │   └── loginPage.js          # Page Object do login
│   ├── fixtures
│   │   ├── resolutions.json      # Resoluções de tela
│   │   └── testData.json         # Dados estáticos para validações
│   └── support
│       └── selectors.js          # Seletores centralizados
├── cypress.config.js             # Configuração do Cypress
├── package.json                  # Dependências e scripts
└── README.md                     # Documentação do projeto
```

---

### Configuração

Edite os arquivos de configuração, se necessário:

- **Base URL**: `cypress.config.js`
- **Resoluções de tela**: `cypress/fixtures/resolutions.json`
- **Dados estáticos**: `cypress/fixtures/testData.json`

---

### Execução

#### Modo Interativo
Para executar os testes no modo interativo:
```bash
npx cypress open
```

#### Modo Headless
Para rodar os testes automaticamente:
```bash
npx cypress run
```

---

## 📂 Testes Implementados

### Testes Funcionais (login_test.cy.js)
- **CT01**: Validar conteúdo inicial da página.
- **CT02**: Validar mensagem de erro para CPF inválido.
- **CT03**: Validar erro visual para campo obrigatório.
- **CT04**: Validar mensagem de erro com CPF gerado dinamicamente.
- **CT05**: Validar link para a Central de Ajuda.

### Page Object (`loginPage.js`)
- **Métodos**:
  - `openPage`: Abre a página inicial.
  - `preencherCpf`: Preenche o campo de CPF.
  - `interagirComCampoCpf`: Simula interação para validar campos obrigatórios.
  - `clicarAcessar`: Submete o formulário.
  - `validarMensagemErro`: Verifica mensagens de erro exibidas.
  - `validarConteudoInicial`: Valida elementos presentes na página inicial.
  - `validarLinkCentralAjuda`: Verifica redirecionamento para a Central de Ajuda.

---

## 📊 Resoluções de Tela

As seguintes resoluções foram testadas, conforme especificado em `cypress/fixtures/resolutions.json`:

| Dispositivo | Largura | Altura |
|-------------|---------|--------|
| Desktop     | 1920px  | 1080px |
| Tablet      | 768px   | 1024px |
| Mobile      | 375px   | 667px  |

---

## 📸 Evidências Geradas

Os testes geram capturas de tela para cada etapa crítica, disponíveis na pasta:
```
cypress/screenshots/
```

---

## 🛠️ Ferramentas e Frameworks

- **Cypress**: Framework principal para automação.
- **JavaScript**: Linguagem utilizada.
- **Node.js**: Ambiente de execução.

---

## 📝 Considerações

- O projeto utiliza o padrão Page Objects para melhorar a organização e a reutilização do código.
- Todos os cenários são projetados para serem independentes, garantindo maior estabilidade durante a execução.