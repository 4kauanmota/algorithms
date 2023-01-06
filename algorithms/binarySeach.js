function binarySearch(array, number){
    let low = 0, high = array.length - 1;

    while(low <= high){
        const mid = Math.floor((low + high) / 2);
        const guess = array[mid];

        if(number == guess) return mid;
        else if(number < guess) high = guess - 1;
        else low = guess + 1;
    }
}

const array = [2, 5, 36, 43, 27, 48];
const number = 36;

const result = binarySearch(array, number);
console.log(`the position of the number ${number} is ${result}`);
/*
 __________________________________________
|  RESULT 1                                |
|------------------------------------------|
| * "the position of the number 36 is 2"   |
|__________________________________________|
*/