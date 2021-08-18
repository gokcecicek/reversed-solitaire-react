import { IsExpectedSet } from '../components/DragDrop/CardQueue';

const expectedPile = [
    {rank: "A"},
    {rank: "A"},
    {rank: "2"},
    {rank: "3"},
    {rank: "4"},
    {rank: "5"},
    {rank: "6"},
    {rank: "7"},
    {rank: "8"},
    {rank: "9"},
    {rank: "10"},
    {rank: "J"},
    {rank: "Q"},
    {rank: "K"},
];

const unorderedPile = [
    {rank: "A"},
    {rank: "A"},
    {rank: "2"},
    {rank: "3"},
    {rank: "5"},
    {rank: "5"},
    {rank: "6"},
    {rank: "7"},
    {rank: "9"},
    {rank: "9"},
    {rank: "10"},
    {rank: "J"},
    {rank: "Q"},
    {rank: "K"},
];

describe("Completion test of the sequential stack of cards", () => {
    it('should return remaining card pile lenght', () => {
        let remainPileLength = IsExpectedSet(expectedPile);
        expect(remainPileLength).toBe(1);
    });
});

describe("Unordered stack of cards completion test", () => {
    it('should return false if the stack of cards is out of order', () => {
        let completionSet = IsExpectedSet(unorderedPile);
        expect(completionSet).toBe(false);
    });
});