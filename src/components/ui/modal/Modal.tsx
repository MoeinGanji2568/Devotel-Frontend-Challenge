import { X } from "lucide-react";
import { createPortal } from "react-dom";
import type { ModalProps } from "./Modal.types";

function Modal({
  open,
  onClose,
  title,
  children,
  description = "",
}: ModalProps) {
  return (
    open &&
    createPortal(
      <div
        className="backdrop-blur-sm fixed top-0 left-0
           w-full h-screen bg-black/30 dark:bg-black/50 z-50"
      >
        <div
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        rounded-lg bg-card-background border border-card-border p-4 shadow-lg transition-all duration-500 ease-out
        w-[calc(100vw-2rem)] md:max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto"
        >
          <div
            className="flex items-center justify-between border-b 
          border-border-primary pb-2 mb-6"
          >
            <div>
              <p className="text-text-primary font-bold text-base">{title}</p>
              <p className="text-text-secondary text-sm lg:text-base">
                {description}
              </p>
            </div>
            <button onClick={onClose}>
              <X className="w-5 h-5 text-C_gray-100" />
            </button>
          </div>
          {children}
        </div>
      </div>,
      document.body
    )
  );
}
export default Modal;
