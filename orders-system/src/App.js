import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import OrderPage from './pages/OrderPage';
import OrdersListPage from './pages/OrdersListPage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<OrderPage />} />
            <Route path="/orders" element={<OrdersListPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
