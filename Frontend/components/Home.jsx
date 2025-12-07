import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="card w-96 bg-white shadow-xl p-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Student Management
        </h1>
        <p className="text-gray-600 mb-6">
          Manage all student data easily using CRUD operations.
        </p>

        <div className="space-y-3">
          <Link to="/create" className="btn btn-success w-full">
            Add New Student
          </Link>
          <Link to="/students" className="btn btn-primary w-full">
            📋 View Students
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
