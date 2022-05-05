import React, { useState, useEffect } from "react";
import { AppWrap } from "../../wrapper";

import { HiBadgeCheck } from "react-icons/hi";
import "./Skills.scss";

const dataSkills = [
  {
    title: "Frontend Developer",
    left: [
      { name: "HTML", level: "Advanced" },
      { name: "CSS", level: "Advanced" },
      { name: "Javascript", level: "Advanced" },
    ],
    right: [
      { name: "Tailwind", level: "Intermediate" },
      { name: "Git", level: "Advanced" },
      { name: "React", level: "Intermediate" },
    ]
  },
  {
    title: "Backend Developer",
    left: [
      {name: "PHP", level: "Basic"},
      {name: "NodeJs", level: "Intermediate"},
      {name: "Python", level: "Intermediate"},
    ],
    right: [
      {name: "Firebase", level: "Intermediate"},
      {name: "GraphQl", level: "Intermediate"}
    ]
  }
]

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(dataSkills)
  }, []);

  return (
    <>
      <span className="section__subtitle">My Abilities</span>
      <h2 className="section__title">My Experience</h2>

      <div className="skills__container container grid">
        {skills.map((skill, index) => (
          <div
            className="skills__content"
            key={index}
          >
            <h3 className="skills__title">{ skill.title }</h3>

            <div className="skills__box">
              <div className="skills__group">
                {skill.left.map((item, index) => (
                  <div
                    className="skills__data"
                    key={index}
                  >
                    <HiBadgeCheck className="skills__icon"/>
                    <div>
                      <h3>{ item.name }</h3>
                      <span>{ item.level }</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="skills__group">
                {skill.right.map((item, index) => (
                  <div
                    className="skills__data"
                    key={index}
                  >
                    <HiBadgeCheck className="skills__icon"/>
                    <div>
                      <h3>{ item.name }</h3>
                      <span>{ item.level }</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(Skills, "skills");
