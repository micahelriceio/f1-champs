import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Header from './components/Header';
import WorldChampions from './components/WorldChampions';
import ChampionsByYear from './components/ChampionsByYear';
import NoMatch from './components/NoMatch';
import { AppBase } from './components/styled/baseStyles';

const App = () => (
  <Router>
    <AppBase>
      <Header />
      <Switch>
        <Route exact path="/" component={WorldChampions} />
        <Route path="/:year/:champId" component={ChampionsByYear} />
        <Route component={NoMatch} />
      </Switch>
    </AppBase>
  </Router>
);

export default App;
