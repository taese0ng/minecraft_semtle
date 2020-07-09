import React from 'react';
import './App.scss';
import {BackGround,ContentsBody} from './components';
import {SignUp} from './pages';

function App() {
  return (
    <div>
      <BackGround/>
      <ContentsBody page={SignUp}/>
    </div>
  );
}

export default App;
