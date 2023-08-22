import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import SecondPage from './components/SecondPage';

const App: React.FC = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={SignUp} />
          <Route path="/second-page" Component={SecondPage} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;

