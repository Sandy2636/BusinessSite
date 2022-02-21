import logo from "./logo.svg";
import "./app.scss";
import { Route, Routes, Router } from "react-router-dom";
import Home from "./Pages/home/Home";
import Contact from "./Pages/contact/Contact";
import About from "./Pages/about/About";
import Services from "./Pages/services/Services";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
