import "./App.css";
import MyLineChart from "./components/MyLineChart/MyLineChart";
import SpecialChart from "./components/SpacialChart/SpecialChart";
import { useSpring, animated } from "react-spring";
import { useState } from "react";

function App() {
  const [flip, set] = useState(false);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 20,
    onRest: () => set(!flip),
  });
  return (
    <div className="App">
      <animated.div style={props}>I will fade in</animated.div>
      <h1>Rechats</h1>
      <MyLineChart></MyLineChart>
      <SpecialChart></SpecialChart>
    </div>
  );
}

export default App;
