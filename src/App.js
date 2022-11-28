import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import ViewData from './pages/view.jsx'
import Navbar from './pages/components/navbar';
import AddData from './pages/add';
import EditData from './pages/edit';
import ViewDetails from './pages/viewDetails';

function App() {
  return (
    <div>
    <Navbar></Navbar>
      <Routes>
          <Route path = "/" element={<ViewData/>}/>
          <Route path = "/add" element={<AddData/>}/>
          <Route path = "/edit/:id" element={<EditData/>}/>
          <Route path = "/data/:id" element={<ViewDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
