import "./App.css";
import Home from "./Components/Home/home";
import Resume from "./Components/Resume/resume";
import Awards from "./Components/Awards/awards";
import Contact from "./Components/Contact/contact";
import Experience from "./Components/Experience/experience";
import Projects from "./Components/Projects/projects";
import Research from "./Components/Research/research";
import Navbar from "./Components/Navbar/navbar";
import Footer from "./Components/Footer/footer";
import Pub from "./Components/Publication/pub";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route exact={true} path="/" element={<Home />} />
          <Route exact={true} path="/resume" element={<Resume />} />
          <Route exact={true} path="/projects" element={<Projects />} />
          <Route exact={true} path="/experience" element={<Experience />} />
          <Route exact={true} path="/research" element={<Research />} />
          <Route exact={true} path="/awards" element={<Awards />} />
          <Route exact={true} path="/contact" element={<Contact />} />
          <Route exact={true} path="/publications" element={<Pub />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
