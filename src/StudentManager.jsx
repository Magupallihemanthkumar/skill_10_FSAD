import React, { useState } from "react";
import "./StudentManager.css";

function StudentManager() {

const initialStudents = [
  { id: 2400030600, name: "Rushmitha", course: "CSE" },
  { id: 2400032502, name: "Keerthi", course: "ECE" },
  { id: 2400030166, name: "Siva Durga", course: "IT" },
  { id: 2400030453, name: "Priya", course: "MECH" },
  { id: 2400030484, name: "Poojitha", course: "CIVIL" }
  
];

const [students, setStudents] = useState(initialStudents);

const [newStudent, setNewStudent] = useState({
  id: "",
  name: "",
  course: ""
});

const handleChange = (e) => {
  setNewStudent({
    ...newStudent,
    [e.target.name]: e.target.value
  });
};

const addStudent = () => {
  if (!newStudent.id || !newStudent.name || !newStudent.course) return;

  setStudents([...students, newStudent]);

  setNewStudent({
    id: "",
    name: "",
    course: ""
  });
};

const deleteStudent = (id) => {
  setStudents(students.filter((student) => student.id !== id));
};

return (
<div className="container">

<h2>Student Manager</h2>

<input
name="id"
placeholder="ID"
value={newStudent.id}
onChange={handleChange}
/>

<input
name="name"
placeholder="Name"
value={newStudent.name}
onChange={handleChange}
/>

<input
name="course"
placeholder="Course"
value={newStudent.course}
onChange={handleChange}
/>

<button onClick={addStudent}>Add Student</button>

{students.length === 0 ? (
<p>No students available</p>
) : (
<table>
<thead>
<tr>
<th>ID</th>
<th>Name</th>
<th>Course</th>
<th>Action</th>
</tr>
</thead>

<tbody>
{students.map((student) => (
<tr key={student.id}>
<td>{student.id}</td>
<td>{student.name}</td>
<td>{student.course}</td>
<td>
<button onClick={() => deleteStudent(student.id)}>
Delete
</button>
</td>
</tr>
))}
</tbody>

</table>
)}

</div>
);
}

export default StudentManager;