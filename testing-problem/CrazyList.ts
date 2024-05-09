
export class CrazyList<T> {
    innerList:[T]; 

    constructor(listElems: [T]) {
        this.innerList = listElems
    }

    getSecondBiggestElement() {
        throw new Error("Please implement this")
    }
  
  }