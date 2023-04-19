import { studentdetails } from "./studentdetails.js";
export class AddStudent {
  constructor() {
    this.addStudent = () => {
      let name = document.getElementById("name").value.trim();
      let surname = document.getElementById("surname").value.trim();
      let birthday = document.getElementById("birthday").value.trim();
      let id = document.getElementById("id").value.trim();
      let email = document.getElementById("email").value.trim();
      let phone = document.getElementById("phone").value.trim();
      let address = document.getElementById("address").value.trim();

      if (name === "") {
        alert("Please enter a name.");
        return;
      }

      if (surname === "") {
        alert("Please enter a surname.");
        return;
      }

      if (birthday === "") {
        alert("Please enter a birthday.");
        return;
      }

      if (id === "") {
        alert("Please enter an ID.");
        return;
      } else if (isNaN(id)) {
        alert("ID should be a number.");
        return;
      }

      if (email === "") {
        alert("Please enter an email.");
        return;
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Invalid email format.");
        return;
      }

      if (phone === "") {
        alert("Please enter a phone number.");
        return;
      } else if (isNaN(phone)) {
        alert("Phone number should be a number.");
        return;
      }

      if (address === "") {
        alert("Please enter an address.");
        return;
      }

      let newstudent = new studentdetails(name, surname, birthday, id, email, phone, address);

      let studentList = JSON.parse(localStorage.getItem("students")) || [];

      let studentExists = false;
      studentList.forEach((student) => {
        if (student.id === id) {
          studentExists = true;
        }
      });

      if (studentExists) {
        document.getElementById("msg").innerText = "This student already exists!";
      } else {
        studentList.push(newstudent);
        try {
          localStorage.setItem("students", JSON.stringify(studentList));
          document.getElementById("msg").innerText = "The Student added successfully!";
        } catch (error) {
          console.error("Failed to add student:", error);
          alert("Failed to add student.");
        }
      }

      document.getElementById("name").value = "";
      document.getElementById("surname").value = "";
      document.getElementById("birthday").value = "";
      document.getElementById("id").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("address").value = "";
      
    }
  }
}

// let addStudentBtn = document.getElementById("addStudentBtn");
// addStudentBtn.addEventListener("click", function() {
//   let addStudent1 = new AddStudent();
//   addStudent1.addStudent();
// });
