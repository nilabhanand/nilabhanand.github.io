import Typical from "react-typical";
import { useRef } from "react";

import logo from "./images/logo.JPG";
import "./App.css";
import Timeline from "./components/Timeline/timeline";
import Footer from "./components/Footer/Footer";
import resume from "./files/Nilabh_Anand_Resume_2022.pdf";

function App() {
  const homeRef = useRef(null);
  const timelineRef = useRef(null);
  
  return (
    <div className="App">
      <div className="App-header" ref={homeRef}>
        <div className="navigation">
          <ul>
            <li><a onClick={() => homeRef.current.scrollIntoView()}>Home</a></li>
            <li>
              <a onClick={() => timelineRef.current.scrollIntoView()}>Work</a>
            </li>
            <li>
              <a href="https://github.com/nilabhanand" target="_blank">
                Github
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/nilabhanand" target="_blank">
                Linkedin
              </a>
            </li>
            <li>
              <a href={resume} target="_blank" className="resume-btn">
                Resume
              </a>
            </li>
          </ul>
        </div>
        <div className="content">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Hello, I'm Nilabh</h1>
          <p>
            <Typical
              steps={[
                "Developer 💻",
                2000,
                "Artist 🎨",
                2000,
                "Economics Enthusiast 📈",
                2000,
              ]}
              loop={Infinity}
              wrapper="p"
            />
          </p>
          <button
            className="App-link"
            onClick={() => timelineRef.current.scrollIntoView()}
          >
            Explore
          </button>
        </div>
      </div>
      <div ref={timelineRef} className="timeline">
        <Timeline id="work" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
