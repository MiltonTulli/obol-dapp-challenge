import { FC, InputHTMLAttributes } from "react";
import { IconX } from "@tabler/icons-react";
import clsx from "clsx";
interface BaseInputProps extends InputHTMLAttributes<HTMLInputElement> {
  clearable?: boolean;
  onClear?: () => void;
}

export const BaseInput: FC<BaseInputProps> = ({
  className = "",
  ...inputProps
}) => {
  return (
    <input
      {...inputProps}
      className={clsx(
        "block w-[100%] h-[100%] rounded-md border-2 border-solid border-[#243D42] bg-[#111F22] py-1.5 pl-3 pr-8 text-[#D9EEF3] placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 outline-none",
        className
      )}
    />
  );
};
