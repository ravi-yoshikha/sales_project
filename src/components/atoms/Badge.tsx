import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "success" | "warning" | "error";
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "primary",
}) => {
  const variantStyles = {
    primary: "bg-blue-100 text-blue-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    error: "bg-red-100 text-red-800",
  };

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${variantStyles[variant]}`}
    >
      {children}
    </span>
  );
};
