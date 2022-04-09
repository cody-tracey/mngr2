import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Pages
import Home from './Components/Home/home';
import Login from './Components/Login/login';
import Landing from './Components/Landing/landing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
