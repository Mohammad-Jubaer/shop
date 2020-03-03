import React from "react";
import { Route, Switch ,Redirect} from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
import Header from './components/header/header.component'
import Signinout from './pages/signinsignout/signinsignout';

import "./App.css";

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/signinout" component={Signinout} />
        <Redirect  to='/' />
      </Switch>
    </div>
  );
}

export default App;
