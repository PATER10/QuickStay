import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AllRooms from "./pages/AllRooms.jsx";
import Footer from "./components/Footer.jsx";
import RoomDetails from "./pages/RoomDetails.jsx";
import MyBookings from "./pages/MyBookings.jsx";
import Experience from "./pages/Experience.jsx";
import About from "./pages/About.jsx";
import HotelReg from "./components/HotelReg.jsx";
import Layout from "./pages/hotelOwner/Layout.jsx";
import Dashboard from "./pages/hotelOwner/Dashboard.jsx";
import AddRoom from "./pages/hotelOwner/AddRoom.jsx";
import ListRoom from "./pages/hotelOwner/ListRoom.jsx";
import { Toaster } from "react-hot-toast";
import { useAppContext } from "./context/AppContext.jsx";

const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");
  const { showHotelReg } = useAppContext();

  return (
    <div>
      <Toaster />
      {!isOwnerPath && <Navbar />}
      {showHotelReg && <HotelReg />}
      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<AllRooms />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/about" element={<About />} />
          <Route path="/owner" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="add-room" element={<AddRoom />} />
            <Route path="list-room" element={<ListRoom />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
