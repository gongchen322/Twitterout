'use strict';
import React from 'react';
import {Route,DefaultRoute,NotFoundRoute} from 'react-router';
import Layout from './layout';
import Home from './home';
import Go from './go';


const routes = (
  <Route handler={Layout}>
    <DefaultRoute name="home" handler={Home}/>
    <Route name="go" path="/go" handler= {Go}/>
  </Route>
);

export default routes;
