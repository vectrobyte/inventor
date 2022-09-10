import * as React from 'react';

import Navbar from './components/navbar/Navbar';

type Props = React.HTMLAttributes<HTMLElement>;

const AppLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="app-layout">
      <Navbar />

      {children}
    </div>
  );
};

export default AppLayout;
