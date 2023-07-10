import { ReactNode, createContext, useState } from "react";

import useNotify, { THandleNotify } from "../hooks/useNotify";
import { ModalProps } from "../types/components";

type FeedbackContextProps = {
  children: ReactNode;
};

type FeedbackContextType = {
  showNotify: (props: THandleNotify) => void;
  isOpenLoader: boolean;
  setIsOpenLoader: (newState: boolean) => void;
  isOpenModal: boolean;
  setIsOpenModal: (newState: boolean) => void;
  modalProps: ModalProps;
  setModalProps: (props: ModalProps) => void;
};

export const FeedbackContext = createContext<FeedbackContextType>(
  {} as FeedbackContextType
);

export const FeedbackContextProvider = ({ children }: FeedbackContextProps) => {
  const { showNotify } = useNotify();
  const [isOpenLoader, setIsOpenLoader] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalProps, setModalProps] = useState<ModalProps>({
    effect: "animate-fade-in-up",
    blur: false,
    closeButton: false,
    preventClose: false,
    divider: false,
    header: null,
    body: null,
    footer: null,
  });

  return (
    <FeedbackContext.Provider
      value={{
        showNotify,
        isOpenLoader,
        setIsOpenLoader,
        isOpenModal,
        setIsOpenModal,
        modalProps,
        setModalProps,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
