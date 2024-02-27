import { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: FC<InputProps> = ({ ...inputProps }) => {
  return (
    <input
      {...inputProps}
      placeholder="Search.."
      className="block flex-1 max-w-[635px] rounded-md border-2 border-solid border-[#243D42] bg-[#111F22] py-1.5 pl-1 text-[#D9EEF3] placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 outline-none "
    />
  );
};
// md:min-w-[635px]
