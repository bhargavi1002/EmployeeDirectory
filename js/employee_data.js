
// Only define mock data if not already provided by Freemarker
if (typeof employees === "undefined") {
  employees = JSON.parse(localStorage.getItem("employees")) || [
    {
      id: 101,
      firstName: "Alice",
      lastName: "Smith",
      email: "alice@example.com",
      department: "HR",
      role: "Manager"
    },
    {
      id: 102,
      firstName: "Bob",
      lastName: "Johnson",
      email: "bob@example.com",
      department: "IT",
      role: "Developer"
    },
    {
      id: 103,
      firstName: "Charlie",
      lastName: "Lee",
      email: "charlie@example.com",
      department: "Finance",
      role: "Analyst"
    },
    {
      id: 104,
      firstName: "Aarav",
      lastName: "Kumar",
      email: "aarav.kumar@example.com",
      department: "Engineering",
      role: "Frontend Developer"
    },
    {
      id: 105,
      firstName: "Sara",
      lastName: "Ali",
      email: "sara.ali@example.com",
      department: "Marketing",
      role: "Content Strategist"
    },
    {
      id: 106,
      firstName: "Riya",
      lastName: "Mehra",
      email: "riya.mehra@example.com",
      department: "Human Resources",
      role: "HR Executive"
    }
  ];
}
