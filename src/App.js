import React from "react";
import Items from "./components/items";
import { Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./components/navBar";
import NotFound from "./components/notFound";
import Customers from "./components/customers";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import "./App.css";
import ItemForm from "./components/itemForm";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/items/:id" render={(props) => <ItemForm {...props} />} />
        <Route exact path="/items" render={() => <Items />} />
        <Route path="/customers" render={() => <Customers />} />
        <Route path="/login" render={(props) => <LoginForm {...props} />} />
        <Route path="/register" render={() => <RegisterForm />} />
        <Redirect exact from="/" to="/items" />
        <Route path="/*" render={() => <NotFound />} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
