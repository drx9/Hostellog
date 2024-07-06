
import React from 'react';
import HomePage from './Homepage.jsx';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import WardenLogin from './wardenLogin.jsx';
import StudentLogin from './StudentLogin.jsx';
import Wdashboard from './Wdashboard.jsx'


const App = () => {
  return (
  <div>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/wardenLogin' element={<WardenLogin />} />
          <Route path='/studentLogin' element={<StudentLogin/>} />
          <Route path='/Wdashboard' element={<Wdashboard />} />
        </Routes>
      </Router>
      </div>
  );
}

export default App;

