import React, { Component } from "react";
import { PostContainer } from "./containers";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Header, HeaderUnder, Writing, Login, DetailPost } from "./components";

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
              key="switch/detail"
              exact
              path="/detail"
              component={DetailPost}
            />
            <Route
              key="switch/writing"
              exact
              path="/writing"
              component={Writing}
            />
            <PostContainer />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
