import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Department from './pages/Department';
import DepartmentDetail from './pages/DepartmentDetail';
// import Campus from './pages/Campus';
import Faculty from './pages/Faculty';
import FacultyProfile from './pages/FacultyProfile';
// import AboutUs from './pages/AboutUs';
// import Profile from './pages/Profile';
import Layout from './components/Layout';
import AdminPage from './pages/AdminPage';
import DepartmentPage from './pages/DepartmentPage';
import FacultyPage from './pages/FacultyPage';
import Campus from './pages/Campus';

const App = () => {
  const departments = [
    { id: 'A', name: 'Administrative Block', image: '/images/admin-block.jpg', tour: 'https://www.vgecg.ac.in/virtual_tour/admin/admin.html' },
    { id: 'B', name: 'Information Technology', image: '/images/it-block.jpg', tour: 'https://www.vgecg.ac.in/virtual_tour/it/it.html' },
    { id: 'C', name: 'Electrical Engineering', image: '/images/mechanical-block.jpg', tour: 'https://www.vgecg.ac.in/virtual_tour/electrical/electrical.html' },
    { id: 'D', name: 'Computer Science', image: '/images/electrical-block.jpg', tour: 'https://www.vgecg.ac.in/virtual_tour/computer/computer.html' },
    // { id: 'E', name: 'Canteen', image: '/images/civil-block.jpg', tour: '' },
    { id: 'F', name: 'Electronics & Communication', image: '/images/chemical-block.jpg', tour: 'https://www.vgecg.ac.in/virtual_tour/ec/ec.html' },
    { id: 'G', name: 'Power Electronics', image: '/images/aerospace-block.jpg', tour: 'https://www.vgecg.ac.in/virtual_tour/power/power.html' },
    { id: 'H', name: 'chemical Engineering', image: '/images/environmental-block.jpg', tour: 'https://www.vgecg.ac.in/virtual_tour/chemical/chemical.html' },
    { id: 'I', name: 'chemical Engineering', image: '/images/biotech-block.jpg', tour: 'https://www.vgecg.ac.in/virtual_tour/chemical/chemical.html' },
    { id: 'J', name: 'chemical Engineering', image: '/images/nuclear-block.jpg', tour: 'https://www.vgecg.ac.in/virtual_tour/chemical/chemical.html' },
    { id: 'K', name: 'Instrumentation & Control', image: '/images/materials-block.jpg', tour: 'https://www.vgecg.ac.in/virtual_tour/ic/ic.html' },
    { id: 'L', name: 'Electrical Engineering', image: '/images/robotics-block.jpg', tour: 'https://www.vgecg.ac.in/virtual_tour/electrical/electrical.html' },
    { id: 'M', name: 'Mechanical Engineering', image: '/images/physics-block.jpg', tour: 'https://www.vgecg.ac.in/virtual_tour/mechanical/mechanical.html' },
    { id: 'N', name: 'Civil Engineering', image: '/images/math-block.jpg', tour: 'https://www.vgecg.ac.in/virtual_tour/civil/civil.html' },
    // { id: 'W', name: 'Workshop', image: '/images/library.jpg', tour: '' }
  ];

  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='Admin'>
            <Route index element={<AdminPage />} />
            <Route path='add-department' element={<DepartmentPage />} />
            <Route path='add-faculty' element={<FacultyPage />} />
          </Route>
          <Route path="department">
            <Route index element={<Department />} />
            <Route path=":deptId">
              <Route index element={<DepartmentDetail />} />
            </Route>
          </Route>
          <Route path="faculty">
            <Route index element={<Faculty />} />
            <Route path=":id" element={<FacultyProfile />} />
          </Route>
          <Route path="campus" element={<Campus />} />
        </Route>
      </Routes>
  );
}

export default App;
