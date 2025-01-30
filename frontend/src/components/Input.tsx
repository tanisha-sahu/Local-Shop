import React from "react";

// Define types for Input props
interface InputProps {
  type: string; // Add type support
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string; // Optional className for styling
}

export const Input: React.FC<InputProps> = ({ type, placeholder, value, onChange, className }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`border p-2 rounded-md ${className}`}
    />
  );
};
