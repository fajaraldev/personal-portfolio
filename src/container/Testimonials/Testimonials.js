import React, {useState, useEffect} from "react";
import { AppWrap } from "../../wrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import { images } from "../../constants";
import "swiper/css";
import "swiper/css/pagination";
import "./Testimonials.scss";

const testimonialsData = [
  {
    name: "Jamie Harisson", imgUrl: images.testimonial1,
    description: "A really good job, all aspects of the project were followed step by step and with good results."
  },
  {
    name: "Paula Vusy", imgUrl: images.testimonial2,
    description: "A really good job, all aspects of the project were followed step by step and with good results."
  },
  {
    name: "Sara Chil", imgUrl: images.testimonial3,
    description: "A really good job, all aspects of the project were followed step by step and with good results."
  },
]

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    setTestimonials(testimonialsData)
  }, [])

  return (
    <>
      <span className="section__subtitle">My Client Say</span>
      <h2 className="section__title">Testimonials</h2>

      <div className="testimonial__container container">
        <Swiper
          slidesPerView={1}
          spaceBetween={24}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 48,
            }
          }}
          pagination={{
            clickable: true
            }}
          loop={true}
          grabCursor={true}
          modules={[Pagination]}
          className="testimonial__container container"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              className="testimonial__card"
              key={index}
            >
              <img src={testimonial.imgUrl} alt={testimonial.name} />
              <h3>{testimonial.name}</h3>
              <p>{testimonial.description}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default AppWrap(Testimonials, "testimonials");
