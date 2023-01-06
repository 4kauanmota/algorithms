// EN
// the map method runs through the array (that is, it doesn't change the original array that called the method)
// you can return the same elements from this array to create a copy
// you can return the elements with some modification 
// you can even use it to display the elements of the array (but for that case there's another, more appropriate method)

// PT
// o metódo map percorre o array (ou seja, não altera o array original que chamou o metódo)
// você pode retornar os mesmos elementos desse array para criar uma cópia
// pode retornar os elementos com alguma modificação 
// até pode usar para apresentar os elementos do array (mas para esse caso tem outro metódo mais apropriado)


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
| * [2, 4, 8, 12]  |
|__________________|

*/


const copyArray2 = array.map(element => element + 1);
console.log(copyArray2);
/*
 __________________
|  RESULT 3        |
|------------------|
| * [3, 5, 6, 7]   |
|__________________|

*/