import logo from "./logo.svg";
import "./App.css";
import HelloWorld from "./components/HelloWorld";
import Inf from "./components/Inf";
import Name from "./components/Name";
import Lab from "./components/Lab1";
import Counter from "./components/Counter";
import Panel from "./components-lab1/MainPanel/MainPanel";

function App() {
  return (
    <div className="App">
      <Panel />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <HelloWorld name={"Kuba"} />
        <Name />
        <Lab />
        <Inf />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Counter />
      </header> */}
    </div>
  );
}

export default App;
