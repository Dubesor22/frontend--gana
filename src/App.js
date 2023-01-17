import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Contratos from "./components/Contratos/Contratos";
import { GlobalProvider } from "./context/GlobalState";
import EditContrato from "./components/Contratos/EditContrato/EditContrato";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalProvider>
          <h1>Listado de Contratos</h1>
          <Routes>
            <Route path="/" element={<Contratos />} />
            <Route path="/contrato/:_id" element={<EditContrato />} />
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
