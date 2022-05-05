import React, {useState, useEffect} from 'react';
import { AppWrap } from '../../wrapper';
import { BsInstagram, BsTwitter, BsFacebook } from 'react-icons/bs';
import { FaBlogger } from 'react-icons/fa';

import './Footer.scss';

const dataLinks = [
  {
    link: "#about",
    name: "About"
  },
  {
    link: "#work",
    name: "Work"
  },
  {
    link: "#testimonials",
    name: "Testimonials"
  },
]

const dataSocials = [
  {
    name: "Instagram",
    link: 'https://www.instagram.com/fajarghifar',
    Icon: <BsInstagram/>
  },
  {
    name: "Facebook",
    link: '#',
    Icon: <BsFacebook/>
  },
  {
    name: "Twitter",
    link: 'https://twitter.com/Fajaralg',
    Icon: <BsTwitter/>
  },
  {
    name: "Blogger",
    link: 'https://fajaral.com/',
    Icon: <FaBlogger/>
  },
]

function Footer() {
  const [links, setLinks] = useState([]);
  const [socials, setSocials] = useState([]);

  useEffect(() => {
    setLinks(dataLinks);
    setSocials(dataSocials);
  }, [])

  return (
    <div className="footer__container container">
      <h1 className="footer__title">FajaralDev</h1>

      <ul className="footer__list">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.link}>{ link.name }</a>
          </li>
        ))}
      </ul>

      <ul className="footer__social">
        {socials.map((social, index) => (
          <a
            href={social.link} key={index}
          >
            { social.Icon }
          </a>
        ))}
      </ul>

      <span className="footer__copy">
        &#169; Fajaraldev. All rigths reserved
      </span>
    </div>
  )
}

export default AppWrap(Footer, 'footer');
