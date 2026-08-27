import React from 'react'

export default function ListRendering() {
  

  const employees = [
    {
      id: 1,
      name: "Nirosha",
      role: "Frontend Developer",
      company: "Stackly",
      experience: "1 Year",
      branch: "Hyderabad"
    },
    {
      id: 2,
      name: "Dhanvitha",
      role: "Java Developer",
      company: "Infosys",
      experience: "2 Years",
      branch: "Bangalore"
    },
    {
      id: 3,
      name: "Naveen",
      role: "UI Developer",
      company: "TCS",
      experience: "1.5 Years",
      branch: "Chennai"
    },
    {
      id: 4,
      name: "Swetha",
      role: "Backend Developer",
      company: "Wipro",
      experience: "3 Years",
      branch: "Pune"
    },
    {
      id: 5,
      name: "Roopa",
      role: "Java Developer",
      company: "Accenture",
      experience: "2 Years",
      branch: "Mumbai"
    }
  ];

  return (
    <div className="employee-container">

      {employees.map((employee) => (
        <div className="card" key={employee.id}>

          <h2>{employee.name}</h2>

          <p><b>Role:</b> {employee.role}</p>
          <p><b>Company:</b> {employee.company}</p>
          <p><b>Experience:</b> {employee.experience}</p>
          <p><b>Branch:</b> {employee.branch}</p>

        </div>
      ))}

    </div>
  );
}

