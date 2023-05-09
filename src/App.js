import Firstnavbar from "./companent/usstnav/Firstnavbar";
import Telefon from "./companent/Kateqoriya/Telefon"
import Smart from "./companent/Kateqoriya/Smart"
import Tv from "./companent/Kateqoriya/Tv"
import Foto from "./companent/Kateqoriya/Foto"
import Noutbuk from "./companent/Kateqoriya/Noutbuk"
import Oyun from "./companent/Kateqoriya/Oyun"
import Mesiet from "./companent/Kateqoriya/Mesiet"
import Diger from "./companent/Kateqoriya/Diger"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Firstnavbar />

        <Switch>
          <Route path='/telefon' Kateqoriya={Telefon} exact>
            <Telefon/>
          </Route>
          <Route path='/smart' Kateqoriya={Smart} exact>
            <Smart/>
          </Route>
          <Route path='/tv' Kateqoriya={Tv} exact>
            <Tv/>
          </Route>
          <Route path='/foto' Kateqoriya={Foto} exact>
            <Foto/>
          </Route>
          <Route path='/noutbuk' Kateqoriya={Noutbuk} exact>
            <Noutbuk/>
          </Route>
          <Route path='/oyun' Kateqoriya={Oyun} exact>
            <Oyun/>
          </Route>
          <Route path='/mesiet' Kateqoriya={Mesiet} exact>
            <Mesiet/>
          </Route>
          <Route path='/diger' Kateqoriya={Diger} exact>
            <Diger/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
