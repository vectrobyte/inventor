import React from 'react';

type WarningToastProps = React.HTMLAttributes<HTMLElement>;

const WarningToast: React.FC<WarningToastProps> = ({ children }) => {
  return (
    <div className="text-gray-600 flex items-start">
      <p className="mr-2">⚠</p>
      {children}
    </div>
  );
};

export default WarningToast;
