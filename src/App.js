import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Cover from "./components/cover.js";
import LoremSection from "./components/loremSection.js";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route path="/" exact={true}>
            <Cover />
          </Route>
          <Router path="/lorem " exact={true}>
            <LoremSection />
          </Router>
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
