/*
  Only students who have attended enough classes are eligible to sit an exam.

  Create a function which:
  - Accepts an array which contains all the students' names and their attendance counts

  - Returns an array containing only the names of the who have attended AT LEAST 8 classes. (bigger than 8)
*/
const attendances = [
  ["Ahmed", 8],
  ["Clement", 10],
  ["Elamin", 6],
  ["Adam", 7],
  ["Tayoa", 11],
  ["Nina", 10]
]

// function examOk(arr) 
//  console.log(attendances[0][1]);
//  console.log(attendances[1][1]);
//  console.log(attendances[2][1]);
//  console.log(attendances[3][1]);
//  console.log(attendances[4][1]);
//  console.log(attendances[5][1]);

const exam = attendances.filter(element => element[1]>7);
console.log(exam);

// const exam = attendances.filter(element => *[1] > 7 )  



// function examOk(arr) {
//   let exam = [];
//   for(i = 0; i<arr.length; i++){
//     if (arr[i][1] > 7 ) {
//       exam.push(arr[i]);
//     } 
//    }
//     return exam;
// }
  
// console.log(examOk(attendances));


