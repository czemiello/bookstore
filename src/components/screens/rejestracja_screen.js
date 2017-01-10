import React, {Component} from 'react';
import Rejestracja from '../logowanie/rejestracja';
export default class RejestracjaScreen extends Component {
  render() {
    return (
      <div style={{
        display:"flex",
        alignItems:"center",
        height:"100%"
      }}>
        <div style={{
          width:"320px",
          margin:"20px auto"
        }}>
            <img style={{
              width:"100%"
            }} src="/static/logo.png" />
            <Rejestracja />
        </div>
      </div>
    );
  }
}
