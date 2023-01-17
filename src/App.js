import "./App.css";
import Contratos from "./components/Contratos/Contratos";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <h1>Listado de Contratos</h1>
        <Contratos />
      </GlobalProvider>
    </div>
  );
}

export default App;
