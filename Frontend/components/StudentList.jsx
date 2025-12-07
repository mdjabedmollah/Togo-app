import React, { useEffect, useState } from "react";
import axios from "axios";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3001/api/v1/getAll");
      setStudents(res.data.studest);
    } catch (error) {
      console.log("Error:", error.message);
    }
  };

  const deleteStudent = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/v1/delete/${id}`);
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  };

  const sortByCgpa = async () => {
    try {
      const res = await axios.get("http://localhost:3001/api/v1/sort");
      setStudents(res.data.student);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-5">
      <button className="btn btn-accent" onClick={sortByCgpa}>
        Sort by CGPA
      </button>

      <table className="table table-zebra mt-5">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Department</th>
            <th>CGPA</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students?.map((student) => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.department}</td>
              <td>{student.cgpa}</td>
              <td>
                <a href={`/update/${student._id}`} className="btn btn-info btn-sm">
                  Edit
                </a>
                <button
                  className="btn btn-error btn-sm ml-2"
                  onClick={() => deleteStudent(student._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
