import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OrderPage from './pages/OrderPage';
import OrdersListPage from './pages/OrdersListPage';

function App() {
  const [confirmedOrders, setConfirmedOrders] = useState([]);
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route
            path="/"
            element={
              <OrderPage
                confirmedOrders={confirmedOrders}
                setConfirmedOrders={setConfirmedOrders}
              />
            }
          />
          <Route
            path="/orders"
            element={<OrdersListPage confirmedOrders={confirmedOrders} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
