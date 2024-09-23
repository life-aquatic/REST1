import logo from "./logo.svg";
import "./App.css";
import HakuForm from "./components/HakuForm.js";
import LisForm from "./components/LisForm.js";

function App() {
  return (
    <div className="App">
      <HakuForm />
      <LisForm />
      <header className="App-header">
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

export default App;
