import LoginPage from '../pageObjects/loginPage';
import { generateTestData } from '../utils/generateTestData';
import resolutions from '../fixtures/resolutions.json';
import testData from '../fixtures/testData.json';
import { loanPageSelectors as sel } from '../support/selectors'; // Importação dos seletores

describe('Validação da página Meus Empréstimos', () => {
  resolutions.resolutions.forEach((resolution) => {
    context(`Testes na resolução ${resolution.id}`, () => {
      let dynamicData;

      beforeEach(() => {
        cy.viewport(resolution.width, resolution.height);
        LoginPage.openPage();
        dynamicData = generateTestData();
      });

      afterEach(() => {
        // Limpa cookies e armazenamento local apenas para o domínio principal
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.log('Limpeza concluída no domínio principal.');
      });

      it('CT01 - Validar conteúdo inicial da página', () => {
        LoginPage.validarConteudoInicial(testData);
        cy.screenshot(`conteudo-inicial-${resolution.id}`);
      });

      it('CT02 - Validar mensagem de erro para CPF inválido', () => {
        LoginPage.preencherCpf('99999999999');
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
        LoginPage.clicarAcessar();
        LoginPage.validarMensagemErro(testData.invalidCpfError);
        cy.screenshot(`erro-cpf-dinamico-${resolution.id}`);
      });

      it('CT05 - Validar link para Central de Ajuda', () => {
        // Verifica se o link está visível e contém o texto correto
        cy.get(sel.helpCenterLink)
          .should('be.visible')
          .and('contain.text', 'Central de Ajuda');

        // Valida se o link redireciona para o URL esperado
        cy.get(sel.helpCenterLink)
          .should('have.attr', 'href', 'https://picpay.com/canais-de-atendimento');

        // Captura um screenshot para documentação
        cy.screenshot(`pagina-central-ajuda-${resolution.id}`);
      });
    });
  });
});