import Card from "../components/Cards/Card"
import { BrowserRouter } from "react-router-dom"
import { render, screen } from '@testing-library/react';
import { GetCardRank } from "../components/DragDrop/CardSelection";
import CardHolder from "../components/Cards/CardHolder";

//Card render test
const cards = [
    {rank: "A", suit: ["spade"], isClosed: true, deck: 0, isSelected: false},
    {rank: "A", suit: ["spade"], isClosed: false, deck: 0, isSelected: true}
]

const CardMock = (card) => {
    return (
        <BrowserRouter>
            <Card 
            key={card.rank + " " + card.suit + " " + card.deck} 
            card={card} 
            isSelected={card.isSelected} 
            isClosed={card.isClosed}></Card>
        </BrowserRouter>
    );
}

describe("Card render test", () => {
    it('should render card', async () => {
        cards.forEach((card) => {
            render( 
                <CardMock/>
            );
        });
        const renderedCard = await screen.findAllByTestId(`card-testid`);
        expect(renderedCard).toBeTruthy();
    });
});

//Card rank test
const cardRank = "A";

describe("Returns card rank", () => {
    it('should return rank of card', () => {
        let rank = GetCardRank(cardRank);
        expect(rank).toEqual("13");
    });
});

//Card holder render test
const HolderMock = () => {
    return (
    <BrowserRouter>
      <CardHolder></CardHolder>
    </BrowserRouter>
    );
}

describe("Header render test", () => {
    it('should render header', async () => {
        render( 
            <HolderMock/>
        );
        const renderedHolder = await screen.findAllByTestId(`holder-testid`);
        expect(renderedHolder).toBeTruthy();
    });
});