export class SearchStudent {
    constructor() {
        this.searchStudent = () => {
            let id = document.getElementById("search-id").value;

            let studentList = JSON.parse(localStorage.getItem("students")) || [];

            

            let matchstudent;
            let displaystudent = false;
            studentList.forEach(student => {
                if (student.id === id & id !== "") {
                    displaystudent = true;
                    matchstudent = student;
                }
            });

            document.getElementById("details").innerText="";

            if (displaystudent) {
                let tabledetails = document.getElementById("details");
                let table = document.createElement("table");

                let tableHead = document.createElement("thead");
                let headRow = document.createElement("tr");
                let headCell = document.createElement("th");
                headCell.appendChild(document.createTextNode("Student Information"));
                headCell.colSpan = 2;
                headRow.appendChild(headCell);
                tableHead.appendChild(headRow);
                table.appendChild(tableHead);

                let tableBody = document.createElement("tbody");

                for (let [key, value] of Object.entries(matchstudent)) {
                    let row = document.createElement("tr");
                    let propertyCell = document.createElement("td");
                    propertyCell.appendChild(document.createTextNode(key + ":"));
                    row.appendChild(propertyCell);
                    const valueCell = document.createElement("td");
                    valueCell.appendChild(document.createTextNode(value));
                    row.appendChild(valueCell);
                    tableBody.appendChild(row);
                }

                table.appendChild(tableBody);
                tabledetails.appendChild(table);
            } else {
                document.getElementById("details").innerText = "Student not found!";
            }

            document.getElementById("search-id").value = "";
            
        };
    }
}

// let searchStudentBtn = document.getElementById("searchStudentBtn");
// searchStudentBtn.addEventListener("click", function() {
//     let searchStudent1 = new SearchStudent();
//     searchStudent1.searchStudent();
// });
