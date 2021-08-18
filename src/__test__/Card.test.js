import { BrowserRouter } from "react-router-dom"
import Card from "../components/Cards/Card"
import { render, screen } from '@testing-library/react';

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