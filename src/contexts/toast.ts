import { createContext } from "react";

type ContextValue = {
  toast: (message: string, type?: string, duration?: number) => void;
} | null;

export const ToastContext = createContext<ContextValue>(null);
