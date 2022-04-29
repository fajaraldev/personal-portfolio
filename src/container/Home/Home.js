import React from 'react'
import { FaLinkedin, FaDribbbleSquare, FaGithub, FaMouse } from 'react-icons/fa';
import AppWrap from '../../wrapper/AppWrap';

import { images } from '../../constants';
import './Home.scss';

function Home() {
  const socials = [
    { link: 'https://www.linkedin.com/in/fajaralg/', icon: <FaLinkedin /> },
    { link: 'https://github.com/fajaraldev', icon: <FaGithub/> },
    { link: '#', icon: <FaDribbbleSquare/> }
  ]

  return (
      <div className="home__container container grid">
        <div className="home__data">
          <span className="home__greeting">Hello, I'm</span>
          <h1 className="home__name">Fajar Ghifari Nugroho</h1>
          <h3 className="home__education">Frontend Developer</h3>

          <div className="home__buttons">
            <a href="#" className="button button--ghost">
              Download CV
            </a>
            <a href="#about" className="button">About Me</a>
          </div>
        </div>

        <div className="home__handle">
          <img src={images.profile} alt="profile"/>
        </div>

        <div className="home__social">
          {socials.map((social, i) => (
            <a key={social} href={social.link} target="_blank" rel='noreferrer'>
              {social.icon}
            </a>
          ))}
        </div>

        <a href="#about" className="home__scroll">
          <FaMouse className="home__scroll-icon"/>
          <span className="home__scroll-name">Scroll Down</span>
        </a>
      </div>
  )
}

export default AppWrap(Home, 'home');
