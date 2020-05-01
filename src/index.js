'use strict'

const fibonacci = () => {
    let sequence = [0, 1, 1]

    while (true) {
        const length = sequence.length - 1;
        sequence.push(sequence[length - 1] + sequence[length])
        if (sequence[length] > 350) {
            break;
        }
    }
    return sequence;
}

const isFibonnaci = (num) => {
    const sequence = fibonacci()
    for (let i in sequence) {
        if (sequence[i] == num) {
            return true;
        }
    }

    return false;
}

// console.log(isFibonnaci())
module.exports = {
    fibonacci,
    isFibonnaci
}
