import React from 'react';

type SuccessToastProps = React.HTMLAttributes<HTMLElement>;

const SuccessToast: React.FC<SuccessToastProps> = ({ children }) => {
  return (
    <div className="text-gray-600 flex items-start">
      <p>✓</p>
      {children}
    </div>
  );
};

export default SuccessToast;
