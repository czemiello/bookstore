import React, { PropTypes } from 'react'
import BookListContainer from '../containers/book/list.jsx'
import {Layout, Menu, Icon, Breadcrumb} from 'antd';
const { Header, Sider, Content, Footer } = Layout;
import { browserHistory } from 'react-router';
import enUS from 'antd/lib/locale-provider/en_US';
import { LocaleProvider } from 'antd';

export default class BaseApp extends React.Component {
  state = {
    collapsed: false,
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }
  onClick = (e) =>{
    browserHistory.push(e.key);
  }
  render() {
      const {children, location} = this.props;
    return (
        <LocaleProvider locale={enUS}>
      <Layout>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu onClick={this.onClick} theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="/">
            <Icon type="book" />
            <span className="nav-text">Książki</span>
          </Menu.Item>
            <Menu.Item key="/login">
              <Icon type="user" />
              <span className="nav-text">Logowanie</span>
            </Menu.Item>
            <Menu.Item key="/rejestracja">
              <Icon type="rocket" />
              <span className="nav-text">Rejestracja</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ flex:1     }}>
          <Header style={{ background: '#fff', padding: 0, display:'flex', alignItems:'center' }} >
              <img style={{ width:'110px', margin:'10px'}} src={require('../images/logo.png')} />
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '12px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>{location.pathname}</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
             Grupa NS 2014 PB
          </Footer>
        </Layout>
      </Layout>
      </LocaleProvider>
  )
  }
}
