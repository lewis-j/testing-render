import logo from "./logo.svg";
import "./App.css";
import { Tester } from "./components/Tester";
import { Route, Routes } from "react-router-dom";

function MyApp() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<MyApp />} />
      <Route path="/test" element={<Tester />} />
    </Routes>
  );
}

export default App;
