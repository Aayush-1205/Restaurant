import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';
import { useState } from 'react';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className='app__navbar'>
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app logo" />
      </div>
      <ul className="app__navbar-links">
        <li className='p__opensans'><a href="#home">Home</a></li>
        <li className='p__opensans'><a href="#menu">Menu</a></li>
        <li className='p__opensans'><a href="#about">About</a></li>
        <li className='p__opensans'><a href="#awards">Awards</a></li>
        <li className='p__opensans'><a href="#contact">Contact</a></li>
      </ul>
      <div className="app__navbar-login">
        <button type="button" className="custom__button">Book Table</button>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">

            <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen-links">
              <div className="app__navbar-log-logo">
                <img src={images.gericht} alt="app logo" />
              </div>

              <li className='p__opensans ho-me'><img src={images.ihome} alt="icon" /><a href="#home">Home</a></li>
              <li className='p__opensans me-nu'><img src={images.imenu} alt="" /><a href="#menu">Explore Menu</a></li>
              <li className='p__opensans bo-ok'><img src={images.itable} alt="" /><a href="#">Book Table</a></li>
              <li className='p__opensans ab-out'><img src={images.iabout} alt="" /><a href="#about">About</a></li>
              <li className='p__opensans awa-rd'><img src={images.iaward} alt="" /><a href="#awards">Awards</a></li>
              <li className='p__opensans cont-act'><img src={images.icontact} alt="" /><a href="#contact">Contact</a></li>
            </ul>
            <div className="app__smallscreen-links_icons">
              <FiFacebook />
              <FiTwitter />
              <FiInstagram />
            </div>
          </div>
        )};

      </div>
    </nav>
  )
}

export default Navbar;
