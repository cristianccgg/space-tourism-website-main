import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Crew } from "./components/Crew.jsx";
import { Destination } from "./components/Destination.jsx";
import { Technology } from "./components/Technology.jsx";

function App() {
  return (
    <Router>
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
