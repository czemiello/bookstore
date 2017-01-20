import React from 'react';
import { Route, IndexRoute } from 'react-router';
import BaseApp from './app/BaseApp';
import ListBooksApp from './app/ListBooksApp.jsx';
import LoginApp from './app/LoginApp.jsx'
import RejestracjaApp from './app/RejestracjaApp.jsx'
export default (
  <Route path="/" component={BaseApp}>
      <IndexRoute component={ListBooksApp} />
      <Route path="login" component={LoginApp} />
      <Route path="rejestracja" component={RejestracjaApp} />
  </Route>
);
