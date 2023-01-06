const array = [1, 2, 3, 4];


array.map(element => console.log(element + 1));
/*
 ___________
|  RESULT 1 |
|-----------|
| * 2       |
| * 3       |
| * 4       |
| * 5       |
|___________|

*/


const copyArray = array.map(element => element);
console.log(copyArray);
/*
 __________________
|  RESULT 2        |
|------------------|
| * [1, 2, 3, 4]   |
|__________________|

*/


const copyArray2 = array.map(element => element + 1);
console.log(copyArray2);
/*
 __________________
|  RESULT 3        |
|------------------|
| * [2, 3, 4, 5]   |
|__________________|

*/