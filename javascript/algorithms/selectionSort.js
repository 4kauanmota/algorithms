function findSmallestIndex(array){
    let smallestIndex = 0;

    for(let i = 1; i < array.length; i++) if(array[i] < array[smallestIndex]) smallestIndex = i;

    return smallestIndex;
}

function selectionSort(array){
    let ordenedArray = [];

    for(let i = array.length; i > 0; i--) ordenedArray.push(array.splice(findSmallestIndex(array), 1)[0]);

    return ordenedArray;
}

console.log(selectionSort([5, 3, 6, 2, 10, 1]));
/*
 __________________________________________
|  RESULT 1                                |
|------------------------------------------|
| * [1, 2, 3, 5, 6, 10]                    |
|__________________________________________|

*/