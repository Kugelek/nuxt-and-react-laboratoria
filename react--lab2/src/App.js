import logo from "./logo.svg";
import "./App.css";
import HelloWorld from "./components/HelloWorld";
import Inf from "./components/Inf";
import Name from "./components/Name";
import Lab from "./components/Lab1";
import Counter from "./components/Counter";
import Panel from "./components-lab1/MainPanel/MainPanel";
import { useContext, createContext, useEffect, useState } from "react";

import { FontsizeContext } from "./context";
function App() {
  // const FontsizeContext = createContext();
  // const con = useContext(FontsizeContext);
  const [globalFontSize, setGlobalFontsize] = useState(16);

  useEffect(() => {
    const storedFontsize = localStorage.getItem("fontsize");
    if (storedFontsize != null) setGlobalFontsize(storedFontsize);
  }, [globalFontSize]);

  return (
    // <FontsizeContext.Provider value={[fontsize, setFontsize]}>
    <div className="App" style={{ fontSize: globalFontSize }}>
      {/* <FontsizeContext.Consumer>
        {({ fontsize }) => (
          <div style={{ fontSize: `${fontsize}px` }}> test</div>
        )}
      </FontsizeContext.Consumer> */}

      <div style={{ fontSize: `${globalFontSize}px` }}> test</div>

      <Panel fontsize={globalFontSize} setFontsize={setGlobalFontsize} />
    </div>
    // </FontsizeContext.Provider>
  );
}

export default App;
