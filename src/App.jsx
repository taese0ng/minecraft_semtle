import React from 'react';
import './App.scss';
import './scss/index.scss';
import {BackGround,ContentsBody} from './components';
import {SignUp, MainPage, Notice, NoticeDetail, WriterAdmin} from './pages';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <BackGround/>
      <Route exact path="/" render={()=>  <ContentsBody page={MainPage} />} />
      <Route exact path="/signup" render={() => <ContentsBody page={SignUp} />} />
      <Route exact path="/notice" render={() => <ContentsBody page={Notice} />} />
      <Route exact path="/notice/noticeDetail" render={() => <ContentsBody page={NoticeDetail} />} />
      <Route exact path="/writerAdmin" render={() => <ContentsBody page={WriterAdmin}/>} />
    </Router>
  );
}

export default App;
