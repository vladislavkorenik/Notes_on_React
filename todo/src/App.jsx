import React from "react";
import Router from "./Router/Router";
import { AlertState } from "./context/alert/AlertState";

function App() {
  return (
    <AlertState>
      <Router />
    </AlertState>
  );
}

export default App;
