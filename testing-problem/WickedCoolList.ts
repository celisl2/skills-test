
export class WickedCoolList<T> {
    innerList:[T];
    secondBiggestElementIndex: number;

    constructor(listElems: [T]) {
        this.innerList = listElems
        this.secondBiggestElementIndex = 1;
    }

    getSecondBiggestElement() {
        return this.innerList.at(this.secondBiggestElementIndex);
    }
  }