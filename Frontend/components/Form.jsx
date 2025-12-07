import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [department, setDepartment] = useState("");
  const [cgpa, setCgpa] = useState("");

  const submitHandle = async () => {
    if (!name || !age || !department || !cgpa) {
      return alert("All fields are required!");
    }

    try {
      const res = await axios.post("http://localhost:3001/api/v1/create", {
        name,
        age,
        department,
        cgpa,
      });

      alert("Student Created Successfully!");
      console.log(res.data);

      // Clear inputs
      setName("");
      setAge("");
      setDepartment("");
      setCgpa("");
    } catch (error) {
      alert("Failed to create student");
      console.log(error.message);
    }
  };

  return (
    <div className="hero bg-white min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="card bg-gray-600 w-full max-w-sm shadow-2xl">
          <div className="card-body">
            <fieldset className="space-y-3">
              <label className="label text-white">Name</label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label className="label text-white">Age</label>
              <input
                type="number"
                className="input input-bordered w-full"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />

              <label className="label text-white">Department</label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              />

              <label className="label text-white">CGPA</label>
              <input
                type="number"
                className="input input-bordered w-full"
                value={cgpa}
                onChange={(e) => setCgpa(e.target.value)}
              />

              <button
                className="btn btn-neutral mt-4 w-full"
                onClick={submitHandle}
              >
                Submit
              </button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
