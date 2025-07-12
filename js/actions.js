
let filteredEmployees = [...employees]; 
let currentPage = 1;
let itemsPerPage = 10;

// DOM references
const container = document.getElementById("employeeGrid");
const searchInput = document.getElementById("search");
const sortSelect = document.getElementById("sort-select");
const itemsPerPageSelect = document.getElementById("itemsPerPage");

// filter DOM references
const filterBtn = document.getElementById("filter");
const applyFilterBtn = document.getElementById("applyFilter");
const resetFilterBtn = document.getElementById("resetFilter");

const filterFirstName = document.getElementById("filterFirstName");
const filterDepartment = document.getElementById("filterDepartment");
const filterRole = document.getElementById("filterRole");

const filterSidebar = document.getElementById("filterSidebar");

// --- Render employee cards ---
function renderEmployees() {
  container.innerHTML = "";

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedEmployees = filteredEmployees.slice(startIndex, endIndex);

  paginatedEmployees.forEach(emp => {
    const empCard = document.createElement("div");
    empCard.className = "employee-card";
    empCard.innerHTML = `
      <div class="emp-details">
        <h3>${emp.firstName} ${emp.lastName}</h3>
        <p><strong>ID:</strong> ${emp.id}</p>
        <p><strong>Email:</strong> ${emp.email}</p>
        <p><strong>Department:</strong> ${emp.department}</p>
        <p><strong>Role:</strong> ${emp.role}</p>
      </div>
      <div class="emp-actions">
        <button class="btn-edit" data-id="${emp.id}">Edit</button>
        <button class="btn-delete" data-id="${emp.id}">Delete</button>
      </div>
    `;
    container.appendChild(empCard);
  });
}

// --- Search Employees ---
function searchEmployees(searchText) {
  const lowerQuery = searchText.toLowerCase();
  filteredEmployees = employees.filter(emp =>
    `${emp.firstName} ${emp.lastName}`.toLowerCase().includes(lowerQuery) ||
    emp.email.toLowerCase().includes(lowerQuery)
  );
  currentPage = 1;
  renderEmployees();
}

// --- Sort Employees ---
function sortEmployees(sortCriteria) {
  if (sortCriteria === "firstName") {
    filteredEmployees.sort((a, b) => a.firstName.localeCompare(b.firstName));
  } else if (sortCriteria === "Department") {
    filteredEmployees.sort((a, b) => a.department.localeCompare(b.department));
  }
  renderEmployees();
}

// --- Delete Employee ---
function deleteEmployee(id) {
  const confirmDelete = confirm("Are you sure you want to delete this employee?");
  if (!confirmDelete) return;

  const index = employees.findIndex(emp => emp.id == id);
  if (index !== -1) {
    employees.splice(index, 1);
    filteredEmployees = [...employees];
    renderEmployees();
  }
}

// --- Add/Edit Form ---
function editEmployee(id) {
  window.location.href = `manage_forms.html?id=${id}`;
}

// ---Edit/Delete Buttons ---
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-edit")) {
    const id = e.target.dataset.id;
    editEmployee(id);
  }

  if (e.target.classList.contains("btn-delete")) {
    const id = e.target.dataset.id;
    deleteEmployee(id);
  }
});

// --- Event Listeners ---
if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    searchEmployees(e.target.value);
  });
}

if (sortSelect) {
  sortSelect.addEventListener("change", (e) => {
    sortEmployees(e.target.value);
  });
}

if (itemsPerPageSelect) {
  itemsPerPageSelect.addEventListener("change", (e) => {
    itemsPerPage = parseInt(e.target.value);
    currentPage = 1;
    renderEmployees();
  });
}

if (filterBtn && filterSidebar) {
  filterBtn.addEventListener("click", () => {
    filterSidebar.classList.toggle("hidden");
  });
}

if (applyFilterBtn) {
  applyFilterBtn.addEventListener("click", () => {
    const fname = filterFirstName.value.trim().toLowerCase();
    const dept = filterDepartment.value.trim().toLowerCase();
    const role = filterRole.value.trim().toLowerCase();

    filteredEmployees = employees.filter(emp =>
      (!fname || emp.firstName.toLowerCase().includes(fname)) &&
      (!dept || emp.department.toLowerCase().includes(dept)) &&
      (!role || emp.role.toLowerCase().includes(role))
    );

    currentPage = 1;
    renderEmployees();
  });
}

if (resetFilterBtn) {
  resetFilterBtn.addEventListener("click", () => {
    filterFirstName.value = "";
    filterDepartment.value = "";
    filterRole.value = "";

    filteredEmployees = [...employees];
    currentPage = 1;
    renderEmployees();
  });
}

renderEmployees();
localStorage.setItem("employees", JSON.stringify(employees));
