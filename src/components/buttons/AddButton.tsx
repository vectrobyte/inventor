import React from 'react';

type AddButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const AddButton: React.FC<AddButtonProps> = ({ onClick }) => {
  return (
    <button
      type="button"
      className="fixed bottom-10 right-10 text-white h-20 w-20 rounded-full bg-gray-700 hover:bg-gray-800 focus:bg-gray-700 font-light rounded text-5xl flex items-center justify-center"
      onClick={onClick}
    >
      <span className="relative bottom-1">+</span>
    </button>
  );
};

export default AddButton;
