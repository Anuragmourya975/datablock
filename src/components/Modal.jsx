import React from "react";
import Sidebar from "./Sidebar";

function Modal({ visible, onClose, createNew }) {
  if (!visible) return null;
  return (
    // <!-- Main modal -->
    <div
      id="defaultModal"
      tabIndex="-1"
      aria-hidden="true"
      className="fixed bg-opacity-20 backdrop-blur-sm top-0 left-0 right-0 z-50 flex justify-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
    >
      <div className="relative w-full h-full max-w-5xl md:h-auto">
        {/* <!-- Modal content --> */}
        <div className="relative bg-white rounded-lg shadow dark:bg-black">
          {/* <!-- Modal header --> */}
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Add Nodes
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="defaultModal"
              onClick={onClose}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* <!-- Modal body --> */}
          <div className="p-6 space-y-6 flex">
            <Sidebar />
            <div className="grid grid-cols-2 m-6 gap-4">
              <div className="max-w-xs mx-auto">
                <div
                  className="relative bg-indigo-700 rounded-lg shadow-lg p-5 overflow-hidden cursor-pointer"
                  onClick={createNew}
                >
                  {/* <!-- Card content --> */}
                  <div className="relative pt-2 pb-2">
                    <div className="text-xs font-bold uppercase text-green-400 tracking-widest mb-2">
                      Featured app
                    </div>
                    <h3 className="text-xl font-extrabold text-indigo-50 leading-snug mb-2">
                      Lorem ipsum dolor sit amet.
                    </h3>
                    <p className="text-indigo-200">
                      Lorem ipsum dolor sit amet, consecte adipiscing elit sed
                      do eiusmod.
                    </p>
                  </div>
                </div>
              </div>
              <div className="max-w-xs mx-auto">
                <div className="relative bg-indigo-700 rounded-lg shadow-lg p-5 overflow-hidden">
                  {/* <!-- Card content --> */}
                  <div className="relative pt-2 pb-2">
                    <div className="text-xs font-bold uppercase text-green-400 tracking-widest mb-2">
                      Featured app
                    </div>
                    <h3 className="text-xl font-extrabold text-indigo-50 leading-snug mb-2">
                      Lorem ipsum dolor sit amet.
                    </h3>
                    <p className="text-indigo-200">
                      Lorem ipsum dolor sit amet, consecte adipiscing elit sed
                      do eiusmod.
                    </p>
                  </div>
                </div>
              </div>
              <div className="max-w-xs mx-auto">
                <div className="relative bg-indigo-700 rounded-lg shadow-lg p-5 overflow-hidden">
                  {/* <!-- Card content --> */}
                  <div className="relative pt-2 pb-2">
                    <div className="text-xs font-bold uppercase text-green-400 tracking-widest mb-2">
                      Featured app
                    </div>
                    <h3 className="text-xl font-extrabold text-indigo-50 leading-snug mb-2">
                      Lorem ipsum dolor sit amet.
                    </h3>
                    <p className="text-indigo-200">
                      Lorem ipsum dolor sit amet, consecte adipiscing elit sed
                      do eiusmod.
                    </p>
                  </div>
                </div>
              </div>
              <div className="max-w-xs mx-auto">
                <div className="relative bg-indigo-700 rounded-lg shadow-lg p-5 overflow-hidden">
                  {/* <!-- Card content --> */}
                  <div className="relative pt-2 pb-2">
                    <div className="text-xs font-bold uppercase text-green-400 tracking-widest mb-2">
                      Featured app
                    </div>
                    <h3 className="text-xl font-extrabold text-indigo-50 leading-snug mb-2">
                      Lorem ipsum dolor sit amet.
                    </h3>
                    <p className="text-indigo-200">
                      Lorem ipsum dolor sit amet, consecte adipiscing elit sed
                      do eiusmod.
                    </p>
                  </div>
                </div>
              </div>
              <div className="max-w-xs mx-auto">
                <div className="relative bg-indigo-700 rounded-lg shadow-lg p-5 overflow-hidden">
                  {/* <!-- Card content --> */}
                  <div className="relative pt-2 pb-2">
                    <div className="text-xs font-bold uppercase text-green-400 tracking-widest mb-2">
                      Featured app
                    </div>
                    <h3 className="text-xl font-extrabold text-indigo-50 leading-snug mb-2">
                      Lorem ipsum dolor sit amet.
                    </h3>
                    <p className="text-indigo-200">
                      Lorem ipsum dolor sit amet, consecte adipiscing elit sed
                      do eiusmod.
                    </p>
                  </div>
                </div>
              </div>
              <div className="max-w-xs mx-auto">
                <div className="relative bg-indigo-700 rounded-lg shadow-lg p-5 overflow-hidden">
                  {/* <!-- Card content --> */}
                  <div className="relative pt-2 pb-2">
                    <div className="text-xs font-bold uppercase text-green-400 tracking-widest mb-2">
                      Featured app
                    </div>
                    <h3 className="text-xl font-extrabold text-indigo-50 leading-snug mb-2">
                      Lorem ipsum dolor sit amet.
                    </h3>
                    <p className="text-indigo-200">
                      Lorem ipsum dolor sit amet, consecte adipiscing elit sed
                      do eiusmod.
                    </p>
                  </div>
                </div>
              </div>
              <div className="max-w-xs mx-auto">
                <div className="relative bg-indigo-700 rounded-lg shadow-lg p-5 overflow-hidden">
                  {/* <!-- Card content --> */}
                  <div className="relative pt-2 pb-2">
                    <div className="text-xs font-bold uppercase text-green-400 tracking-widest mb-2">
                      Featured app
                    </div>
                    <h3 className="text-xl font-extrabold text-indigo-50 leading-snug mb-2">
                      Lorem ipsum dolor sit amet.
                    </h3>
                    <p className="text-indigo-200">
                      Lorem ipsum dolor sit amet, consecte adipiscing elit sed
                      do eiusmod.
                    </p>
                  </div>
                </div>
              </div>
              <div className="max-w-xs mx-auto">
                <div className="relative bg-indigo-700 rounded-lg shadow-lg p-5 overflow-hidden">
                  {/* <!-- Card content --> */}
                  <div className="relative pt-2 pb-2">
                    <div className="text-xs font-bold uppercase text-green-400 tracking-widest mb-2">
                      Featured app
                    </div>
                    <h3 className="text-xl font-extrabold text-indigo-50 leading-snug mb-2">
                      Lorem ipsum dolor sit amet.
                    </h3>
                    <p className="text-indigo-200">
                      Lorem ipsum dolor sit amet, consecte adipiscing elit sed
                      do eiusmod.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Modal footer --> */}
        </div>
      </div>
    </div>
  );
}

export default Modal;
