//.map (<element, index, array>, function)


const array = [1, 2, 3, 4];


array.map(x => console.log(x + 1));
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


const copyArray = array.map(x => x);
console.log(copyArray);
/*
 __________________
|  RESULT 2        |
|------------------|
| * [1, 2, 3, 4]   |
|__________________|

*/


const copyArray2 = array.map(x => x + 1);
console.log(copyArray2);
/*
 __________________
|  RESULT 3        |
|------------------|
| * [2, 3, 4, 5]   |
|__________________|

*/

const objectsArray = [{nome: 'Baam', human: false}, {nome: 'Khun', human: false}]
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