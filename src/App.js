import React, { Component } from "react";
import { PostContainer } from "./containers";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Header, HeaderUnder, Writing, Login } from "./components";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <HeaderUnder />
        <BrowserRouter>
          <Switch>
            <Route key="switch/login" exact path="/login" component={Login} />
            <Route
              key="switch/writing"
              exact
              path="/writing"
              component={Writing}
            />
          </Switch>
        </BrowserRouter>
        <PostContainer />
      </div>
    );
  }
}

export default App;
