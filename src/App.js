import "./App.css";
import "./App2.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Particles from "react-particles-js";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Technology from "./components/Technology";
import Contact from "./components/Contact";


function App() {
  return (
    < >
    <Particles 
    className="particles-canvas"
    params={{
      particles:{
        number: {
          value:30,
          density: {
            enable:true,
            value_area:900,
          },
        },
        shape: {
          type:"square",
          stroke: {
            width:6,
            color:"rgb(0, 40, 116);"
          }

        }
        },
      }
    } />
  <Navbar />
  <Header />
  <AboutMe />
  <Projects />
  <Technology />
  <Contact />
  </>
  );
}

export default App;
