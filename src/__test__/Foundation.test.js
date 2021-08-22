import { render } from '@testing-library/react';
import Foundation from "../components/Foundation/Foundation";
import { CheckAllSetCompleted } from "../components/Foundation/Foundation";
import { CompleteElement } from "../components/Foundation/Foundation";

//Foundation test
const FoundationMock = () => {
    return(
        <Foundation></Foundation>
    )
}

describe("Check that each foundation is completed", () => {
    it('should return true if all foundation completed', async () => {
        render( 
            <FoundationMock/>
        );
        //Complete all foundation
        for(let i=0; i<8; i++) {
            CompleteElement("foundation", false);
        }
        let allCompleted = CheckAllSetCompleted("foundation");
        expect(allCompleted).toEqual(true);
    });
});

describe("Check that all foundation is not completed", () => {
    it('should return false if all foundation not completed', async () => {
        render( 
            <FoundationMock/>
        );
        let allCompleted = CheckAllSetCompleted("foundation");
        expect(allCompleted).toEqual(false);
    });
});

describe("Check completion of foundation child", () => {
    it('should return false if all foundation not completed', async () => {
        render( 
            <FoundationMock/>
        );
        CompleteElement("foundation", false);
        //Only one child completes
        expect(document.getElementsByClassName("foundation")[0].children[0].classList.contains("completed")).toEqual(true);
        expect(document.getElementsByClassName("foundation")[0].children[1].classList.contains("completed")).toEqual(false);
    });
});