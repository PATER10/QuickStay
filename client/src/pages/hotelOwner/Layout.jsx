import React, { useEffect } from "react";
import Navbar from "../../components/hotelOwner/Navbar.jsx";
import Sidebar from "../../components/hotelOwner/Sidebar.jsx";
import { Outlet } from "react-router-dom";
import { useAppContext } from "../../context/AppContext.jsx";

const Layout = () => {
  const { isOwner, navigate } = useAppContext();

  useEffect(() => {
    if (!isOwner) {
      navigate("/");
    }
  }, [isOwner]);
  return (
    <div className="flex flex-col h-screen bg-white dark:bg-slate-900 transition-all duration-300">
      <Navbar />
      <div className="flex h-full">
        <Sidebar />
        <div className="flex-1 p-4 pt-10 md:px-10 h-full overflow-y-auto bg-white dark:bg-slate-900">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
