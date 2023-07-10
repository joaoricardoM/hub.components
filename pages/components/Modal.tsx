import React, { useContext } from "react";
import { NextComponentType } from "next";
import { FeedbackContext } from "../context/feedbackContext";
import { Props } from "../types/generic";

const Modal: NextComponentType = (props: Props): JSX.Element => {
  const { isOpenModal, setIsOpenModal, modalProps } =
    useContext(FeedbackContext);

  const handlePreventClose = () => {
    if (!modalProps?.preventClose) {
      setIsOpenModal(false);
    }
  };

  const handleClose = () => setIsOpenModal(false);

  return isOpenModal ? (
    <div
      className={`${
        modalProps?.effect
      } flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ${
        modalProps?.blur ? "backdrop-blur-sm" : "backdrop-brightness-50"
      }`}
      onClick={handlePreventClose}
    >
      <div
        className={`${modalProps?.effect} relative w-full my-6 mx-auto max-w-3xl`}
      >
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/* Header - Start */}
          <div
            className={`flex items-start justify-between p-6 ${
              modalProps?.divider && "border-b border-solid border-gray-200"
            } rounded-t`}
          >
            {modalProps?.header ? modalProps?.header : <div></div>}

            {modalProps?.closeButton && (
              <button
                className="bg-transparent border-0 text-black float-right"
                onClick={handleClose}
              >
                <span className="text-black opacity-7 h-6 w-6 text-xl block">
                  x
                </span>
              </button>
            )}
          </div>
          {/* Header - End */}

          {/* Body - Start */}
          <div className="relative p-6 flex-auto">{modalProps?.body}</div>
          {/* Body - End */}

          {/* Footer - Start */}
          <div
            className={`flex items-center justify-end p-6 ${
              modalProps?.divider && "border-t border-solid border-gray-200"
            } rounded-b`}
          >
            {modalProps?.footer ? (
              modalProps?.footer
            ) : (
              <button
                type="button"
                className="text-blue-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                onClick={handleClose}
              >
                Ok
              </button>
            )}
          </div>
          {/* Footer - End */}
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Modal;
