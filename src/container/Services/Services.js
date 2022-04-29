import React from "react";
import AppWrap from "../../wrapper/AppWrap";
import { Service } from '../../components';

import './Services.scss';

function Services() {
  const services = [
    {
      title: "Product Designer",
      description: "Service with more than 1 years of experience. Providing quality work to clients and companies.",
      offers: [
        "I Develop the user interface.",
        "Web page development.",
        "I create ux element interactions.",
        "I Position your company brand.",
        "Design and mockups of product for companies.",
      ]
    },
    {
      title: "UI/UX Designer",
      description: "Service with more than 1 years of experience. Providing quality work to clients and companies.",
      offers: [
        "I Develop the user interface.",
        "Web page development.",
        "I create ux element interactions.",
        "I Position your company brand.",
        "Design and mockups of product for companies.",
      ]
    },
    {
      title: "Visual Designer",
      description: "Service with more than 1 years of experience. Providing quality work to clients and companies.",
      offers: [
        "I Develop the user interface.",
        "Web page development.",
        "I create ux element interactions.",
        "I Position your company brand.",
        "Design and mockups of product for companies.",
      ]
    },
  ]

  return (
    <>
      <span className="section__subtitle">My Services</span>
      <h2 className="section__title">What I Offer</h2>

      <div className="services__container container grid">
        {services.map((service, i) => (
          <Service key={i} {...service}/>
        ))}
      </div>
    </>
  )
}

export default AppWrap(Services, "services");
