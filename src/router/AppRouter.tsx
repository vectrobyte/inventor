import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../views/Home/Home';
import Model from '../views/Model/Model';
import ModelBuilder from '../views/ModelBuilder/ModelBuilder';

type AppRouterProps = React.HTMLAttributes<HTMLElement>;

const AppRouter: React.FC<AppRouterProps> = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/model/:modelId" element={<Model />} />
      <Route path="/model-builder" element={<ModelBuilder />} />
    </Routes>
  );
};

export default AppRouter;
