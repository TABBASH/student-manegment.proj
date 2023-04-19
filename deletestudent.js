export class RemoveStudent {
  constructor() {
    this.removeStudent = () => {

      let id = document.getElementById("delete-id").value;



      let studentList = JSON.parse(localStorage.getItem("students")) || [];
      let filteredList = studentList.filter((student) => student.id !== id);

      if (studentList.length === filteredList.length) {
        document.getElementById("removemsg").innerText = "Student not found!";

      } else {
        localStorage.setItem("students", JSON.stringify(filteredList));

        document.getElementById("removemsg").innerText = "Student removed successfully!";


      }

      document.getElementById("delete-id").value = "";


    };
  }
}




// let removeStudentBtn = document.getElementById("removeStudentBtn");
// removeStudentBtn.addEventListener("click", function() {
//     let removeStudent1 = new RemoveStudent();
//     removeStudent1.removeStudent();
//   });





