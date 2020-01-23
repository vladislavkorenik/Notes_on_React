import React from "react";
import Router from "./Router/Router";
import { AlertState } from "./context/alert/AlertState";
import { FirebaseState } from "./context/firebase/FirebaseState";
import { SwitchState } from "./context/switch/SwitchState";

function App() {
  return (
    <SwitchState>
      <FirebaseState>
        <AlertState>
          <Router />
        </AlertState>
      </FirebaseState>
    </SwitchState>
  );
}

export default App;
