"use client";
import React, { useState, useContext, createContext, useCallback } from "react";
import ReactDOM from "react-dom";
import { ToastContainer } from "@/components";
import { type Toast } from "@/types";

type ContextValue = {
  toast: (message: string, type?: string, duration?: number) => void;
} | null;
export const ToastContext = createContext<ContextValue>(null);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = useCallback(
    (message: string, type = "success", duration = 3000) => {
      const id = Date.now();

      setToasts((prevToasts) => [...prevToasts, { id, message, type }]);

      setTimeout(() => {
        hideToast(id);
      }, duration);
    },
    []
  );

  const hideToast = (id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  const contextValue = {
    toast,
  };

  if (typeof document !== "undefined") {
    return (
      <ToastContext.Provider value={contextValue}>
        {children}
        {ReactDOM.createPortal(
          <ToastContainer toasts={toasts} onClose={hideToast} />,
          document.body
        )}
      </ToastContext.Provider>
    );
  } else {
    return null;
  }
};
