import React from "react";

import { BsCheck } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";
import "./Modal.scss";

function Modal({title, description, offers, setIsOpen}) {
  return (
    <div className="modal">
      <div className="modal__content">
        <IoIosClose
          className="modal__close"
          onClick={() => setIsOpen(false)}
        />
        <h3 className="modal__title">{title}</h3>
        <p className="modal__description">
          {description}
        </p>

        <ul>
          {offers.map((offer, i) => (
            <li key={i}>
              <BsCheck className="icon" />
              <p>
                {offer}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Modal;
