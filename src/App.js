import "./App.css";

import Navbars from "./Navbars";
import FirstSection from "./FirstSection";
import About from "./About";
import Progress from "./Progress";
import Headers from "./Headers";
import Branding from "./Branding";

function App() {
  return (
    <div className="app">
      <Navbars />
      <Headers />

      {/* <FirstSection /> */}
      <About />
      <Progress />
      <Branding />
    </div>
  );
}

export default App;
