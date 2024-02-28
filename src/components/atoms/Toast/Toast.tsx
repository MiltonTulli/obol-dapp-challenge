import React from "react";
import { IconX } from "@tabler/icons-react";

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
    <div
      className={`relative overflow-hidden rounded-md shadow-md mb-2 p-4 bg-gray-50 w-72`}
    >
      <div
        className={`absolute top-0 left-0 bottom-0 w-2 ${getBackgroundColor()}`}
      ></div>

      <div className="ml-3">
        <div className="flex items-center justify-between">
          <p className="text-sm text-[#091011] font-medium">{message}</p>
          <button
            onClick={onClose}
            className="text-white focus:outline-none focus:ring focus:border-blue-300"
          >
            <IconX className="h-5 w-5  text-[#091011]" />
          </button>
        </div>
      </div>
    </div>
  );
};
