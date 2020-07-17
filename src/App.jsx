import React from 'react';
import './App.scss';
import './scss/index.scss';
import {BackGround,ContentsBody} from './components';
import {SignUp, MainPage, Notice, NoticeDetail, WriterAdmin, LoginAdmin} from './pages';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <BackGround/>
      <Route exact path="/" render={()=>  <ContentsBody page={MainPage} />} />
      <Route exact path="/signup" render={() => <ContentsBody page={SignUp} />} />
      <Route exact path="/notice/page=:page" render={() => <ContentsBody page={Notice} />} />
      <Route exact path="/notice/detail/id=:id" render={() => <ContentsBody page={NoticeDetail} />} />
      <Route exact path="/admin/write" render={() => <ContentsBody page={WriterAdmin}/>} />
      <Route exact path="/admin/login" render={() => <ContentsBody page={LoginAdmin}/>} />
    </Router>
  );
}

export default App;
