import React from "react";
import Router from "./Router/Router";
import { AlertState } from "./context/alert/AlertState";
import { FirebaseState } from "./context/firebase/FirebaseState";
import { SwitchState } from "./context/switch/SwitchState";
import { LoginState } from "./context/login/LoginState";


function App() {
  return (
    <SwitchState>
      <FirebaseState>
        <AlertState>
          <LoginState>
            <Router />
          </LoginState>
        </AlertState>
      </FirebaseState>
    </SwitchState>
  );
}

export default App;
