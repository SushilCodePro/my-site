import Home from "./components/Home";
import AddTask from "./components/AddTask";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="container mx-auto">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addtask" element={<AddTask />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
