import React, {Component} from 'react';
import { Input, Button } from 'antd';
import { Link } from 'react-router';
export default class Rejestracja extends Component {
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
        <h1 style={{
            textAlign:"center",
            marginBottom:"20px"
        }}>Zarejestruj się</h1>
        <Input style={inputStyle} type="email" placeholder="username"/>
        <Input style={inputStyle} type="password" placeholder="hasło"/>
        <Input style={inputStyle} type="password" placeholder="powtórz hasło"/>
        <Input style={inputStyle} type="text" placeholder="imię"/>
        <Input style={inputStyle} type="text" placeholder="nazwisko"/>
        <Input style={inputStyle} type="text" placeholder="ulica i nr domu"/>
        <Input style={inputStyle} type="text" placeholder="kod pocztowy"/>
        <Input style={inputStyle} type="text" placeholder="miasto"/>
        <Input style={inputStyle} type="text" placeholder="nr telefonu"/>
        <div style={{textAlign:"right"}} >
            <Link to="/">
                <Button type="ghost" icon="left" style={{ marginRight:"10px" }}>Mam już konto</Button>
            </Link>
            <Button type="primary" icon="right">Dalej</Button>
        </div>
      </div>
    );
  }
}
