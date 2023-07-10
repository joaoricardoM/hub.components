import { toast } from "react-toastify";

export type THandleNotify = {
  type: "info" | "success" | "warning" | "error" | "default";
  message: string;
};

function useNotify() {
  function handle({ type, message }: THandleNotify) {
    toast(message, { type });
  }

  return { showNotify: handle };
}

export default useNotify;
