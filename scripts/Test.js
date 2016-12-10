import React, {Component} from 'react';
import Login from './logowanie/login';
import Rejestracja from './logowanie/rejestracja';
import Newsletter from './newsletter/newsletter';
import Szukaj from './szukaj/szukaj';
import Haslo from './logowanie/haslo';
import Kontakt from './logowanie/kontakt';
export default class Test extends Component {
  render() {
    return (
      <div>
        <Login />
        <Rejestracja />
        <Haslo />
        <Newsletter />
        <Szukaj />
        <Kontakt />
      </div>
    );
  }
}
