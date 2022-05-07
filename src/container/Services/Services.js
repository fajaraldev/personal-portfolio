import React, {useState, useEffect} from "react";
import { AppWrap } from "../../wrapper";
import { ServicesCard } from "../../components";

import "./Services.scss";

const dataServices = [
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

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    setServices(dataServices)
  }, []);

  return (
    <>
      <span className="section__subtitle">My Services</span>
      <h2 className="section__title">What I Offer</h2>

      <div className="container grid services__container">
        {services.map((service, i) => (
          <ServicesCard
            key={i}
            {...service}
          />
        ))}
      </div>
    </>
  )
}

export default AppWrap(Services, "services");
