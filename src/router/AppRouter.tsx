import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import AppLayout from '../layouts/app-layout/AppLayout';
import Home from '../views/Home/Home';
import Model from '../views/Model/Model';
import ModelBuilder from '../views/ModelBuilder/ModelBuilder';

type AppRouterProps = React.HTMLAttributes<HTMLElement>;

const AppRouter: React.FC<AppRouterProps> = () => {
  return (
    <Routes>
      {/* Scoping app layout to app routes only */}
      <Route
        path="/*"
        element={
          <AppLayout>
            <Routes>
              <Route path="/" element={<Navigate replace to="/home" />} />
              <Route path="/home" element={<Home />} />

              <Route path="/model/" element={<Navigate replace to="/home" />} />
              <Route path="/model/:modelId" element={<Model />} />

              <Route path="/model-builder" element={<ModelBuilder />} />
            </Routes>
          </AppLayout>
        }
      />
    </Routes>
  );
};

export default AppRouter;
