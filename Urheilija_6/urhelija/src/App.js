import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Urheilijatiedot from "./components/Urheilijatiedot";
import MuokkaaUrheilijatieto from "./components/MuokkaaUrheilijatieto";
import Ylatunniste from "./components/Ylatunniste";
import Tietoa from "./components/pages/Tietoa";
import LisaaUrheilijatieto from "./components/LisaaUrheilijatieto";
import "bootstrap/dist/css/bootstrap.css";

import GlobalState from "./context/GlobalState";

function App() {
  return (
    <GlobalState>
      <Router>
        <div className="App">
          <div className="container">
            <Ylatunniste turvataso="keskisuuri" />
            <Routes>
              <Route path="/" element={<Urheilijatiedot />} />

              <Route
                path="/urheilijatieto/lisaa"
                element={<LisaaUrheilijatieto />}
              />

              <Route
                path="/urheilijatieto/muokkaa/:id"
                element={<MuokkaaUrheilijatieto />}
              />

              <Route path="/tietoa" element={<Tietoa />} />
            </Routes>
          </div>
        </div>
      </Router>
    </GlobalState>
  );
}

export default App;
