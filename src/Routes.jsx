import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home/Index';
import { Repositories } from './pages/Repositories/Index';

function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repositories" element={<Repositories />} />
        <Route path="*" element={<h1>Nada aqui</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default MyRoutes;
