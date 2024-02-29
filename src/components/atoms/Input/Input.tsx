import { FC, InputHTMLAttributes } from "react";
import { IconX } from "@tabler/icons-react";
import clsx from "clsx";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  clearable?: boolean;
  onClear?: () => void;
}

export const Input: FC<InputProps> = ({
  clearable = false,
  onClear = () => {},
  className = "",
  ...inputProps
}) => {
  return (
    <div className={clsx("relative flex-1 max-w-[635px]", className)}>
      <input
        {...inputProps}
        placeholder="Search.."
        className="block w-[100%] rounded-md border-2 border-solid border-[#243D42] bg-[#111F22] py-1.5 pl-1 pr-8 text-[#D9EEF3] placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 outline-none"
      />
      {clearable && inputProps.value && (
        <button
          type="button"
          onClick={onClear}
          className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
        >
          <IconX className="text-[#5c777c] hover:text-white" />
        </button>
      )}
    </div>
  );
};
