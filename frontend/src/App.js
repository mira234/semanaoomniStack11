//import React, { useState } from 'react';

import React from 'react';

import './global.css';

//import Header from './Header'

//import Logon from './pages/Logon'

import Routes from './routes'

//JSX(JavaScript XML)

function App() {
  //Array [valor, funcaoDeAtualização]
  /*const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);

  }*/

  return (
    <Routes />
    //<Logon />


    /*
    <Header title="Semana OmniStack" />
    */
    /*
     <Header>
       Semana OmniStack
     </Header>*/
    /*<div>
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>Incrementar</button>
    </div>*/

  );
}

export default App;
