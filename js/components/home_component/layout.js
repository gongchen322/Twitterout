'use strict';
import React from 'react';
import Router from 'react-router';
import Footer from './footer';
import Header from './header';
import Nav from './nav';

class Layout extends React.Component {
  render() {
    return (
      <div id='root'>
      <Header />
      <Nav />
      <Router.RouteHandler/>
      <Footer />
    </div>
    );
  }
}

export default Layout;
