import React from 'react';
import { AppWrap } from '../../wrapper';
import { BsInstagram, BsTwitter, BsFacebook } from 'react-icons/bs';
import { FaBlogger } from 'react-icons/fa';

import './Footer.scss';

const footerLink = [
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

const footerSocial = [
  {
    name: "Instagram",
    link: 'https://www.instagram.com/fajarghifar', icon: BsInstagram
  },
  {
    name: "Facebook",
    link: '#', icon: BsFacebook
  },
  {
    name: "Twitter",
    link: 'https://twitter.com/Fajaralg', icon: BsTwitter
  },
  {
    name: "Blogger",
    link: 'https://fajaral.com/', icon: FaBlogger
  },
]

function Footer() {
  return (
    <div className="footer__container container">
      <h1 className="footer__title">FajaralDev</h1>

      <ul className="footer__list">
        {footerLink.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{ item.name }</a>
          </li>
        ))}
      </ul>

      <ul className="footer__social">
        {footerSocial.map((item, index) => (
          <a href={ item.link } key={index}>
            <item.icon/>
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
