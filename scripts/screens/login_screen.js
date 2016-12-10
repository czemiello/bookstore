import React, {Component} from 'react';
import Login from '../logowanie/login';
export default class LoginScreen extends Component {
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
            <Login />
        </div>
      </div>
    );
  }
}
