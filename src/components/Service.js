import React from "react";
import { Modal } from './index';

import { BsArrowRight } from "react-icons/bs";
import './Service.scss';

function Service(props) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="services__card">
      <h3>{props.title}</h3>
      <span
      onClick={() => setIsOpen(true)}
      >See More <BsArrowRight className="icon" /></span>

      {isOpen && <Modal {...props} setIsOpen={setIsOpen}/>}
    </div>
  );
}

export default Service;
