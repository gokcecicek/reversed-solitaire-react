import { BrowserRouter } from "react-router-dom"
import { render, screen } from '@testing-library/react';
import Header from "../components/Common/Header";

//Header render test
const HeaderMock = () => {
    return (
    <BrowserRouter>
      <Header></Header>
    </BrowserRouter>
    );
}

describe("Header render test", () => {
    it('should render header', async () => {
        render( 
            <HeaderMock/>
        );
        const renderedHeader = await screen.findAllByTestId(`header-testid`);
        expect(renderedHeader).toBeTruthy();
    });
});