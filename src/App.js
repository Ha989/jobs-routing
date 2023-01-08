import React from 'react';
import './App.css';
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Home from './pages/Home';
import { useAuth } from './auth/AuthContext';
import Layout from './pages/Layout';
import Login from "./pages/Login";
import JobDetailModal from './components/JobDetailModal';
import LoginModal from './components/LoginModal';
import ThemeProvider from './theme/theme';



function App() {
  const location = useLocation();
  const state = location.state;

  function RequireAuth({ children }) {
    let auth = useAuth();
    if(!auth.user) {
      console.log("user status:", auth.user);
      return <Navigate to="/login" state={{ from: location}} replace />
    }
    return children;
  }

  return (
    <ThemeProvider>
     <>
     <Routes 
       location={
        state?.backgroundLocation || location
       }
       >
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/login' element={<Login/>} />
        </Route>
        <Route path='*' element={<p>There's nothing here!</p>} />
        <Route path='/job/:id' 
           element={
            <RequireAuth>
            <JobDetailModal />
            </RequireAuth>
            }
        ></Route>
     </Routes>
      {state?.backgroundLocation && (
        <Routes>
        <Route path='/login' element={<Login/>} />
       </Routes>
      )}
      
     </>
     </ThemeProvider>
  );
}

export default App;
