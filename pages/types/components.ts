import { ReactNode } from "react";

export interface ModalProps {
  effect?:
    | "animate-fade-in-down"
    | "animate-fade-out-down"
    | "animate-fade-in-up"
    | "animate-fade-out-up";

  blur?: boolean;
  closeButton?: boolean;
  preventClose?: boolean;
  divider?: boolean;

  header?: ReactNode;
  body?: ReactNode;
  footer?: ReactNode;
}
