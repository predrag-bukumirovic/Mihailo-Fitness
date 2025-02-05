import React, { useState, useEffect } from "react";
import "./global.css";
import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Biografija from "./pages/Biografija/Biografija";
import Contact from "./pages/Kontakt/Contact";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home/Home";
import dietPlan from "./components/price/dietPlan/dietPlan";
import onlineTraining from "./components/price/onlineTraining/onlineTraining";
import liveTraining from "./components/price/liveTraining/liveTraining";
import GoTop from "./components/scrollToTop/scrollToTop";
import NotFound from "./pages/NotFound/NotFound";
import ReactGa from "react-ga";
import CallButton from "./components/CallButton";

function App() {
  //Google analytics start
  useEffect(() => {
    ReactGa.initialize("G-G4HP39RKF0");
    ReactGa.pageview("/");
  }, []);

  //Google analytics end

  const [menuOpen, setMenuOpen] = useState(false);

  const closeAllMenuOnEsc = (e) => {
    e = e || window.event;

    if (e.kay === "Escape" || e.keyCode === 27) {
      setMenuOpen(false);
    }
  };

  window.addEventListener("keydown", closeAllMenuOnEsc);

  return (
    <Router>
      <div className="app">
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <GoTop />
        <CallButton/>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/biografija/" component={Biografija} />
          <Route path="/kontakt/" component={Contact} />
          <Route path="/plan-ishrane/" component={dietPlan} />
          <Route path="/online-trening/" component={onlineTraining} />
          <Route path="/trening-uzivo/" component={liveTraining} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
