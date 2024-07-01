import React, { useContext, useEffect, useState } from "react";

import "../App.css";

import { AuthContext } from "../contexts/AuthProvider";


const Main = () => {
  const {loading} = useContext(AuthContext);

  return (
    <div className="bg-prigmayBG">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
      )}
       
    </div>
  );
};

export default Main;