import classNames from 'classnames';
import React from 'react';

type ButtonProps = {
  variant?: "primary" | "secondary" | "danger" | "success";
  children: React.ReactNode;
  className?: string;
};

export const Button = ({variant = "primary", children, className}: ButtonProps) => {
  const color = {
      primary: "bg-light-primary dark:bg-dark-primary",
      secondary: "bg-light-secondary dark:bg-dark-secondary",
      danger: "bg-light-danger dark:bg-dark-danger",
      success: "bg-light-success dark:bg-dark-success"
  };

  const classes = classNames(
    "w-24 h-10 rounded-md text-white font-bold focus:outline-none",
    color[variant],
    className
  );

  return (
    <button className={classes}>
      {children}
    </button>
  );
};
