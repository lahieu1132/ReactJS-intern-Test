import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import styled, { createGlobalStyle } from "styled-components";

const portalRoot = document.getElementById("portal-root");

const ScrollDisabler = createGlobalStyle`
  body {
    overflow-y: hidden;
  }
`;

const Modal = ({ isOpen, close, children }) => {
  const contentRef = useRef();

  useEffect(() => {
    if (!isOpen) return;

    function listener(evt) {
      if (contentRef.current?.contains(evt.target)) return;
      close();
    }

    window.addEventListener("click", listener);

    return () => {
      window.removeEventListener("click", listener);
    };
  }, [isOpen]);

  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.7)] flex justify-center items-center z-50">
          {children}
      </div>
      <ScrollDisabler />
    </>,
    portalRoot
  );
};

export default Modal;