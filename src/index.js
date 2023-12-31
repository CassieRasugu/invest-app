import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Registration from "./pages/Registration/Registration";
import UserProfile from"./pages/UserProfile/UserProfile";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer"
import "./index.css";


 const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/registration" element={<Registration />} />
            <Route exact path="/userprofile" element={<UserProfile />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route></Route>
          </Routes>
    </BrowserRouter>

  );


