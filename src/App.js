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
import Forms from "./Forms";
import Footer from "./Footer";

function App() {
  return (
    <div className="app">
      {/* 1 */}
      <Navbars />
      {/* 2 */}
      <Headers />
      {/* 3 */}
      <About />
      {/* 4 */}
      <Progress />
      {/* 5 */}
      <Branding />
      {/* 6 */}
      <ProcessWork />
      {/* 7 */}
      <Work />
      {/* 8 */}
      <Supports />
      {/* 9 */}
      <Sliders />
      {/* 10 */}
      <Tags />
      {/* 11 */}
      <Forms />
      {/* 12 */}
      <Footer />
    </div>
  );
}

export default App;
