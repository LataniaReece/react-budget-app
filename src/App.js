import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import './App.scss';

const App = () => {
  return (
    <div>
      <Router>
        <main
          style={{
            height: '100%',
            width: '100%',
            minWidth: '350px',
          }}
        >
          <Routes>
            <Route path='/' element={<HomeScreen />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
};

export default App;
