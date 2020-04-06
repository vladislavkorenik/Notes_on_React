import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { AboutPage } from "../pages/AboutPage/AboutPage";
import { Navbar } from "../components/Navbar/Navbar";
import { LoginPage } from "../pages/LoginPage/LoginPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container pt-4">
        <Switch>
          <Route path={"/"} exact component={HomePage} />
          <Route path={"/about"} exact component={AboutPage} />
          <Route path={"/login"} exact component={LoginPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Router;
