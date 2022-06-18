import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IndexPage from './pages/Indexpage/IndexPage';
import Sidebar from './pages/Sidebar/Sidebar';
// import Cal from './pages/Calender/Calender'
// import AddTask from './pages/Add-Task/AddTask';
  //  import Landing from "./pages/Landing_page/Landing";

function App() {
  return (
    <div className='d-flex'>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/index" element={<IndexPage />} ></Route>
          {/* <Route path="/" element={<Landing />} ></Route> */}
          {/* <Route path="/cal" element={<Cal />} ></Route> */}
          {/* <Route path="/addtask" element={<AddTask />} ></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
