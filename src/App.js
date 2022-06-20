import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IndexPage from './pages/Indexpage/IndexPage';
import Sidebar from './pages/Sidebar/Sidebar';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import HomePage from './pages/HomePage/HomePage';
import Cal from './pages/Calender/Calender' 
import AddTask from './pages/Add-Task/AddTask';
import Landing from "./pages/Landing_page/Landing";
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ChooseTime from './pages/Choose-Time/ChooseTime';
import './App.css'


function App() {
  return (
    <div className='d-flex'>
      <Router>
        <Sidebar />
        <Routes>
           <Route path="/index" element={<IndexPage />} ></Route>
          <Route path="/landing" element={<Landing />} ></Route>
          <Route path="/cal" element={<Cal />} ></Route>
          <Route path="/addtask" element={<AddTask />} ></Route>
          <Route path="/choosetime" element={<ChooseTime />} ></Route>
           <Route path="/categoryPage" element={<CategoryPage />}/> 
           <Route path="/home" element={<HomePage />}/> 
           <Route path="/Login" element={<Login />} ></Route> 
           <Route path="/Register" element={<Register />} ></Route>

        </Routes>
      </Router>

   </div>
  )
}

export default App;