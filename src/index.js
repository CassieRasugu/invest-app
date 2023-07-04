import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import { AppProvider } from './context.';
import './index.css';
import Home from './pages/Home/Home';
import SignUp from './pages/SignUp/SignUp';
import About from "./pages/About/About";
import Userprofile from './pages/Userprofile/Userprofile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home />}>
          <Route path = "signup" element = {<SignUp />} />
          <Route path = "about" element = {<About />} />
          <Route path = "profile" element = {<Userprofile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>
);
