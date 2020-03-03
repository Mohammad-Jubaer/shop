import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";

import "./App.css";
const Hats = props => <h1 className='retro' onClick={() => props.history.push("/")}>HatsPAGE</h1>;
const Jackets = props => <h1 className='retro' onClick={() => props.history.push("/")}>Jackets</h1>;
const Sneakers = props => <h1 className='retro' onClick={() => props.history.push("/")}>Sneakers</h1>;
const Mens = props => <h1 className='retro' onClick={() => props.history.push("/")}>Mens</h1>;
const Womens = props => <h1 className='retro' onClick={() => props.history.push("/")}>Womens</h1>;

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={Hats} />
        <Route path="/jackets" component={Jackets} />
        <Route path="/sneakers" component={Sneakers} />
        <Route path="/mens" component={Mens} />
        <Route path="/womens" component={Womens} />
      </Switch>
    </div>
  );
}

export default App;
