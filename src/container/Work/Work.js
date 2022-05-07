import React, {useState, useEffect} from "react";
import { motion } from 'framer-motion';
import { AppWrap } from "../../wrapper"

import { BsArrowRight } from "react-icons/bs";
import { images } from "../../constants";
import "./Work.scss";

const dataWorks = [
  {
    title: "Ex 1",
    imgUrl: images.project1, projectLink: "#",
    tags: ["All", "Web"]
  },
  {
    title: "Ex 2",
    imgUrl: images.project2, projectLink: "#",
    tags: ["All", "Design"]
  },
  {
    title: "Ex 3",
    imgUrl: images.project3, projectLink: "#", tags: ["All", "Mobile"]
  },
]

function Work() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [works, setWorks] = useState([]);
  const [filterwork, setFilterwork] = useState([]);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    setWorks(dataWorks);
    setFilterwork(dataWorks);
  }, []);

  function handleWorkFilter(item) {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterwork(works);
      } else {
        setFilterwork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  }

  return (
    <>
      <span className="section__subtitle">My Portfolio</span>
      <h2 className="section__title">Recent Works</h2>

      <div className="work__filters">
        {["All", "Web", "Mobile", "Design"].map((item, index) => (
          <span
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={activeFilter === item ? "active-work" : ""}
          >
            {item}
          </span>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="container grid work__container"
      >
        {filterwork.map((work, index) => (
          <div
            className="work__card"
            key={index}
          >
            <img
              src={work.imgUrl}
              alt={work.title}
            />
            <h3>{work.title}</h3>
            <a
              href={work.projectLink}
              target="_blank"
              rel="noreferrer"
            >
              Demo <BsArrowRight className="work__icon"/>
            </a>
          </div>
        ))}
      </motion.div>
    </>
  )
}

export default AppWrap(Work, "work");
