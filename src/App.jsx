import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Careers from './Pages/Career';
import ConstServices from './Pages/ConstServices';
import DCServices from './Pages/DCServices';
import FieldServices from './Pages/FieldServices';
import NOCServices from './Pages/NOCServices';
import OPEServices from './Pages/OPEServices';
import ProfServices from './Pages/ProfServices';
import RANservices from './Pages/RANServices';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path='/ConstructionServices' element={<ConstServices/>} />
        <Route path='/DataCenterServices' element={<DCServices/>} />
        <Route path='/FieldServices' element={<FieldServices/>} />
        <Route path='/NOCServices' element={<NOCServices/>} />
        <Route path='/OutsidePlantServices' element={<OPEServices/>} />
        <Route path='/ProfessionalServices' element={<ProfServices/>} />
        <Route path='/RadioAccessNetworkServices' element={<RANservices/>} />
        
      </Routes>
    </Router>
  );
}

export default App;