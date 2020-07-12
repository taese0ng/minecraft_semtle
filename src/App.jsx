import React from 'react';
import './App.scss';
import {BackGround,ContentsBody} from './components';
import {SignUp, MainPage, Notice} from './pages';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <BackGround/>
      <Route exact path="/" render={()=>  <ContentsBody page={MainPage} />} />
      <Route path="/signup" render={() => <ContentsBody page={SignUp} />} />
      <Route path="/notice" render={() => <ContentsBody page={Notice} />} />
    </Router>
  );
}

export default App;
