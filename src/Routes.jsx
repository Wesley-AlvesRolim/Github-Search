import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home/Index';
import { Repositories } from './pages/Repositories/Index';
import { PageNotFound } from './pages/PageNotFound/Index';

function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repositories" element={<Repositories />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MyRoutes;
