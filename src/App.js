import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Pages
import Home from './Components/Home/home';
import Login from './Components/Login/login';
import Landing from './Components/Landing/landing';

//GLobal Context
import AppContext from './AppContext';

function App() {

  //Global Variables
  const [username, setUsername] = useState('');
  const [value1, setValue1] = useState(false);
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');

  const updateUsername = (str) => {
    setUsername(str);
  };

  const updateValue1 = (login) => {
    login ? setValue1(true) : setValue1(false);
  };

  const updateValue2 = (str) => {
    setValue2(str);
  };
  const updateValue3 = (str) => {
    setValue3(str);
  };

  const userProfile = {
    username: username,
    setting1: value1,
    setting2: value2,
    setting3: value3,
    updateUsername,
    updateValue1,
    updateValue2,
    updateValue3,
  }


  return (
    <AppContext.Provider value={userProfile}>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
