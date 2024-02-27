import { Toast } from "@/components";
import { type Toast as ToastType } from "@/types";

interface Props {
  toasts: ToastType[];
  onClose: (id: number) => void;
}
export const ToastContainer: React.FC<Props> = ({ toasts, onClose }) => {
  return (
    <div className="fixed bottom-0 right-0 p-4 z-50">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={() => onClose(toast.id)}
        />
      ))}
    </div>
  );
};
