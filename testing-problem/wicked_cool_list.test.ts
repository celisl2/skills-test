const exp = require("constants");
const { WickedCoolList } = require("./WickedCoolList");

describe("a wicked cool list", () => {

    test('can get second to last string in simple case', () => {
        const wickedCoolList = new WickedCoolList(["Gnu", "Lion", "Zebra", "Gazelle"]);
        const secondLargest = wickedCoolList.getSecondBiggestElement();
        expect(secondLargest).toEqual("Lion");
    })

})