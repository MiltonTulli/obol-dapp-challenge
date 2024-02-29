import React from "react";
import { IconX } from "@tabler/icons-react";
import { Div, Text, Button } from "@/components";

interface Props {
  message: string;
  type: string;
  onClose: () => void;
}

export const Toast: React.FC<Props> = ({ message, type, onClose }) => {
  const getBackgroundColor = () => {
    switch (type) {
      case "success":
        return "bg-green-400";
      case "error":
        return "bg-red-500";
      default:
        return "bg-blue-500";
    }
  };

  return (
    <Div
      className={`relative overflow-hidden rounded-md shadow-md mb-2 p-4 bg-gray-50 w-72`}
    >
      <Div
        className={`absolute top-0 left-0 bottom-0 w-2 ${getBackgroundColor()}`}
      ></Div>

      <Div className="ml-3">
        <Div className="flex items-center justify-between">
          <Text className="text-sm text-[#091011] font-medium">{message}</Text>
          <Button
            variant="none"
            onClick={onClose}
            className="text-white outline-none"
          >
            <IconX className="h-5 w-5  text-[#091011]" />
          </Button>
        </Div>
      </Div>
    </Div>
  );
};
