import React from 'react';
import '../css/App.scss';
import Result from './Result';
import Summary from './Summary';

function App(){
  return(
    <div className='wrapper'>
      <Result/>
      <Summary/>
    </div>
  )
}

export default App