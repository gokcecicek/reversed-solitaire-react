import "./Foundation.scss";
import { times } from "lodash";

//When a set is completed, it is collected in this section
//8 foundation piles are needed as there are 104 cards in total
export default function Foundation() {
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

export const CompleteElement = (parentClass, restartGame) => {
    var parentElement = document.getElementsByClassName(parentClass);
    var childElement = parentElement[0].children;
    if(childElement.length > 0){
      for(let i=0; i<childElement.length; i++){
        let isFoundationFill = childElement[i].classList.contains("completed");
        if(!isFoundationFill && !restartGame) {
          return childElement[i].classList.add("completed");
        }
        else if(isFoundationFill && restartGame) {
          childElement[i].classList.remove("completed");
        }
      }
    } 
};

export const CheckAllSetCompleted = (parentCompletedClass) => {
    let parentElement = document.getElementsByClassName(parentCompletedClass);
    let completedItem = 0;
    let child = parentElement[0]?.children;
    if(child.length > 0){
      for(let i=0; i < child.length; i++){
        if(child[i].classList.contains("completed")){
          completedItem += 1;
          if(completedItem === 8){
            return true;
          }
        }
        else{
          return false;
        }
      }
    }
}