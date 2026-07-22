import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Cursor from "./Components/Cursor";

import Home from "./assets/Pages/Home";
import About from "./assets/Pages/About";
import Skills from "./assets/Pages/Skill";
import Projects from "./assets/Pages/Projects";
import Experience from "./assets/Pages/Experience";
import Contact from "./assets/Pages/Contact";

const App = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="bg-black min-h-screen text-white">
      <Cursor />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home mousePos={mousePos} />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </div>
  );
};

export default App;