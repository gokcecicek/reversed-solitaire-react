import { getCardRank } from "../components/DragDrop/CardSelection";

//Card rank test
const cardRank = "A";

describe("Returns card rank", () => {
    it('should return rank of card', () => {
        let rank = getCardRank(cardRank);
        expect(rank).toEqual("13");
    });
});