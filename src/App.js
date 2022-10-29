import { useEffect, useState } from "react";
import "./App.css";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import About from "./views/About";
import Contact from "./views/Contact";
import Home from "./views/Home";
import Projects from "./views/Projects";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return (
    <>
      {!loading ? (
        <div>
          <Navbar />
          <Home />
          <About />
          <Projects />
          <Contact />
        </div>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}

export default App;
