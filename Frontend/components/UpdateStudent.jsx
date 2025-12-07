import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const UpdateStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    age: "",
    department: "",
    cgpa: "",
  });

  const fetchStudent = async () => {
    try {
      const res = await axios.get(`http://localhost:3001/api/v1/single/${id}`);
      setData(res.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const updateData = async () => {
    try {
      await axios.put(`http://localhost:3001/api/v1/update/${id}`, data);
      navigate("/students");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchStudent();
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold text-center mb-4">Update Student</h1>

      <input
        type="text"
        className="input input-bordered w-full mb-3"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />

      <input
        type="number"
        className="input input-bordered w-full mb-3"
        value={data.age}
        onChange={(e) => setData({ ...data, age: e.target.value })}
      />

      <input
        type="text"
        className="input input-bordered w-full mb-3"
        value={data.department}
        onChange={(e) => setData({ ...data, department: e.target.value })}
      />

      <input
        type="number"
        className="input input-bordered w-full mb-3"
        value={data.cgpa}
        onChange={(e) => setData({ ...data, cgpa: e.target.value })}
      />

      <button className="btn btn-success w-full" onClick={updateData}>
        Update
      </button>
    </div>
  );
};

export default UpdateStudent;
