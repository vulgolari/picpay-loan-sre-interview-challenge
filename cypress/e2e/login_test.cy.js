import LoginPage from '../pageObjects/loginPage';
import { generateTestData } from '../utils/generateTestData';
import resolutions from '../fixtures/resolutions.json';
import testData from '../fixtures/testData.json';

describe('Validação da página Meus Empréstimos', () => {
  resolutions.resolutions.forEach((resolution) => {
    context(`Testes na resolução ${resolution.id}`, () => {
      let dynamicData;

      beforeEach(() => {
        cy.viewport(resolution.width, resolution.height);
        LoginPage.openPage();
        cy.screenshot(`abertura-pagina-${resolution.id}`);
        dynamicData = generateTestData();
      });

      afterEach(() => {
        // Limpa cookies e armazenamento local para o domínio principal
        if (Cypress.config('baseUrl') === 'https://meus-emprestimos.picpay.com') {
          cy.clearCookies();
          cy.clearLocalStorage();
          cy.log('Limpeza concluída no domínio principal.');
        }
      
        // Executa limpeza para o domínio externo
        cy.origin('https://picpay.com', () => {
          cy.visit('/'); // Garante que o domínio externo esteja acessível
          cy.clearCookies();
          cy.clearLocalStorage();
          cy.log('Limpeza concluída no domínio externo.');
        });
      
        cy.origin('https://picpay.com', () => {
          cy.clearCookies();
          cy.clearLocalStorage();
          cy.log('Limpeza concluída no domínio externo.');
        });
      });

      it('CT01 - Validar conteúdo inicial da página', () => {
        LoginPage.validarConteudoInicial(testData);
        cy.screenshot(`conteudo-inicial-${resolution.id}`);
      });

      it('CT02 - Validar mensagem de erro para CPF inválido', () => {
        LoginPage.preencherCpf('99999999999');
        cy.screenshot(`preenchimento-cpf-invalido-${resolution.id}`);
        LoginPage.clicarAcessar();
        LoginPage.validarMensagemErro(testData.invalidCpfError);
        cy.screenshot(`erro-cpf-invalido-${resolution.id}`);
      });

      it('CT03 - Validar erro visual para campo obrigatório', () => {
        LoginPage.interagirComCampoCpf();
        LoginPage.clicarAcessar();
        LoginPage.validarMensagemErro(testData.requiredFieldError);
        cy.screenshot(`erro-campo-obrigatorio-${resolution.id}`);
      });

      it('CT04 - Validar mensagem de erro com CPF gerado dinamicamente', () => {
        LoginPage.preencherCpf(dynamicData.cpf);
        cy.screenshot(`cpf-dinamico-preenchido-${resolution.id}`);
        LoginPage.clicarAcessar();
        LoginPage.validarMensagemErro(testData.invalidCpfError);
        cy.screenshot(`erro-cpf-dinamico-${resolution.id}`);
      });

      it('CT05 - Validar link para Central de Ajuda', () => {
        LoginPage.validarLinkCentralAjuda();
        cy.screenshot(`pagina-central-ajuda-${resolution.id}`);
      });
    });
  });
});
