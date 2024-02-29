import clsx from "clsx";
import { FC, ReactNode, ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "filled" | "subtle" | "outlined" | "none";
}

const getButtonClasses = (
  variant: Props["variant"],
  customClasses: string = ""
): string => {
  if (variant === "none") return customClasses;
  const isFilled = variant === "filled";
  const isOutlined = variant === "outlined";

  return clsx(
    "px-6 py-3 rounded-lg text-[#091011] font-semibold shadow-sm flex",
    isFilled
      ? "bg-[#2FE4AB] border-0 hover:bg-[#82EDCC]"
      : isOutlined
      ? "bg-transparent border border-[#2FE4AB] hover:bg-[#2FE4AB] hover:text-white"
      : "bg-transparent hover:font-bold text-[#2FE4AB]",
    customClasses
  );
};

export const Button: FC<Props> = ({
  children,
  variant = "filled",
  ...buttonProps
}) => {
  const buttonClasses = getButtonClasses(variant, buttonProps.className);

  return (
    <button {...buttonProps} className={buttonClasses}>
      {children}
    </button>
  );
};
