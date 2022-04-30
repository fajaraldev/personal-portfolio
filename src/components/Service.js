import React from "react";

import { BsCheck } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";
import './Service.scss';

function Service({title, description, offers}) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="services__card">
      <h3>{title}</h3>
      <span
      onClick={() => setIsOpen(true)}
      >
        See More <BsArrowRight className="icon" />
      </span>

      {/* modal */}
      <div className={isOpen? "modal active-modal" : "modal"}>
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
    </div>
  );
}

export default Service;
