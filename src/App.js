import React from "react";
import Loginform from "./Components/Security/Loginform";
import RegistrationForm from "./Components/Registration/Registrationform";
import Home from "./Components/Dashboard/Home/Home";
import Account from "./Components/Dashboard/Account/Account";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LayoutWithNavbar, LayoutWithoutNavbar } from './Layout';

import PrivateRoute from "./Components/PrivateRoute"; // Importuj strażnika autoryzacji
import "./App.css";
import "./Components/styles/style.css";
import "./Components/styles/warranties.css";
import "./Components/styles/account.css";
import Warranties from "./Components/Warranties/Warranties";
import WarrantiesContainer from './Components/Warranties/WarrantiesContainer'

const App = () => {

  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<PrivateRoute><LayoutWithNavbar><Home /></LayoutWithNavbar></PrivateRoute>} />
        <Route path="/account" element={<PrivateRoute><LayoutWithNavbar><Account /></LayoutWithNavbar></PrivateRoute>} />
        <Route path="/warranties" element={<PrivateRoute><LayoutWithNavbar><WarrantiesContainer /></LayoutWithNavbar></PrivateRoute>} />

        {/* Trasy używające LayoutWithoutNavbar */}
        <Route path="/loginform" element={<LayoutWithoutNavbar><Loginform /></LayoutWithoutNavbar>} />
        <Route path="/signinform" element={<LayoutWithoutNavbar><RegistrationForm /></LayoutWithoutNavbar>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;