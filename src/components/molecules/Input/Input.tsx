import { FC, InputHTMLAttributes } from "react";
import { IconX } from "@tabler/icons-react";
import clsx from "clsx";
import { BaseInput, Div, Button } from "@/components";

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
    <Div className={clsx("relative flex-1 max-w-[635px]", className)}>
      <BaseInput {...inputProps} />
      {clearable && inputProps.value && (
        <Button
          variant="none"
          type="button"
          onClick={onClear}
          className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
        >
          <IconX className="text-[#5c777c] hover:text-white" />
        </Button>
      )}
    </Div>
  );
};
