import React from 'react'
import {  FaTimes } from 'react-icons/fa'
import { useGlobalContext } from "./context";
const Modal = () => {

  const {closeModal , isModalOpen} = useGlobalContext()

  return <div className={`modal-overlay ${isModalOpen ? "show-modal" : null } `} >
    <div className="modal-container" >
      <h3>modal content</h3>
      <button className="close-modal-btn" onClick={closeModal} >
        <FaTimes />
      </button>
    </div>
  </div>
}

export default Modal
