class Item {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Array {
    constructor() {
        this.items = null;
    }

    push(data) {
        if (this.items == null) {
            this.items = new Item(data);
        } else {
            let tempItems = this.items;
            while (tempItems.next != null) {
                tempItems = tempItems.next;
            }
            tempItems.next = new Item(data);
        }
    }

    toArray() {
        let numbers = [];
        let tempItems = this.items;
        while (tempItems != null) {
            numbers.push(tempItems.data);
            tempItems = tempItems.next;
        }
        return numbers;
    }

    whileEach(cb) {
        let numbers = this.toArray();
        let index = 0;
        let tempItems = this.items;
        while (tempItems != null) {
            cb(tempItems.data, index++, numbers);
            tempItems = tempItems.next;
        }
    }

    transform(cb) {
        let tempItems = this.items;
        let result = [];
        while (tempItems != null) {
            result.push(cb(tempItems.data));
            tempItems = tempItems.next;
        }
        return result;
    }
}

module.exports = Array;