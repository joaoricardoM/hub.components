import React, { useState } from "react";

interface ModalListProps {
  title: string;
  header: string;
  body: string;
  footer: string;
  visible: boolean;
  setVisible: () => void;
  blur: boolean;
  preventClose: boolean;
  closeButton: boolean;
}

const Modal: React.FC<ModalListProps> = ({
  title,
  header,
  body,
  footer,
  setVisible,
  visible,
  closeButton = false,
  blur = false,
  preventClose = false,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="bg-blue-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Show Modal
      </button>
      <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-sm">
            <div className="relative w-full my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-3xl font=semibold">{title}</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                    <label className="block text-black text-sm font-bold mb-1">
                      {body}
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black mb-4" />
                    <label className="block text-black text-sm font-bold mb-1">
                      {body}
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black mb-4" />
                    <label className="block text-black text-sm font-bold mb-1">
                      {body}
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black mb-4 " />
                    <label className="block text-black text-sm font-bold mb-1">
                      {body}
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black mb-4" />
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    {footer}
                  </button>
                  <button
                    className="text-white bg-green-500 active:bg-green-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    {footer}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;