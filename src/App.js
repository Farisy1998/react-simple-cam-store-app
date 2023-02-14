import React from 'react';
import Items from './components/items';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar';
import NotFound from './components/notFound';
import Customers from './components/customers';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import './App.css';
import ItemForm from './components/itemForm';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<Items />} />
        <Route path="/items/:id" element={<ItemForm />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
