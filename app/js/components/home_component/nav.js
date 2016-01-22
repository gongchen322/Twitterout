'use strict';
import React from 'react';
import Router from 'react-router';

class Nav extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div id='cssmenu'>
          <ul>
           <li><Router.Link to="home">Home</Router.Link></li>
           <li><Router.Link to="2">Products</Router.Link></li>
           <li><Router.Link to="3">Company</Router.Link></li>
           <li><Router.Link to="4">Contact</Router.Link></li>
          </ul>
        </div>
      </div>
    );
  }
};

export default Nav;
