import React from "react";
import AppWrap from "../../wrapper/AppWrap";

import { HiBadgeCheck } from "react-icons/hi";
import "./Skills.scss";

function Skills() {
  return (
    <>
      <span className="section__subtitle">My Abilities</span>
      <h2 className="section__title">My Experience</h2>

      <div className="skills__container container grid">
        <div className="skills__content">
          <h3 className="skills__title">Frontend Developer</h3>
          <div className="skills__box">

            <div className="skills__group">
              <div className="skills__data">
                <HiBadgeCheck className="icon"/>
                <div>
                  <h3>HTML</h3>
                  <span>Advanced</span>
                </div>
              </div>
              <div className="skills__data">
                <HiBadgeCheck className="icon"/>
                <div>
                  <h3>CSS</h3>
                  <span>Intermediate</span>
                </div>
              </div>
              <div className="skills__data">
                <HiBadgeCheck className="icon"/>
                <div>
                  <h3>Javascript</h3>
                  <span>Advanced</span>
                </div>
              </div>
            </div>
            <div className="skills__group">
              <div className="skills__data">
                <HiBadgeCheck className="icon"/>
                <div>
                  <h3>Bootstrap</h3>
                  <span>Intermediate</span>
                </div>
              </div>
              <div className="skills__data">
                <HiBadgeCheck className="icon"/>
                <div>
                  <h3>Git</h3>
                  <span>Advanced</span>
                </div>
              </div>
              <div className="skills__data">
                <HiBadgeCheck className="icon"/>
                <div>
                  <h3>React</h3>
                  <span>Advanced</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="skills__content">
          <h3 className="skills__title">Frontend Developer</h3>
          <div className="skills__box">

            <div className="skills__group">
              <div className="skills__data">
                <HiBadgeCheck className="icon"/>
                <div>
                  <h3>HTML</h3>
                  <span>Advanced</span>
                </div>
              </div>
              <div className="skills__data">
                <HiBadgeCheck className="icon"/>
                <div>
                  <h3>CSS</h3>
                  <span>Intermediate</span>
                </div>
              </div>
              <div className="skills__data">
                <HiBadgeCheck className="icon"/>
                <div>
                  <h3>Javascript</h3>
                  <span>Advanced</span>
                </div>
              </div>
            </div>
            <div className="skills__group">
              <div className="skills__data">
                <HiBadgeCheck className="icon"/>
                <div>
                  <h3>Bootstrap</h3>
                  <span>Intermediate</span>
                </div>
              </div>
              <div className="skills__data">
                <HiBadgeCheck className="icon"/>
                <div>
                  <h3>Git</h3>
                  <span>Advanced</span>
                </div>
              </div>
              <div className="skills__data">
                <HiBadgeCheck className="icon"/>
                <div>
                  <h3>React</h3>
                  <span>Advanced</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default AppWrap(Skills, "skills");
