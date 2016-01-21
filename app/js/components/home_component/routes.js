'use strict';
import React from 'react';
import {Route,DefaultRoute,NotFoundRoute} from 'react-router';
import Layout from './layout';
import Home from './home';
import Go from './go';
import One from './one';
import Two from './two';
import Three from './three';
import Four from './four';

const routes = (
  <Route handler={Layout}>
    <DefaultRoute name="home" handler={Home}/>
    <Route name="go" path="/go" handler= {Go}/>
    <Route name="1" path="/1" handler={One}/>
    <Route name="2" path="/2" handler={Two}/>
    <Route name="3" path="/3" handler={Three}/>
     <Route name="4" path="/4" handler={Four}/>
  </Route>
);

export default routes;
