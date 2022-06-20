import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/Indexpage/IndexPage";
import Sidebar from "./pages/Sidebar/Sidebar";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import HomePage from "./pages/HomePage/HomePage";
import Cal from "./pages/Calendar/Calendar";
import TaskPriority from "./pages/Task-Priority/TaskPriority";
import AddTask from "./pages/Add-Task/AddTask";
import Landing from "./pages/Landing_page/Landing";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import "./App.scss";

function App() {
  return (
    <div className="d-flex">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/index" element={<IndexPage />}></Route>
          <Route path="/landing" element={<Landing />}></Route>
          <Route path="/cal" element={<Cal />}></Route>
          <Route path="/addtask" element={<AddTask />}></Route>
          <Route path="/Taskpriority" element={<TaskPriority />}></Route>
          <Route path="/categoryPage" element={<CategoryPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
