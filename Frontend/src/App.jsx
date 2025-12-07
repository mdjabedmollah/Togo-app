import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "../components/Form";
import StudentList from "../components/StudentList";
import UpdateStudent from "../components/UpdateStudent";
import Home from "../components/Home";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Form/>} />
        <Route path="/students" element={<StudentList />} />
        <Route path="/update/:id" element={<UpdateStudent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
