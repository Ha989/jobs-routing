import React from 'react';
import './App.css';
import JobCard from './components/JobCard';
import LoginForm from './components/LoginForm';
import SearchAppBar from './components/SearchAppBar';
import Home from './pages/Home';

function App() {
  return (
     <div> 
      <SearchAppBar />
      <Home />
      
     </div>
  );
}

export default App;
