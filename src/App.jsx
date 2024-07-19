import { useState } from "react";
import "./App.css";
// import { Home } from "./components/Home.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Crew } from "./components/Crew.jsx";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* <Home /> */}
      <Crew />
    </div>
  );
}

export default App;
