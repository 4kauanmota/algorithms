// .splice(start, quantity to splice, elements to add)


const array = [1, 2, 3, 4];


array.splice(1, 1, 8);
console.log(array);
/*
 __________________
|  RESULT 1        |
|------------------|
| * [1, 8, 3, 4]   |
|__________________|

*/


array.splice(array.length, 0, 5);
console.log(array);
/*
 ___________________
|  RESULT 2         |
|-------------------|
| * [1, 8, 3, 4, 5] |
|___________________|

*/


array.splice(-1, 1, 8);
console.log(array);
/*
 ___________________
|  RESULT 3         |
|-------------------|
| * [1, 8, 3, 4, 8] |
|___________________|

*/


array.splice(array.length, 0, 9, 10, 11);
console.log(array);
/*
 ______________________________
|  RESULT 4                    |
|------------------------------|
| * [1, 8, 3, 4, 8, 9, 10, 11] |
|______________________________|

*/