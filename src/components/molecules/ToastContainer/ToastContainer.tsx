import { Toast as ToastComponent, Div } from "@/components";

interface Props {
  toasts: Toast[];
  onClose: (id: number) => void;
}
export const ToastContainer: React.FC<Props> = ({ toasts, onClose }) => {
  return (
    <Div className="fixed bottom-0 right-0 p-4 z-50">
      {toasts.map((toast) => (
        <ToastComponent
          key={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={() => onClose(toast.id)}
        />
      ))}
    </Div>
  );
};
