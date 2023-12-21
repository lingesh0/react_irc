import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import SignUp from './SignUp';
import SignIn from './SignIn';
import SignInn from './AdminLogin';
import Header from './Header';
import ServicesPage from './ServicePage';
import AboutPage from './AboutPage';

function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
      <Routes> 
        <Route path='/home' element={<Header/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/admin' element={<SignInn/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/service' element={<ServicesPage/>} /> 
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;



