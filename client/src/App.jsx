import React, { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home.jsx';
import CarDetails from './pages/CarDetails.jsx';
import Cars from './pages/Cars.jsx';
import MyBooking from './pages/MyBooking.jsx';
import Footer from './components/Footer.jsx';
import Layout from './pages/owner/Layout.jsx';
import Dashboard from './pages/owner/Dashboard.jsx';
import AddCar from './pages/owner/AddCar.jsx';
import ManageCar from './pages/owner/ManageCar.jsx';
import ManageBookings from './pages/owner/ManageBookings.jsx';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const isOwnerPath = useLocation().pathname.startsWith('/owner');
  return (
    <>
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin} />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/car-details/:id' element={<CarDetails />} />
        <Route path='/cars' element={<Cars />} />
        <Route path='/my-bookings' element={<MyBooking />} />
        <Route path='/owner' element={<Layout/>}> 
          <Route index element={<Dashboard/>}/>
          <Route path="add-car" element={<AddCar/>}/>
          <Route path="manage-cars" element={<ManageCar/>}/>
          <Route path="manage-bookings" element={<ManageBookings/>}/>
        </Route>
      </Routes>

      {!isOwnerPath && <Footer />}

    </>
  )
}
export default App