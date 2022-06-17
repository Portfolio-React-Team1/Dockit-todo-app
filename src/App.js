import Calendar from './pages/Calendar/Calender'

import './App.css';
import Category from './pages/Category';
import {BrowserRouter, Routes, Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/calendar" element={<Calendar />}/>
            <Route path="/category" element={<Category />}/>
        </Routes>
      </BrowserRouter>

     
    </div>
  );
}

export default App;
