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
        let allFoundationDone = checkAllSetCompleted("foundation");
        expect(allFoundationDone).toEqual(true);
    });
});
