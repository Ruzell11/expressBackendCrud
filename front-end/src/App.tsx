import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './components/login-page';
import SignUpPage from './components/signup-page';

import TodoLayout from './components/Todo';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/signup-page' element={<SignUpPage/>}/>
        <Route path='/todo-app' element={<TodoLayout/>}/>
        </Routes>
    </div>
  );
}

export default App;
