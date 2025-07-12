
const urlParams = new URLSearchParams(window.location.search);
const empId = urlParams.get("id");

const form = document.getElementById("employeeForm");
const title = document.getElementById("form-title");

if (empId) {
  // Edit mode
  const emp = employees.find(e => e.id == empId);
  if (emp) {
    title.textContent = "Edit Employee";
    document.getElementById("empId").value = emp.id;
    document.getElementById("firstName").value = emp.firstName;
    document.getElementById("lastName").value = emp.lastName;
    document.getElementById("email").value = emp.email;
    document.getElementById("department").value = emp.department;
    document.getElementById("role").value = emp.role;
  }
}

if (form) {
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const id = document.getElementById("empId").value || Date.now();
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const department = document.getElementById("department").value;
  const role = document.getElementById("role").value;

  if (!firstName || !lastName || !email || !department || !role) {
    alert("All fields are required.");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Invalid email format.");
    return;
  }

 let employees = JSON.parse(localStorage.getItem("employees")) || [];
const existingIndex = employees.findIndex(emp => emp.id == id);


  const newEmp = {
    id: parseInt(id),
    firstName,
    lastName,
    email,
    department,
    role,
  };

  if (existingIndex !== -1) {
    // Update existing
    employees[existingIndex] = newEmp;
  } else {
    // Add new
    employees.push(newEmp);
  }
  localStorage.setItem("employees", JSON.stringify(employees));
  alert("Employee saved successfully.");
  window.location.href = "index.html";

})};
