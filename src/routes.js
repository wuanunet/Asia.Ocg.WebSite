import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import DeckPage from './containers/DeckPage';
import BanPage from './containers/BanPage';
import SearchPage from './containers/SearchPage';
import CardPage from './containers/CardPage';
import LoginPage from './containers/LoginPage';


import NotFoundPage from './components/NotFoundPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="deck" component={DeckPage}/>
    <Route path="ban" component={BanPage}/>
    <Route path="login" component={LoginPage}/>
    <Route path="search/:query" component={SearchPage}/>
    <Route path="search/:query/:page" component={SearchPage}/>
    <Route path="card/:serialNumber" component={CardPage}/>


    <Route path="*" component={NotFoundPage}/>
  </Route>
);
