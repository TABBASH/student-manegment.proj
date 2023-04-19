import { AddStudent } from "./addstudent.js";
import { SearchStudent } from "./searchstudent.js";
import { RemoveStudent } from "./deletestudent.js";
import { Clock } from "./time.js";

let newclock = new Clock();


let addStudentBtn = document.getElementById("addStudentBtn");
let searchStudentBtn = document.getElementById("searchStudentBtn");
let removeStudentBtn = document.getElementById("removeStudentBtn");



let setListener = (element, type, handler) => {
  if (!element) {
    return;
  }

  element.addEventListener(type, handler);
  return () => {
    element.removeEventListener(type, handler);
  };
}

setListener(addStudentBtn, "click", () => {
  let addStudent1 = new AddStudent();
  addStudent1.addStudent();
});

setListener(removeStudentBtn, "click", () => {
  let removeStudent1 = new RemoveStudent();
  removeStudent1.removeStudent();
});

setListener(searchStudentBtn, "click", () => {
  let searchStudent1 = new SearchStudent();
  searchStudent1.searchStudent();
});


// let addStudent1 = new AddStudent();
// let searchStudent1 = new SearchStudent();
// let removeStudent1 = new RemoveStudent();

// document.onload = () => {
//   let newclock = new Clock();

// let addStudentBtn = document.getElementById("addStudentBtn");
// addStudentBtn.addEventListener("click", function() {
//   let addStudent1 = new AddStudent();
//   addStudent1.addStudent();
// });
// }

// document.onload = () =>{
// let removeStudentBtn = document.getElementById("removeStudentBtn");
// removeStudentBtn.addEventListener("click", function() {
//     let removeStudent1 = new RemoveStudent();
//     removeStudent1.removeStudent(); 
//   });
// }

// document.onload = () =>{
//   let searchStudentBtn = document.getElementById("searchStudentBtn");
//   searchStudentBtn.addEventListener("click", function() {
//     let searchStudent1 = new SearchStudent();
//     searchStudent1.searchStudent();
//       });
//     }

// addStudentBtn.addEventListener("click", addStudent1.addStudent);
// searchStudentBtn.addEventListener("click", searchStudent1.searchStudent);
//  removeStudentBtn.addEventListener("click", removeStudent1.removeStudent);




// let addStudentBtn = document.getElementById("addStudentBtn");
// addStudentBtn.addEventListener("click", function() {
//   let addStudent1 = new AddStudent();
//   addStudent1.addStudent();
// });


// let removeStudentBtn = document.getElementById("removeStudentBtn");
// removeStudentBtn.addEventListener("click", function() {
//     let removeStudent1 = new RemoveStudent();
//     removeStudent1.removeStudent(); 
//   });

//   let searchStudentBtn = document.getElementById("searchStudentBtn");
//   searchStudentBtn.addEventListener("click", function() {
//     let searchStudent1 = new SearchStudent();
//     searchStudent1.searchStudent();
//       });


