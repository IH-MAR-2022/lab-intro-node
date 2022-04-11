class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    // this.length++
    this.length = this.items.length;

    this.items.sort(function (a, b) {
      return a - b;
    });
  }

  get(pos) {
    if (pos >= this.length) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if (this.length < 1) {
      throw new Error("EmptySortedList");
    }
    // return Math.max(...this.items)
    return this.items[this.length - 1];
  }

  min() {
    if (this.length < 1) {
      throw new Error("EmptySortedList");
    }
    // return Math.min(...this.items)
    return this.items[0];
  }

  sum() {
    return this.items.reduce(function (total, nextVal) {
      return total + nextVal;
    }, 0);
  }

  avg() {
    if (this.length < 1) {
      throw new Error("EmptySortedList");
    }
    return this.sum() / this.length;
  }
}

module.exports = SortedList;
