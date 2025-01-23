import { loanPageSelectors as sel } from '../support/selectors';

class LoginPage {
  openPage() {
    cy.visit('/');
  }

  preencherCpf(cpf) {
    cy.get(sel.cpfField).type(cpf);
  }

  interagirComCampoCpf() {
    cy.get(sel.cpfField).click();
    cy.get('body').click();
  }

  clicarAcessar() {
    cy.get(sel.accessButton).click();
  }

  validarMensagemErro(expectedMessage) {
    cy.get(sel.errorMessage)
      .should('contain.text', expectedMessage)
      .and('be.visible');
  }

  validarConteudoInicial(testData) {
    cy.get(sel.pageTitle)
      .should('contain.text', testData.pageTitle)
      .and('be.visible');
    cy.get(sel.cpfField).should('be.visible');
    cy.get(sel.accessButton).should('be.visible');
  }

  validarLinkCentralAjuda() {
    cy.get(sel.helpCenterLink)
      .should('be.visible')
      .and('contain.text', 'Central de Ajuda')
      .and('have.attr', 'href', 'https://picpay.com/canais-de-atendimento');
  }
}

export default new LoginPage();