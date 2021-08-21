import { GetCardRank } from "../components/DragDrop/CardSelection";

//Card rank test
const cardRank = "A";

describe("Returns card rank", () => {
    it('should return rank of card', () => {
        let rank = GetCardRank(cardRank);
        expect(rank).toEqual("13");
    });
});