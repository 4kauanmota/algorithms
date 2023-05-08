// .slice(start, end)


let array = [1, 2, 3, 4];


array.slice(1, 3);
console.log(array);
/*
 __________________
|  RESULT 1        |
|------------------|
| * [1, 2, 3, 4]   |
|__________________|

*/


const copyArray = array.slice(1)
console.log(copyArray);
/*
 _____________
|  RESULT 2   |
|------- -----|
| * [2, 3, 4] |
|_____________|

*/


const copyArray2 = array.slice(1, 3);
console.log(copyArray2);
/*
 ___________
|  RESULT 3 |
|-----------|
| * [2, 3]  |
|___________|

*/