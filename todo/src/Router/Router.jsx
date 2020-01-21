import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { AboutPage } from "../pages/AboutPage/AboutPage";
import { Navbar } from "../components/Navbar/Navbar";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path={"/"} exact component={HomePage} />
        <Route path={"/about"} exact component={AboutPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
