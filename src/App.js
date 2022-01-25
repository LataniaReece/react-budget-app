import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import TrackerScreen from './screens/TrackerScreen';

import { GlobalProvider } from './context/GlobalState';
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
          <GlobalProvider>
            <Routes>
              <Route path='/' element={<HomeScreen />} />
              <Route path='/tracker' element={<TrackerScreen />} />
            </Routes>
          </GlobalProvider>
        </main>
      </Router>
    </div>
  );
};

export default App;
