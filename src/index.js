import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home/Home';
import SignUp from './pages/SignUp/SignUp.jsx';
import About from "./pages/About/About";
import Userprofile from './pages/Userprofile/Userprofile.jsx';
import Contact from './pages/Contact/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Home />}>
          <Route path = "signup" element={<SignUp />} />
          <Route path = "profile" element={<Userprofile />} />
          <Route path = "about" element={<About />} />
          <Route path = "contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>

);
