import React from "react";
import Cover from "./components/cover.js";
import LoremSection from "./components/loremSection.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route path="/" exact={true}>
            <Cover />
          </Route>
          <Router path="/lorem" exact={true}>
            <LoremSection />
          </Router>
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
