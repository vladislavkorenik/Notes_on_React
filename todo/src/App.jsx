import React from "react";
import Router from "./Router/Router";
import { AlertState } from "./context/alert/AlertState";
import { FirebaseState } from "./context/firebase/FirebaseState";

function App() {
  return (
    <FirebaseState>
      <AlertState>
        <Router />
      </AlertState>
    </FirebaseState>
  );
}

export default App;
