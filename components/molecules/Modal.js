import React from "react";
import classNames from "classnames";

import { IoMdClose } from "react-icons/io";

const Modal = (props) => {
  let [modalOpen, setModalOpen] = React.useState(true);
  React.useEffect(() => {
    if (modalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [modalOpen]);

  return (
    <div
      className={classNames(
        "fixed w-full min-h-screen inset-0 transition-all flex flex-col items-center sm:py-16 bg-black/80 overflow-y-scroll",
        modalOpen ? "opacity-1 visible" : "opacity-0 invisible"
      )}
    >
      <div className="w-full h-full sm:h-auto sm:max-w-[400px] bg-white flex flex-col sm:rounded-md">
        <div className="flex justify-end">
          <button
            className="p-3 text-gray-500 text-2xl"
            onClick={() => setModalOpen(false)}
          >
            <IoMdClose />
          </button>
        </div>
        <div className="px-6 pb-6 grow">
          {React.Children.map(props.children, (child) => child)}
        </div>
      </div>
    </div>
  );
};

export default Modal;