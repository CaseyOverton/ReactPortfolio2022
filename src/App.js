import React from "react";
import "./App.css";
import Home from "./Home/HomePage";
import Contact from "./Contact/Contact";
import Resume from "./Resume";
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Nav from "./nav";
import useLocalStorage from "use-local-storage";
import { IoIosSunny } from "react-icons/io";
function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <div data-theme={theme}>
      <Router>
        <Nav />
        <button onClick={switchTheme}>
         {theme === 'light' ? 'Dark' : 'Light'} Theme <div style={{marginTop:2}}><IoIosSunny /> </div>
        </button>
        <Routes> 
          <Route exact path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
