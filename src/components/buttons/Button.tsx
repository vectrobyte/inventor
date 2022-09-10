import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      type="button"
      className="text-white w-full bg-gray-700 hover:bg-gray-800 focus:bg-gray-700 font-medium rounded text-sm px-4 py-2.5"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
