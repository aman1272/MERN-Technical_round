//    Q.1. Read the local directory and list all file names in it using JS.

const path = require('path');
const fs = require('fs');
const directoryPath = path.join(__dirname, 'Documents');
fs.readdir(directoryPath, function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    files.forEach(function (file) {
        console.log(file); 
    });
});

//    Q.2- Given these 2 schemas, loop thru each student and show its time entries.

// Import the necessary models
const WorksnapsTimeEntry = require('path/to/WorksnapsTimeEntry/model');
const Student = require('path/to/Student/model');

// Find all students
Student.find({}, (err, students) => {
  if (err) {
    console.error(err);
    return;
  }

  students.forEach((student) => {
    WorksnapsTimeEntry.find({ student: student._id }, (err, timeEntries) => {
      if (err) {
        console.error(err);
        return;
      }

      // Show the time entries for the current student
      console.log(`Time entries for ${student.displayName}:`);
      console.log(timeEntries);
    });
  });
});


//     Q.3. Design a web page using react/html/css/js:

//        This Question available in React App

//     Q.4. Write a program in JS to check whether a number is prime or not?


function isPrime(num) {
    if (num==null) {
    alert("Please Enter any Number in the Function Parameter");
  }
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
// if the number is prime then the function will return true otherwise will return false
console.log(isPrime(13))


//      Q.5.Write a program to display Right Angle Triangle pattern 


let str=""; 
for(let i = 7 ; i>=1 ; i--){
  for(let j = 1 ; j<=i ; j++ ){
    if(i===1||i===7){
      str+="*"
    }
        else{
    if(j===1||j===i){
      str += "*"
    }
    else {str += " "}
    }
  }
  str += "\n"
}
console.log(str)






