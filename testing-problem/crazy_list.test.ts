const exp = require("constants");
const { CrazyList } = require("./CrazyListSolved");

describe("crazy list", () => {

    test('can get second to last string in simple case', () => {
        const crazyList = new CrazyList(["Gnu", "Lion", "Zebra", "Gazelle"]);
        const secondLargest = crazyList.getSecondBiggestElement();
        expect(secondLargest).toEqual("Lion");
    })

})