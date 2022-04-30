import React from "react";
import { AppWrap } from "../../wrapper";
import { BiBriefcase, BiSupport, BiAward } from "react-icons/bi";

import { images } from "../../constants";
import "./About.scss";

function About() {
  return (
    <>
      <span className="section__subtitle">My Intro</span>
      <h2 className="section__title">About Me</h2>

      <div className="about__container container grid">
        <img src={images.about} alt="profile" />

        <div className="about__data">
          <div className="about__info">
            <div>
              <BiAward className="about__icon" />
              <h3>Experience</h3>
              <span>2+ Years Working</span>
            </div>

            <div>
              <BiBriefcase className="about__icon" />
              <h3>Completed</h3>
              <span>10+ Projects</span>
            </div>

            <div>
              <BiSupport className="about__icon" />
              <h3>Support</h3>
              <span>Online 24/7</span>
            </div>
          </div>

          <p>
            Frontend developer, I create web pages with UI / UX user interface,
            I have years of experience and many clients are happy
            with the projects carried out.
          </p>

          <a href="#contact" className="button">Contact Me</a>
        </div>

      </div>
    </>
  )
}

export default AppWrap(About, "about");
