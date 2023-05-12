import Firstnavbar from "./companent/usstnav/Firstnavbar";
import Telefonlist from "./companent/Kateqoriya/Home/Telefonlist"
import SmartSaatlar from "./companent/Kateqoriya/SmartSaatlar/SmartSaatlar"
import TvS from "./companent/TVandAudio/TvS"
import Foto from "./companent/Kateqoriya/Foto"
import Noutbuk from "./companent/Kateqoriya/Noutbuk"
import Oyun from "./companent/Kateqoriya/Oyun"
import Mesiet from "./companent/Kateqoriya/Mesiet"
import Diger from "./companent/Kateqoriya/Diger"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./companent/footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Firstnavbar />

        <Switch>
          <Route path='/telefon' Kateqoriya={Telefonlist} exact>
            <Telefonlist/>
          </Route>
          <Route path='/smart' Kateqoriya={SmartSaatlar} exact>
            <SmartSaatlar/>
          </Route>
          <Route path='/tv' Kateqoriya={TvS} exact>
            <TvS/>
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

      <Footer/>
    </>
  );
}

export default App;
