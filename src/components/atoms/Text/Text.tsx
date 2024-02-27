import React from "react";
import clsx from "clsx";

interface TextProps {
  color?: string;
  size?: string;
  className?: string | string[];
  nature?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({
  color = "black",
  size = "sm",
  nature = "p",
  className,
  children,
}) => {
  const textClasses = clsx(`text-${color}`, `text-${size}`, className);

  const Component = nature as keyof JSX.IntrinsicElements;

  return <Component className={textClasses}>{children}</Component>;
};
