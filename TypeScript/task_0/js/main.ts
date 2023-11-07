interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

declare const student1: Student
declare const student2: Student
const studentsList: Student[] = [student1, student2];

document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.getElementById("tableBody");
  
  if (tableBody) {
      studentsList.forEach(student => {
          const row = document.createElement("tr");
          const firstNameCell = document.createElement("td");
          const locationCell = document.createElement("td");
          
          firstNameCell.textContent = student.firstName;
          locationCell.textContent = student.location;
          
          row.appendChild(firstNameCell);
          row.appendChild(locationCell);
          tableBody.appendChild(row);
      });
  }
})
