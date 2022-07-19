import { useEffect, useState } from 'react';
import './App.css'; 
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import axios from 'axios';


function App() {
  const baseURL = "https://60c96609772a7600172036fa.mockapi.io/api/sinhvien";
  const [listSV, setListSV] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setListSV(response.data);
    });
  },[])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage listSV={listSV}/>} />
          <Route path='/dashboard' element={<Dashboard listSV={listSV}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
