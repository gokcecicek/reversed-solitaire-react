import Foundation from "../components/Foundation/Foundation";
import { render } from '@testing-library/react';
import { checkAllSetCompleted } from "../components/Foundation/Foundation";
import { CompleteElement } from "../components/Foundation/Foundation";

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
        let allCompleted = checkAllSetCompleted("foundation");
        expect(allCompleted).toEqual(true);
    });
});

describe("Check that all foundation is not completed", () => {
    it('should return false if all foundation not completed', async () => {
        render( 
            <FoundationMock/>
        );
        let allCompleted = checkAllSetCompleted("foundation");
        expect(allCompleted).toEqual(false);
    });
});
