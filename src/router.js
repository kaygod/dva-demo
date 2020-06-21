import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import HomePage from './routes/HomePage';
import DetailPage from "./routes/DetailPage";
import LoginPage from "./routes/LoginPage";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/detail/:id" component={DetailPage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
