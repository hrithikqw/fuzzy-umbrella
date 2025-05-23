import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Exp from "./Exp";
import Fun from "./Fun";
import Skills from "./Skills.";
import Contact from "./Contact";
import Projects from "./Projects";
import HireMe from "./components/HireMe";


function App() {
  return (
    <div class="gradient">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Exp />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/fun" element={<Fun />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="hire-me" element={<HireMe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
