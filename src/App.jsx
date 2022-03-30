import React from 'react';
import Routes from './Routes';
import { GlobalStyles } from './utils/GlobalStyles';
import { Toastify } from './components/Toastify/Index';

function App() {
  return (
    <div className="app">
      <GlobalStyles />
      <Toastify />
      <Routes />
    </div>
  );
}

export default App;
