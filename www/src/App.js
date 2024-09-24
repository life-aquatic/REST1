import "./App.css";
import HakuForm from "./components/HakuForm.js";
import LisForm from "./components/LisForm.js";

// Tämä komponentti renderöi hakulomakkeen ja lisäyslomakkeen
function App() {
  return (
    <div className="App">
      <div className="Box">
        <h4>Haku</h4>
        <HakuForm />
        <div class="divider"></div>
        <h4>Uuden sanan lisääminen</h4>
        <LisForm />
      </div>
    </div>
  );
}

export default App;
