import React, { useState } from 'react';
import logo from './logo.svg';
//import './App.css';
import { Login } from './Login';
import { CRUD } from './CRUD';

//import { Registrations_Form } from './Registrations_Form';







function App() {
  // const {currentForm, setCurrentForm} = useState('login');

  // const toggleForm = (formName) => {
  //   setCurrentForm(formName);
  // }

  return (
    <div className="App">
      <header className='App-header'>
      {/*<Login />*/}
      <CRUD />
      </header>
    </div>
  );
}

export default App;
