import React from "react";

// Define types for Button props
interface ButtonProps {
  onClick: () => void;
  disabled?: boolean; // Make disabled optional
  className?: string; // Optional className for styling
  children: React.ReactNode; // The content inside the button
}

export const Button: React.FC<ButtonProps> = ({ onClick, disabled, className, children }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-blue-500 text-white p-2 rounded-md ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {children}
    </button>
  );
};
