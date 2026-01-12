import React, { useEffect, useState } from "react";
import { fetchMessage } from "./api";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Contact from "./components/Contact";

const App: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const [activePage, setActivePage] = useState<string>("home");

  useEffect(() => {
    fetchMessage()
      .then((data) => setMessage(data.message)) // Update state with the backend message
      .catch((error) => console.error(error)); // Log errors
  }, []); // Empty dependency array ensures this runs once on component mount

  return (
    <div className="App">
      <Header />
      <main className="main-layout">
        <div className="left-panel">
          <h2>About Me</h2>       
          <ul>
            <li>
              <button onClick={() => setActivePage('home')}>Home</button>
            </li>
            <li>
              <button onClick={() => setActivePage("about")}>About Me</button>
            </li>
            <li>
              <button onClick={() => setActivePage("projects")}>Work Experience</button>
            </li>
            <li>
              <button onClick={() => setActivePage("contact")}>Contact</button>
            </li>
          </ul>
        </div>
        <div className="right-panel">
          {activePage === "home" && <Home message={message} />}
          {activePage === "about" && <About />}
          {activePage === "projects" && <WorkExperience />}
          {activePage === "contact" && <Contact />}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
