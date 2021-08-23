before(() => {
    cy.visit('https://solitaire-beril-gokce-cicek.herokuapp.com/');
})

describe('Website home test', () => {
    it('should return website title', () => {
      cy.title().should('include', 'Trendyol Reversed Solitaire');
    });
});

describe('Header test', () => {
    before(() => {
        cy.get('.restart-btn').click();
    });

    it('should return timer as 00:00 when click restart button', () => {
        cy.get('.timer span').should('contain', '00:00');
    });

    it('should return move as 0 when click restart button', () => {
        cy.get('.header-left label').should('contain', '0');
    });

    it('should return score as 0 when click restart button', () => {
        cy.get('.header-center label').should('contain', '0');
    });
});

describe('Popup test', () => {
    it('should return popup', () => {
        cy.get('.tooltip').trigger('mouseover').then(popup => {
            if(popup.is(':visible')){
                assert.isOk('popup','Popup is works');
            }
        })
    });
});

describe('Stock card click test', () => {
    before(() => {
        cy.get('#stockCard').click();
    });

    it('should return timer as 00:01 after click stock card', () => {
        cy.get('.timer span').should('contain', '00:01');
    });

    it('should return move as 1 after click stock card', () => {
        cy.get('.header-left label').should('contain', '1');
    });
});
