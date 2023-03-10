
////////////////////////////////////////////////


// function hash (string, arrayLength){
//     let hashedWord = 0;

//     for(let i = 0; i < string.length; i++){
//       let current = string[i].charCodeAt(0) - 96;
//       hashedWord = (hashedWord + current ) % arrayLength;
//     }
//     return hashedWord;
//   }

//   //hash('maroon',10);






class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        let index = this._hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value])
    }

    get(key) {
        let index = this._hash(key);
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1]
                }
            }
        }
        return undefined;
    }

    values() {
        let valuesArray = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!valuesArray.includes(this.keyMap[i][j][1])) {
                        valuesArray.push(this.keyMap[i][j][1])
                    }
                }
            }
        }
        return valuesArray;
    }

    keys() {
        let keyssArray = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!keyssArray.includes(this.keyMap[i][j][0])) {
                        keyssArray.push(this.keyMap[i][j][0])
                    }
                }
            }
        }
        return keyssArray;
    }



}



