import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OrderPage from './pages/OrderPage';
import OrdersListPage from './pages/OrdersListPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<OrderPage />} />
          <Route path="/orders" element={<OrdersListPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
