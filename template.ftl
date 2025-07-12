<#-- This is a static Freemarker template file created as part of the assignment. Since no Java backend is available, this demonstrates template usage. 
<#assign employees = [
{
    "id": 101,
    "firstName": "Alice",
    "lastName": "Smith",
    "email": "alice@example.com",
    "department": "HR",
    "role": "Manager"
  },
  {
    "id": 102,
    "firstName": "Bob",
    "lastName": "Johnson",
    "email": "bob@example.com",
    "department": "IT",
    "role": "Developer"
  },
  {
    "id": 103,
    "firstName": "Charlie",
    "lastName": "Lee",
    "email": "charlie@example.com",
    "department": "Finance",
    "role": "Analyst"
  },

]> -->


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employee Directory</title>
    <link rel="stylesheet" href="./css/style.css" />
</head>
<body>
   <header class="header">
        <h1>Employee Directory</h1>
            <input type="text" id="search" placeholder="Search by name or email" />
            <button id="filter" class="btn-filter">Filter</button>

   </header>

   <div class="edit-container">
     
    <div class="left-container">
    <label for="sort-select">Sort:</label>
        <select id="sort-select">
            <option value="">--Select--</option>
            <option value="firstName">First Name</option>
            <option value="Department">Department</option>
        </select>
        
        <label for="itemsPerPage">Show:</label>
        <select id="itemsPerPage">
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
      </select>

    </div>

    <div class="right-container">
      <button class="btn-add" onclick="location.href='manage_forms.html'">
        Add Employee
      </button>
    </div>
    </div>

    <main>
        <section id="employeeGrid" class="employee-grid">
        <#-- Expecting 'employees' to be passed by Java backend -->
          <#list employees as emp>
        <div class="employee-card">
          <div class="emp-details">
            <h3>${emp.firstName!''} ${emp.lastName!''}</h3>
            <p><strong>ID:</strong> ${emp.id!''}</p>
            <p><strong>Email:</strong> ${emp.email!''}</p>
            <p><strong>Department:</strong> ${emp.department!''}</p>
            <p><strong>Role:</strong> ${emp.role!''}</p>
          </div>
          <div class="emp-actions">
            <button class="btn-edit" data-id="${emp.id!''}">Edit</button>
            <button class="btn-delete" data-id="${emp.id!''}">Delete</button>
          </div>
        </div>
      </#list>
        </section>
    </main>

    <footer class="footer">
        <p>&copy; 2025 Employee Directory. All rights reserved.</p>
    </footer>
        
        
  <script src="./js/employee_data.js"></script>
  <script src="./js/actions.js"></script>
  <script src="./js/form_handler.js"></script>
</body>
</html>