import React from "react";
import { AppWrap } from "../../wrapper"


import { BsArrowRight } from "react-icons/bs";
import { images } from "../../constants";
import "./Work.scss";

const data = [
  {title: "Ex 1", imgUrl: images.project1,projectLink: "#", tags: ['All', 'Web']},
  {title: "Ex 2", imgUrl: images.project2,projectLink: "#", tags: ['All', 'Design']},
  {title: "Ex 3", imgUrl: images.project3,projectLink: "#", tags: ['All', 'Mobile']},
]

function Work() {
  const [activeFilter, setActiveFilter] = React.useState('All');
  const [works, setWorks] = React.useState([]);
  const [filterwork, setFilterwork] = React.useState([]);

  React.useEffect(() => {
    setWorks(data);
    setFilterwork(data);
  }, []);

  function handleWorkFilter(item) {
    setActiveFilter(item);
    if (item === 'All') {
      setFilterwork(works);
    } else {
      setFilterwork(works.filter((work) => work.tags.includes(item)));
    }
  }

  return (
    <>
      <span className="section__subtitle">My Portfolio</span>
      <h2 className="section__title">Recent Works</h2>

      <div className="work__filters">
        {['All', 'Web', 'Mobile', 'Design'].map((item, index) => (
          <span
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={activeFilter === item ? 'active-work' : ''}
          >
            {item}
          </span>
        ))}
      </div>

      <div className="work__container container grid">
        {filterwork.map((work, index) => (
          <div key={index} className="work__card">
            <img src={work.imgUrl} alt={work.title}/>

            <h3>{work.title}</h3>
            <a href={work.projectLink} target="_blank" rel="noreferrer">
              Demo <BsArrowRight className="icon"/>
            </a>
          </div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(Work, 'work');
