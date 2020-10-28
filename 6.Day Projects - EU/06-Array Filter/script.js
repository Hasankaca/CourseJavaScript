/*
  You are given a program that logs pairings between two students group
  It fails because the array `pairsById` can contain different values that break the program
  It is decided that array items which are not pairs should be filtered out
*/
var index = [[0, 3], [1, 2], [2, 1], null, [1], false, [3, 0], "whoops"];

var students = ["Islam", "Lesley", "Harun", "Rukmini"];
var mentors = ["Daniel", "Irina", "Mozafar", "Luke"];

for (let i = 0; i < index.length; i++ ){
  if(Array.isArray(index[i]) && index[i].length === 2) {
//    console.log(index[i]);
 
      console.log(students[index[i][0]] + ' - ' + mentors[index[i][1]]);
    }
  }



//islam-luke
//lesley - mozafar
// Harun - Irina 
// Rukmini - Daniel
