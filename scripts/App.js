import React, {Component} from 'react';
import LoginScreen from './screens/login_screen';
import RejestracjaScreen from './screens/rejestracja_screen';
import Test from './test';
import { Router, Route, Link, browserHistory } from 'react-router'
export default class App extends Component {
  render() {
    return (
        <Router history={browserHistory}>
          <Route path="/" component={LoginScreen}>
          </Route>
            <Route path="/rejestracja" component={RejestracjaScreen}></Route>
        </Router>
    );
  }
}
