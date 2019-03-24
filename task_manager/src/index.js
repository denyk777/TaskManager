import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";

import Base from './layouts/base/Base';
import Home from './pages/home/Home';
import Done from './pages/donePage/Done';
import Test from  './pages/testPage/Test';

import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Base>
      <Route exact path='/' component={Home}/>
      <Route path='/done' component={Done}/>
      <Route path='/test' component={Test}/>
    </Base>
  </BrowserRouter>,
  document.getElementById('root')
);
