class Sorter {
  constructor() {
    this.arr = [];
    this.compareFunction = (a, b) => a - b;
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }
 
  sort(indices) {
    const helpArr = indices.map(el => this.arr[el]).sort(this.compareFunction);
    indices.sort().forEach((el, i) => {
      this.arr[el] = helpArr[i];
    });
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;