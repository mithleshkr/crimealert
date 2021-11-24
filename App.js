import React from 'react';
import SignInOutContainer from './containers/index';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Posts from './screens/Posts';
import Dashboard from './screens/Dashboard';
import Profile from './screens/Profile';


function App() {
  return (
    <div>
    <Router>
      <Routes>
      
      <Route exact path='/' element={<SignInOutContainer />} />
      <Route  path='/dashboard' element={<Dashboard />} />
      <Route  path='/post' element={<Posts />} />  
      <Route  path='/profile' element={<Profile />} />
      </Routes>
     

  </Router>
  </div>
  )
}

export default App
