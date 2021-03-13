import React from 'react';
import './App.css';

import PrivateRoute from './Components/utils/PrivateRoute';


function App() {
  return (
    <div>
      <PrivateRoute />
    </div>
  );
}

export default App;