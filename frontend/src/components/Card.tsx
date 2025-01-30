import React from "react";

// Define types for the props
interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ className, children }) => (
  <div className={`border p-4 rounded-md shadow-lg ${className}`}>
    {children}
  </div>
);
