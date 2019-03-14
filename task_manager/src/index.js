import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";

import Base from './layouts/base/Base';
import Home from './pages/home/Home';
import Done from './pages/donePage/Done';

import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Base>
      <Route exact path='/' component={Home}/>
      <Route path='/done' component={Done}/>
    </Base>
  </BrowserRouter>,
  document.getElementById('root')
);
