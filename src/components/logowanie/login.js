import React, {Component} from 'react';
import { Input, Button } from 'antd';
import { Link } from 'react-router'

export default class Login extends Component {
  render() {
    let inputStyle={
        marginBottom:"10px"
    }
    return (
      <div className="logowanie" style={{
          width:"320px",
          padding:"10px",
          margin:"auto"
      }}>        
        <Input style={inputStyle} type="email" placeholder="email"/>
        <Input style={inputStyle} type="password" placeholder="hasło"/>
        <div style={{textAlign:"right"}} >
            <Link to="/rejestracja">
                <Button type="ghost" icon="edit" style={{ marginRight:"10px" }}>Rejestracja</Button>
            </Link>
            <Button type="primary" icon="right">Zaloguj się</Button>
        </div>
      </div>
    );
  }
}
