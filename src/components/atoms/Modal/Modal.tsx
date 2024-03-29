"use client";

import { useState } from "react";
import React from "react";
import FloatingButton from "../Button/FloatingButton";
import { ShowModal } from "@/components/molecules";
import { useMyContext } from "@/Contexts/MyContext";

const Modal = () => {
  const {selectUser , userInfo} = useMyContext();
  const [modalState, setModalState] = useState<boolean>(false);
  return (
    <div>
      <FloatingButton
        position="top-right"
        classname="inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
        onclick={() => setModalState(true)}
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0 text-black hover:text-white">
          {
            selectUser ? 'Edit' : 'Add'
          }
        </span>
      </FloatingButton>
      <div>{modalState && <ShowModal setModalState={setModalState} />}</div>
    </div>
  );
};

export default Modal;
