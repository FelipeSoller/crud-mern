import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { getParticipants } from './actions/participants';
import Participants from './components/Participants/Participants';
import Form from './components/Form/Form';

import './styles.css';
 
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getParticipants());
  }, [dispatch]);

  return (   
    <div>
      <Form />
      <Participants />   
    </div>  
  );
}

export default App;
