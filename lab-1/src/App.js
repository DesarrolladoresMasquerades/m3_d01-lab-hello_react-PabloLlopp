// src/App.js
import Banner from './components/Banner';
import './App.css';
import Features from "./components/Features"
import ReactFeature from './components/ReactFeature';
import image1 from "./images/icon1.png"
import image2 from "./images/icon2.png"
import image3 from "./images/icon3.png"
import image4 from "./images/icon4.png"

function App() {
  return (
    <div className="App">
      <Banner />
      <Features>
        <ReactFeature image={image1} title={"Declarative"} text={"React makes it painless to create interactive UIs"} />
        <ReactFeature image={image2} title={"Components"} text={"Build encapsulated components that manage their state"} />
        <ReactFeature image={image3} title={"Single-way"} text={"A set of immutable values are passed to the component's"} />
        <ReactFeature image={image4} title={"JSX"} text={"Statically typed, designed to run  on modern browsers"} />
      </Features>
    </div>
  );
}
export default App;