import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import TaskPage from './containers/TaskPage'

export default (
  <Route path="/" component={TaskPage}>
  </Route>
);
