/*
 * Copyright 2018 Transposit Corporation. All Rights Reserved.
 */

import * as React from "react";
import "./App.css";
import AppContent from "./AppContent";
import { BrowserRouter as Router } from "react-router-dom";

/*
 * Top level component for the app, simply wraps the content in a Router
 */
class App extends React.Component<{}, {}> {
  render() {
    return (
      <Router>
        <AppContent />
      </Router>
    );
  }
}

export default App;
