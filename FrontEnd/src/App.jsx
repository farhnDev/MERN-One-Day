import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Label from "./components/Label.jsx";
import Form from "./components/Form.jsx";
import Edit from "./components/Edit.jsx"

export default function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Label />} />
          <Route path="/add" element={<Form />} />
          <Route path='/edit/:id' element={<Edit />} />
        </Routes>
      </Router>
    </>
  );
}

