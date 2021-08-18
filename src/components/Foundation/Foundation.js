import "./Foundation.scss";
import { times } from "lodash";

//When a set is completed, it is collected in this section
//8 foundation piles are needed as there are 104 cards in total
function Foundation() {
    let foundations = [];
    times(8, (classProvider) => {
        foundations.push(
        <div id={`foundation-${classProvider}`} className={`foundation-container foundation-symbol-${classProvider}`}></div>
        ); 
    });

    return(
        <div className="foundation" data-testid="foundation-testid">
            {foundations}
        </div>
        );
}
export default Foundation;