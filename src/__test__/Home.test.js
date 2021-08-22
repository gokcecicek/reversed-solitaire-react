import Home from "../components/Common/Home";
import { BrowserRouter } from "react-router-dom"
import { render, screen } from '@testing-library/react';
import App from "../App";

//Home render test
const HeaderMock = () => {
    return (
    <BrowserRouter>
      <Home></Home>
    </BrowserRouter>
    );
}

const AppMock = () => {
    return(
        <BrowserRouter>
        <App></App>
        </BrowserRouter>
    )
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

describe("App render test", () => {
    it('should render app', async () => {
        render( 
            <AppMock/>
        );
        const renderedHeader = await screen.findAllByTestId(`app-testid`);
        expect(renderedHeader).toBeTruthy();
    });
});

describe("Background render test", () => {
    it('should render background', async () => {
        render( 
            <HeaderMock/>
        );
        const renderedBackground = await screen.findAllByTestId(`background-testid`);
        expect(renderedBackground).toBeTruthy();
    });
});
