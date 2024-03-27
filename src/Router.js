import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './views/Login';
import Signup from './views/Signup';

function RouterComponent() {
    return (
      <Router>
        <div>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </Router>
    );
}
  
export default RouterComponent;
