import "./App.scss";

import AboutMe from "./Component/Pages/AboutMe/AboutMe";
import { Contact } from "./Component/Pages/Contact/Contact";
import Intro from "./Component/Pages/Intro/Intro";
import Navbar from "./Component/Navbar/Navbar";
import Portfolio from "./Component/Pages/Portfolio/Portfolio";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="sections">
          <Intro />
          <Portfolio />
          <AboutMe />
          <Contact />
        
      </div>
    </div>
  );
}

export default App;
