import "./App.css";

import Navbars from "./Navbars";
import About from "./About";
import Progress from "./Progress";
import Headers from "./Headers";
import Branding from "./Branding";
import Work from "./Work";
import ProcessWork from "./ProcessWork";
import Supports from "./Supports";
import Sliders from "./Sliders";
import Tags from "./Tags";

function App() {
  return (
    <div className="app">
      <Navbars />
      <Headers />
      <About />
      <Progress />
      <Branding />
      <Work />
      <ProcessWork />
      <Supports />
      <Sliders />
      <Tags />
    </div>
  );
}

export default App;
