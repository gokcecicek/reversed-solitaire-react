import { CheckSelectedCardMove, CheckTargetRank } from "../components/DragDrop/Move";

//Checks whether the card/cards is movable test
const card = {isClosed: false, rank: "10"};

const movableDeck = [
    {isClosed: true, rank: "K"},
    {isClosed: false, rank: "10"},
    {isClosed: false, rank: "J"}
];

describe("Checks whether the cards is movable", () => {
    it('should return true if cards movable', () => {
        let isMovable = CheckSelectedCardMove(card, movableDeck);
        expect(isMovable).toEqual(true);
    });
});

//Checks whether the selected card can be placed on the desired target test
const targetCard = {rank: "2"};
const notTargetCard = {rank: "A"};
const table = {selectedCard: {rank: "3"}};

describe("Checks target card is suitable or not to be put on", () => {
    it('should return true if target card is suitable', () => {
        let targetIsFit = CheckTargetRank(targetCard, table);
        expect(targetIsFit).toBe(true);
    });

    it('should return false if target card is not suitable', () => {
        let targetNotFit = CheckTargetRank(notTargetCard, table);
        expect(targetNotFit).toBe(false);
    });
});
