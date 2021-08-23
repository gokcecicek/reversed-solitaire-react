const HEROKU_SOLITAIRE_URL = 'https://solitaire-beril-gokce-cicek.herokuapp.com/';

before(() => {
    cy.visit(HEROKU_SOLITAIRE_URL);
});

describe('Website home test', () => {
    it('should return website title', () => {
      cy.title().should('include', 'Trendyol Reversed Solitaire');
    });

    it('should return label of score', () => {
        cy.get('.header-center label').should('contain', 'Score');
    });

    it('should return label of move', () => {
        cy.get('.timer label').should('contain', 'Timer');
    });

    it('should return label of time', () => {
        cy.get('.header-left label').should('contain', 'Moves');
    });

    it('should return label of restart button', () => {
        cy.get('.restart-btn > strong').should('contain', 'NEW GAME');
    });

});

describe('Restart button test', () => {
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
    it('should return popup when hover on icon', () => {
        cy.get('.tooltiptext').should('have.css', 'visibility','hidden');

        cy.get('.tooltip').trigger('mouseover').then(popup => {
            if(popup.is(':visible')){
                assert.isOk('popup','Popup is works');
            }
        });
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

    it('should stock card disappear after 5 clicks', () => {
        for(let i=0; i < 4; i++){
            cy.get('#stockCard').click();
        }
        cy.get('#stockCard').should('have.length', 0);
        cy.get('.header-left label').should('contain', '5');
    });
});

describe("Foundation test", () => {
    it("should return number of foundation holder", () => {
        cy.get('.foundation').children().should('have.length', 8);
    });
});

describe("Tableau test", () => {
    it("should return number of sets are on the table", () => {
        cy.get('.tableau-container').children().should('have.length', 10);
    });
});
