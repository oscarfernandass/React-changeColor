import './App.css';
import { useState } from 'react';
function App() {
  const[col,SetCol]=useState('red');
  const[val,SetVal]=useState('BLUE');
  const Change=()=>{
    if(col==='red'){
      SetCol('blue');
      SetVal('RED');
    }
    if(col==='blue'){
      SetCol('red');
      SetVal('BLUE');
    }
  };
  return (
   <div id="main">
    <div id="color" style={{backgroundColor:col}}>

    </div>
    <input id="but" type="button" value={val} onClick={Change}></input>
   </div>
  );
};
export default App;
