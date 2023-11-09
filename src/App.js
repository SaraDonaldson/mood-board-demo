import './App.css';
import CreateMoodBoard from './CreateMoodBoard';
import { Routes, Route, HashRouter } from "react-router-dom";
import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Login from './Pages/Login';
import UserDashboard from './Pages/UserDashboard';

function App() {
  return (
    <div className="App">
       <HashRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<CreateMoodBoard/> } />
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<UserDashboard />} />
      </Routes>
    <Footer />
</HashRouter>
     

      </div>
  );
}

export default App;
