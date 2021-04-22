import React from 'react';

import Participants from './components/Participants/Participants';
import Form from './components/Form/Form';

import './styles.css';
 
const App = () => {
  return (   
    <div>
      <Form />
      <Participants />   
    </div>  
  );
}

export default App;
