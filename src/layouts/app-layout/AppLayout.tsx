import * as React from 'react';

import Navbar from './components/Navbar';

type Props = React.HTMLAttributes<HTMLElement>;

const AppLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="app-layout">
      <Navbar />

      <div className="container mx-auto">{children}</div>
    </div>
  );
};

export default AppLayout;
