// .map(callback)


const array = [1, 2, 3, 4];


array.map(element => console.log(element + 1));
/*
 ____________
|  RESULT 1  |
|------------|
| * 2        |
| * 3        |
| * 4        |
| * 5        |
|____________|

*/


console.log(array)
/*
 _________________
|  RESULT 1.5     |
|-----------------|
| * [1, 2, 3, 4]  |
|_________________|
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


const objectsArray = [{nome: 'Baam', human: false}, {nome: 'Khun', human: false}];
objectsArray.map(x => x.human = true);
console.log(objectsArray);
/*
 ____________________
|  RESULT 4          |
|--------------------|
| *[                 |
|  {                 |
|    "nome": "Baam", |
|    "human": true   |
|  },                | 
|  {                 |
|    "nome": "Khun", |
|    "human": true   |
|  }                 |
|  ]                 |
|____________________|
*/