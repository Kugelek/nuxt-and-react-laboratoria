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
  const [globalFontSize, setGlobalFontsize] = useState(16);
  const [theme, setTheme] = useState("LIGHT");

  useEffect(() => {
    const storedFontsize = localStorage.getItem("fontsize");
    if (storedFontsize != null) setGlobalFontsize(storedFontsize);
  }, [globalFontSize]);

  // const getCurrentThemeSufix = () => {
  //   if (theme == '"LIGHT"') return "";
  //   if (theme == '"DARK"') return "--dark";
  // };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme != null) setTheme(storedTheme);
  }, [theme]);

  return (
    <div className="App" style={{ fontSize: globalFontSize }}>
      {/* <div
        style={{
          fontSize: `${globalFontSize}px`,
        }}
        class={getCurrentThemeSufix()}
      >
        {" "}
        {theme}
        {getCurrentThemeSuf()}
      </div> */}

      <Panel
        fontsize={globalFontSize}
        setFontsize={setGlobalFontsize}
        theme={theme}
        setTheme={setTheme}
      />
    </div>
  );
}

export default App;
